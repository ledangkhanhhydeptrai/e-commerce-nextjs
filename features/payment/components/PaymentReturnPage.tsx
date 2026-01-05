"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams, useRouter } from "next/navigation";
import { PaymentAPI } from "../services/PaymentAPI";
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

  const orderId = searchParams.get("orderId"); // từ returnUrl
  const statusParam = searchParams.get("status"); // "CANCELLED" hoặc undefined

  useEffect(() => {
    if (!orderId) {
      console.error("Missing orderId in query params");
      router.replace("/"); // redirect Home luôn nếu thiếu orderId
      return;
    }

    (async () => {
      try {
        let paymentStatus: PaymentEnum | null = null;

        // Nếu redirect cancel → không gọi API confirm
        if (statusParam === "CANCELLED") {
          paymentStatus = "CANCELLED";
        } else {
          const res = await PaymentAPI(orderId);
          if (res?.paymentStatus) {
            paymentStatus = res.paymentStatus;
          }
        }

        if (paymentStatus) {
          dispatch(updatePaymentFromServer(paymentStatus));

          // Nếu thanh toán xong hoặc hủy → reset state + redirect Home
          if (paymentStatus === "PAID" || paymentStatus === "CANCELLED") {
            dispatch(resetPaymentState());

            // Dùng router.replace để redirect mà không reload
            router.replace("/");
          }
        }
      } catch (e) {
        const errors = e as AxiosError;
        console.error("Confirm payment error:", errors.message);
      }
    })();
  }, [orderId, statusParam, dispatch, router]);

  return <p>Đang xác nhận thanh toán...</p>;
}
