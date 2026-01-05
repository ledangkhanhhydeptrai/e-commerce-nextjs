import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PaymentEnum, PaymentProps } from "../paymentProps/Payment";

export interface PaymentState {
  loading: boolean;
  error: string | null;
  data: PaymentProps | null;
}

const initialState: PaymentState = {
  loading: false,
  error: null,
  data: null,
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    createPaymentRequest(state, _action: PayloadAction<string>) {
      state.loading = true;
      state.error = null;
    },
    createPaymentSuccess(state, action: PayloadAction<PaymentProps | null>) {
      state.loading = false;
      state.data = action.payload
        ? { ...action.payload, paymentStatus: "PENDING" }
        : null;
    },
    createPaymentFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    updatePaymentFromServer(state, action: PayloadAction<PaymentEnum>) {
      if (state.data) {
        state.data.paymentStatus = action.payload;
      }
    },
    resetPaymentState(state) {
      state.loading = false;
      state.error = null;
      state.data = null;
    },
  },
});

export const {
  createPaymentRequest,
  createPaymentSuccess,
  createPaymentFailure,
  updatePaymentFromServer,
  resetPaymentState,
} = paymentSlice.actions;

export default paymentSlice.reducer;
