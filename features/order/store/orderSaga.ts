import { call, put, takeLatest } from "redux-saga/effects";
import { addOrder, OrderAPI } from "../services/OrderAPI";
import {
  addOrderFromCart,
  getOrderFailure,
  getOrderRequest,
  getOrderSuccess
} from "./orderSlice";
import { AxiosError } from "axios";
function* handleGetOrder(): Generator {
  try {
    const response = yield call(OrderAPI);
    yield put(getOrderSuccess(response));
  } catch (error) {
    const errors = error as AxiosError;
    yield put(getOrderFailure(errors.message));
  }
}
function* handleAddOrder(): Generator {
  try {
    const response = yield call(addOrder);
    yield put(getOrderSuccess(response.data));
  } catch (error) {
    const errors = error as AxiosError;
    yield put(getOrderFailure(errors.message));
  }
}
export default function* OrderSaga() {
  yield takeLatest(getOrderRequest.type, handleGetOrder);
  yield takeLatest(addOrderFromCart.type, handleAddOrder);
}
