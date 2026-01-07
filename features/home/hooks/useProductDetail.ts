// features/home/hooks/useProductDetail.ts
"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import {
  getProductDetailRequest,
  clearProductDetail
} from "../store/productDetailSlice";
import React from "react";

export function useProductDetail(id?: string) {
  const dispatch = useDispatch<AppDispatch>();

  const { product, loading, error } = useSelector(
    (state: RootState) => state.productId
  );

  React.useEffect(() => {
    if (!id) return; // 🛡️ tránh undefined

    dispatch(getProductDetailRequest(id));

    return () => {
      dispatch(clearProductDetail());
    };
  }, [id, dispatch]);

  return {
    product,
    loading,
    error
  };
}
