// store/rootSaga.ts

import authSaga from "@/features/auth/store/authSaga";
import { CartSaga } from "@/features/cart/store/cartSaga";
import { productSaga } from "@/features/home/store/homeSaga";
import OrderSaga from "@/features/order/store/orderSaga";
import registerSaga from "@/features/register/store/registerSaga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([
    authSaga(),
    registerSaga(),
    productSaga(),
    CartSaga(),
    OrderSaga()
  ]);
}
