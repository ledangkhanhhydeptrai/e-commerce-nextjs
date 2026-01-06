"use client";

import { RootState } from "@/store/store";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updatePaymentFromServer,
  resetPaymentState,
  setError
} from "../store/paymentSlice";
import { PaymentEnum, PaymentProps } from "../paymentProps/Payment";
import {
  ConfirmPaymentAPI,
  CancelPaymentPostAPI,
  PaymentAPI
} from "../services/PaymentAPI";
import { AxiosError } from "axios";

export const usePayment = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.payment
  );

  const params = useParams();
  const orderId = params.orderId as string; // 🔥 LẤY TỪ PATH

  React.useEffect(() => {
    const isValidUUID = (value: string) => /^[0-9a-fA-F-]{36}$/.test(value);

    if (!orderId || orderId === "cancel" || !isValidUUID(orderId)) {
      console.warn("Invalid orderId:", orderId);
      return;
    }

    const query = new URLSearchParams(window.location.search);
    const statusParam = query.get("status"); // PAID | CANCELLED

    (async () => {
      try {
        let paymentStatus: PaymentEnum | null = null;
        let paymentData: PaymentProps | null = null;

        // 1️⃣ PayOS cancel callback
        if (statusParam === "CANCELLED") {
          paymentData = await CancelPaymentPostAPI(orderId, "CANCELLED");
          paymentStatus = "CANCELLED";
        }
        // 2️⃣ PayOS success callback
        else if (statusParam === "PAID") {
          paymentData = await ConfirmPaymentAPI(orderId);
          paymentStatus = "PAID";
        }
        // 3️⃣ FIRST TIME → CREATE PAYMENT
        else {
          console.log("🚀 Creating payment for:", orderId);
          const payOSResponse = await PaymentAPI(orderId);

          if (!payOSResponse?.checkoutUrl) {
            throw new Error("❌ Missing checkoutUrl from backend");
          }

          console.log("➡️ Redirect PayOS:", payOSResponse.checkoutUrl);
          window.location.href = payOSResponse.checkoutUrl;
          return;
        }

        if (paymentStatus) {
          dispatch(updatePaymentFromServer(paymentStatus));

          if (paymentStatus === "PAID" || paymentStatus === "CANCELLED") {
            dispatch(resetPaymentState());
            router.replace("/");
          }
        }
      } catch (err) {
        const errors = err as AxiosError;
        console.error("❌ Payment error:", errors);
        dispatch(setError(errors.message || "Payment error"));
      }
    })();
  }, [orderId, dispatch, router]);

  return { payment: data, loading, error };
};
