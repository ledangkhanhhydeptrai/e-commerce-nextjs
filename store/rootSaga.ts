// store/rootSaga.ts

import authSaga from "@/features/auth/store/authSaga";
import { productSaga } from "@/features/home/store/homeSaga";
import registerSaga from "@/features/register/store/registerSaga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([authSaga(), registerSaga(), productSaga()]);
}
