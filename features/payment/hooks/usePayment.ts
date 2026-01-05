import { RootState } from "@/store/store";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPaymentRequest } from "../store/paymentSlice";

export const usePayment = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const { data, loading, error } = useSelector(
    (state: RootState) => state.payment
  );

  const params = useParams();

  React.useEffect(() => {
    if (params.orderId) {
      dispatch(createPaymentRequest(params.orderId as string));
    }
  }, [params.orderId, dispatch]);

  // ✅ Redirect đúng chuẩn
  React.useEffect(() => {
    if (!data) {
      console.log("❌ data is null");
      return;
    }

    if (data.orderStatus === "COMPLETED") {
      router.replace("/");
    }
  }, [data, router]);

  return {
    payment: data,
    loading,
    error
  };
};
