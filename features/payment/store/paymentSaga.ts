import { call, put, takeLatest } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import {
  createPaymentRequest,
  createPaymentSuccess,
  createPaymentFailure,
} from "./paymentSlice";
import { PaymentAPI } from "../services/PaymentAPI";
import { PaymentProps } from "../paymentProps/Payment";
import { AxiosError } from "axios";

function* handleCreatePayment(action: ReturnType<typeof createPaymentRequest>): SagaIterator {
  try {
    const data: PaymentProps | null = yield call(() => PaymentAPI(action.payload));
    yield put(createPaymentSuccess(data));
  } catch (error) {
    const errors = error as AxiosError;
    yield put(createPaymentFailure(errors.message));
  }
}

export default function* paymentSaga(): SagaIterator {
  yield takeLatest(createPaymentRequest.type, handleCreatePayment);
}
