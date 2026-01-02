import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import React from "react";
import { getCartRequest } from "../store/cartSlice";

export function useCart() {
  const { cart, loading, error } = useSelector(
    (state: RootState) => state.cart
  );
  const dispatch = useDispatch<AppDispatch>();

  React.useEffect(() => {
    dispatch(getCartRequest()); // gọi 1 lần khi Header mount
  }, [dispatch]);
  return { cart, loading, error };
}
