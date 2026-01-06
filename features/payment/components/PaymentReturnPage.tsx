"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams, useRouter } from "next/navigation";
import {
  ConfirmPaymentAPI,
  CancelPaymentPostAPI
} from "../services/PaymentAPI";
import {
  updatePaymentFromServer,
  resetPaymentState
} from "../store/paymentSlice";
import { PaymentEnum } from "../paymentProps/Payment";
import { AxiosError } from "axios";

export default function PaymentReturnPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();

  const orderId = searchParams.get("orderId");
  const statusParam = searchParams.get("status"); // "CANCELLED" hoặc undefined

  useEffect(() => {
    if (!orderId) {
      console.error("❌ Missing orderId in query params");
      router.replace("/"); // redirect Home nếu thiếu orderId
      return;
    }

    (async () => {
      try {
        let paymentStatus: PaymentEnum | null = null;

        console.log("PaymentReturnPage params:", { orderId, statusParam });

        if (statusParam === "CANCELLED") {
          // 1️⃣ User cancel → gọi POST API
          console.log("Calling CancelPaymentPostAPI...");
          await CancelPaymentPostAPI(orderId, "CANCELLED");
          paymentStatus = "CANCELLED";
          console.log("CancelPaymentPostAPI success");
        } else {
          // 2️⃣ User thanh toán thành công → gọi confirm API
          console.log("Calling ConfirmPaymentAPI...");
          const res = await ConfirmPaymentAPI(orderId);
          console.log("ConfirmPaymentAPI response:", res);

          if (res?.paymentStatus) {
            paymentStatus = res.paymentStatus;
          }
        }

        // 3️⃣ Update redux state
        if (paymentStatus) {
          console.log("Updating redux state:", paymentStatus);
          dispatch(updatePaymentFromServer(paymentStatus));

          // 4️⃣ Nếu thanh toán xong hoặc hủy → reset state + redirect Home
          if (paymentStatus === "PAID" || paymentStatus === "CANCELLED") {
            dispatch(resetPaymentState());
            console.log("Redirecting to Home...");
            router.replace("/"); // redirect mà không reload
          }
        }
      } catch (e) {
        const errors = e as AxiosError;
        console.error("❌ Payment confirmation error:", errors.message);
      }
    })();
  }, [orderId, statusParam, dispatch, router]);

  return <p>Đang xác nhận thanh toán...</p>;
}
