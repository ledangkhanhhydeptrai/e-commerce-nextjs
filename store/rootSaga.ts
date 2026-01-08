// store/rootSaga.ts

import userSaga from "@/features/admin/user/store/userSaga";
import authSaga from "@/features/auth/store/authSaga";
import { CartSaga } from "@/features/cart/store/cartSaga";
import { productSaga } from "@/features/home/store/homeSaga";
import OrderSaga from "@/features/order/store/orderSaga";
import paymentSaga from "@/features/payment/store/paymentSaga";
import registerSaga from "@/features/register/store/registerSaga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([
    authSaga(),
    registerSaga(),
    productSaga(),
    CartSaga(),
    OrderSaga(),
    paymentSaga(),
    userSaga()
  ]);
}
