import { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";
import { CartAPI } from "../services/CartServices";
import { getCartFailure, getCartRequest, getCartSuccess } from "./cartSlice";
import { AxiosError } from "axios";
import { CartProps } from "../cart/CartProps";

function* handleGetCart(): SagaIterator {
  try {
    const response: CartProps | null = yield call(CartAPI);
    if (response) {
      yield put(getCartSuccess(response));
    } else {
      yield put(getCartFailure("Cart is empty"));
    }
  } catch (error) {
    const err = error as AxiosError;
    yield put(getCartFailure(err.message || "Get Cart failed"));
  }
}
export function* CartSaga(): SagaIterator {
  yield takeLatest(getCartRequest.type, handleGetCart);
}
