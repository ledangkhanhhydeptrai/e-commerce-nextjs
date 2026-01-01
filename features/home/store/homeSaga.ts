import { call, put, takeLatest } from "redux-saga/effects";
import type { SagaIterator } from "redux-saga";
import { HomeAPI } from "../services/HomeAPI";
import { ProductProps } from "../homeprops/HomeProps";
import {
  getProductRequest,
  getProductSuccess,
  getProductsFailure
} from "./homeSlice";
import { AxiosError } from "axios";

function* handleGetProduct(): SagaIterator {
  try {
    const products: ProductProps[] = yield call(HomeAPI);
    yield put(getProductSuccess(products));
  } catch (error) {
    const err = error as AxiosError;
    yield put(getProductsFailure(err.message || "Get product failed"));
  }
}

export function* productSaga(): SagaIterator {
  yield takeLatest(getProductRequest.type, handleGetProduct);
}
