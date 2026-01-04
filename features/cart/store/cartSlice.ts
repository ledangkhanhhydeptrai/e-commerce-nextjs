import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartProps } from "../cart/CartProps";

export interface CartState {
  cart: CartProps | null;
  loading: boolean;
  error: string | null;
}
export interface DeleteCartPayload {
  id: string;
}
interface UpdateQuantityPayload {
  cartItemId: string;
  quantity: number; // quantity mới
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
    getCartSuccess(state, action: PayloadAction<CartProps | null>) {
      state.loading = false;
      state.cart = action.payload;
    },
    getCartFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    updateQuantity(state, action: PayloadAction<UpdateQuantityPayload>) {
      if (!state.cart) return;
      const { cartItemId, quantity } = action.payload;

      state.loading = true;
      state.error = null;
      const item = state.cart.items.find((i) => i.cartItemId === cartItemId);

      if (item) {
        item.quantity = quantity;
      }
    },
    deleteQuantity(state, _action: PayloadAction<DeleteCartPayload>) {
      state.loading = true;
      state.error = null;
    }
  }
});
export const {
  getCartRequest,
  getCartSuccess,
  getCartFailure,
  updateQuantity,
  deleteQuantity
} = CartSlice.actions;
export default CartSlice.reducer;
