import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import React from "react";
import {
  addCart,
  deleteQuantity,
  getCartRequest,
  updateQuantity
} from "../store/cartSlice";

export function useCart() {
  const { cart, loading, error } = useSelector(
    (state: RootState) => state.cart
  );
  const dispatch = useDispatch<AppDispatch>();
  const loadCart = React.useCallback(() => {
    dispatch(getCartRequest());
  }, [dispatch]);
  const changeQuantity = (cartItemId: string, quantity: number) => {
    if (quantity < 1) return;

    dispatch(updateQuantity({ cartItemId, quantity }));
  };
  const deleteItem = React.useCallback(
    (id: string) => {
      dispatch(deleteQuantity({ id }));
    },
    [dispatch]
  );
  const addToCart = React.useCallback(
    (productId: string, quantity: number) => {
      dispatch(addCart({ productId, quantity }));
    },
    [dispatch]
  );
  React.useEffect(() => {
    dispatch(getCartRequest()); // gọi 1 lần khi Header mount
  }, [dispatch]);
  return {
    cart,
    loading,
    error,
    loadCart,
    changeQuantity,
    deleteItem,
    addToCart
  };
}
