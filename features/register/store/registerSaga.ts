import { AxiosError } from "axios";
import {
  registerFailure,
  registerRequest,
  registerSuccess
} from "./registerSlice";
import { call, put, takeLatest } from "redux-saga/effects";
import { RegisterAPI } from "../services/RegisterServices";

function* handleRegister(action: ReturnType<typeof registerRequest>): Generator<
  // Yielded values
  unknown,
  // Return type
  void
  // Next value (kết quả của yield call)
> {
  try {
    const response = yield call(RegisterAPI, action.payload);

    yield put(registerSuccess(response));
  } catch (error) {
    yield put(registerFailure((error as AxiosError).message));
  }
}

export default function* registerSaga() {
  yield takeLatest(registerRequest.type, handleRegister);
}
