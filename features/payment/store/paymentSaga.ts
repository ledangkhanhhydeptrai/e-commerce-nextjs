import { call, put, takeLatest } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import {
  createPaymentRequest,
  createPaymentSuccess,
  createPaymentFailure,
  setLoading,
  updatePaymentFromServer,
  setError,
} from "./paymentSlice";
import { CancelPaymentPostAPI, PaymentAPI } from "../services/PaymentAPI";
import { PaymentEnum, PaymentProps } from "../paymentProps/Payment";
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
function* handlePaymentFlow(action: { type: string; payload: { orderId: string; status?: string } }): SagaIterator {
  try {
    yield put(setLoading(true));
    const { orderId, status } = action.payload;
    let paymentStatus: PaymentEnum | null = null;

    if (status === "CANCELLED") {
      console.log("Saga: Calling CancelPaymentAPI...");
      yield call(CancelPaymentPostAPI, orderId); // POST JSON
      paymentStatus = "CANCELLED";
    } else {
      const res: PaymentProps | null = yield call(PaymentAPI, orderId);
      if (res?.paymentStatus) paymentStatus = res.paymentStatus;
    }

    if (paymentStatus) {
      yield put(updatePaymentFromServer(paymentStatus));
    }
  } catch (e) {
    const err = e as AxiosError;
    yield put(setError(err.message));
  } finally {
    yield put(setLoading(false));
  }
}

export default function* paymentSaga(): SagaIterator {
  yield takeLatest(createPaymentRequest.type, handleCreatePayment);
  yield takeLatest("payment/PROCESS_PAYMENT", handlePaymentFlow);
}
