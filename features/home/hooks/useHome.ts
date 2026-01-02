// features/home/hooks/useHome.ts
"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import { getProductRequest } from "../store/homeSlice";
import React from "react";

export function useHome() {
  const dispatch = useDispatch<AppDispatch>();

  const { products, loading, error } = useSelector(
    (state: RootState) => state.product
  );

  React.useEffect(() => {
    dispatch(getProductRequest());
  }, [dispatch]);

  // ⭐ lấy 4 sản phẩm đầu làm featured
  const featuredPhones = products.slice(0, 4);

  return {
    featuredPhones,
    loading,
    error
  };
}
