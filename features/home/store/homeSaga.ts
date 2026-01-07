import { call, put, takeLatest } from "redux-saga/effects";
import type { SagaIterator } from "redux-saga";
import { HomeAPI, HomeGetById } from "../services/HomeAPI";
import { ProductProps } from "../homeprops/HomeProps";
import {
  getProductRequest,
  getProductSuccess,
  getProductsFailure
} from "./homeSlice";
import { AxiosError } from "axios";
import {
  getProductDetailFailure,
  getProductDetailRequest,
  getProductDetailSuccess
} from "./productDetailSlice";

function* handleGetProduct(): SagaIterator {
  try {
    const products: ProductProps[] = yield call(HomeAPI);
    yield put(getProductSuccess(products));
  } catch (error) {
    const err = error as AxiosError;
    yield put(getProductsFailure(err.message || "Get product failed"));
  }
}
function* handleGetProductById(
  action: ReturnType<typeof getProductDetailRequest>
): SagaIterator {
  try {
    const product: ProductProps | null = yield call(() =>
      HomeGetById(action.payload)
    );
    yield put(getProductDetailSuccess(product));
  } catch (error) {
    const errors = error as AxiosError;
    yield put(getProductDetailFailure(errors.message));
  }
}
export function* productSaga(): SagaIterator {
  yield takeLatest(getProductRequest.type, handleGetProduct);
  yield takeLatest(getProductDetailRequest.type, handleGetProductById);
}
