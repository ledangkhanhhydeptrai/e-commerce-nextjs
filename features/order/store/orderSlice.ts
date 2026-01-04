import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OrderProps } from "../orderProps/OrderProps";

export interface OrderState {
  order: OrderProps | null;
  loading: boolean;
  error: string | null;
  redirectId: string | null; // dùng để FE redirect
}
const initialState: OrderState = {
  order: null,
  loading: false,
  error: null,
  redirectId: null
};
const OrderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    getOrderRequest(state) {
      state.loading = true;
      state.error = null;
    },
    getOrderSuccess(state, action: PayloadAction<OrderProps | null>) {
      state.order = action.payload;
      state.loading = false;
    },
    getOrderFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    addOrderFromCart(state) {
      state.loading = true;
      state.error = null;
    },
    redirectToOrder: (state, action: PayloadAction<string>) => {
      state.redirectId = action.payload;
    }
  }
});
export const {
  getOrderRequest,
  getOrderSuccess,
  getOrderFailure,
  addOrderFromCart
} = OrderSlice.actions;
export default OrderSlice.reducer;
