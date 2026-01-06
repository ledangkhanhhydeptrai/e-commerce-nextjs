import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PaymentEnum, PaymentProps } from "../paymentProps/Payment";

export interface PaymentState {
  loading: boolean;
  error: string | null;
  data: PaymentProps | null;
  status: PaymentEnum | null;
}

const initialState: PaymentState = {
  loading: false,
  error: null,
  data: null,
  status:null
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
      state.status = action.payload;
      state.loading = false;
      state.error = null;
    },
    resetPaymentState(state) {
      state.status = null;
      state.loading = false;
      state.error = null;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
  },
});

export const {
  createPaymentRequest,
  createPaymentSuccess,
  createPaymentFailure,
  updatePaymentFromServer,
  resetPaymentState,
  setLoading, setError
} = paymentSlice.actions;
// paymentSlice.ts
export const cancelPaymentRequest = createAction<string>("payment/cancelRequest");
export const cancelPaymentSuccess = createAction<void>("payment/cancelSuccess");
export const cancelPaymentFailure = createAction<string>("payment/cancelFailure");

export default paymentSlice.reducer;
