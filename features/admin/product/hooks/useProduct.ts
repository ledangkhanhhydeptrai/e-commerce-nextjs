"use client";

import { AppDispatch, RootState } from "@/store/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProductRequestAdminById } from "../store/productSliceAdminById";
import {
  createProductRequestAdmin,
  getProductRequestAdmin
} from "../store/productSliceAdmin";
import { ProductFormData } from "../services/ProductServices";

const LOW_STOCK_THRESHOLD = 5;

export const useProduct = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    product,
    loading,
    error
  } = useSelector((state: RootState) => state.productAdmin);

  React.useEffect(() => {
    if (product.length === 0) {
      dispatch(getProductRequestAdmin());
    }
  }, [dispatch, product.length]);

  // 🔥 derive stats – không fix cứng
  const stats = React.useMemo(() => {
    const totalProduct = product.length;

    const totalQuantity = product.reduce((sum, p) => sum + p.quantity, 0);

    const totalValue = product.reduce(
      (sum, p) => sum + p.price * p.quantity,
      0
    );

    const lowStock = product.filter(
      (p) => p.quantity <= LOW_STOCK_THRESHOLD
    ).length;

    return {
      totalProduct,
      totalQuantity,
      totalValue,
      lowStock
    };
  }, [product]);

  return {
    product,
    loading,
    error,
    stats
  };
};
export const useCreateProduct = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error } = useSelector(
    (state: RootState) => state.productAdmin
  );
  const createProduct = (data: ProductFormData) => {
    dispatch(createProductRequestAdmin(data));
  };
  return { loading, error, createProduct };
};
export const useProductById = (id: string) => {
  const dispatch = useDispatch<AppDispatch>();

  const { products, loading, error } = useSelector(
    (state: RootState) => state.productAdminById
  );

  React.useEffect(() => {
    if (id) {
      dispatch(getProductRequestAdminById(id));
    }
  }, [dispatch, id]);

  return {
    products,
    loading,
    error
  };
};
