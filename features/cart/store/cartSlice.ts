import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartProps } from "../cart/CartProps";

export interface CartState {
  cart: CartProps | null;
  loading: boolean;
  error: string | null;
}
const initialState: CartState = {
  cart: null,
  loading: false,
  error: null
};
const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getCartRequest(state) {
      state.loading = true;
      state.error = null;
    },
    getCartSuccess(state, action: PayloadAction<CartProps>) {
      state.loading = false;
      state.cart = action.payload;
    },
    getCartFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    }
  }
});
export const { getCartRequest, getCartSuccess, getCartFailure } =
  CartSlice.actions;
export default CartSlice.reducer;
