import { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  CartAPI,
  deleteCartItemAPI,
  updateCartItemAPI
} from "../services/CartServices";
import {
  deleteQuantity,
  getCartFailure,
  getCartRequest,
  getCartSuccess,
  updateQuantity
} from "./cartSlice";
import { AxiosError } from "axios";
import { CartProps } from "../cart/CartProps";

function* handleGetCart(): SagaIterator {
  try {
    const response: CartProps | null = yield call(CartAPI);
    if (response) {
      yield put(getCartSuccess(response));
    } else {
      yield put(getCartSuccess(null));
    }
  } catch (error) {
    const err = error as AxiosError;
    yield put(getCartFailure(err.message || "Get Cart failed"));
  }
}
function* handleUpdateQuantity(action: ReturnType<typeof updateQuantity>) {
  try {
    const { cartItemId, quantity } = action.payload;

    const cart: CartProps | null = yield call(
      updateCartItemAPI,
      cartItemId,
      quantity
    );

    if (cart) {
      yield put(getCartSuccess(cart));
    }
  } catch (error) {
    const errors = error as AxiosError;
    console.error("Error:", errors);
    yield put(getCartFailure(errors.message || "Cập nhật số lượng thất bại"));
  }
}
function* handleDeleteCart(
  action: ReturnType<typeof deleteQuantity>
): SagaIterator {
  try {
    const { id } = action.payload;

    yield call(deleteCartItemAPI, id);

    yield put(getCartRequest());
  } catch (error) {
    const err = error as AxiosError;
    yield put(getCartFailure(err.message || "Xóa giỏ hàng thất bại"));
  }
}

export function* CartSaga(): SagaIterator {
  yield takeLatest(getCartRequest.type, handleGetCart);
  yield takeLatest(updateQuantity.type, handleUpdateQuantity);
  yield takeLatest(deleteQuantity.type, handleDeleteCart);
}
