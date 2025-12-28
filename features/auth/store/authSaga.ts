// features/auth/store/authSaga.ts
import { call, put, takeLatest } from "redux-saga/effects";
import { loginRequest, loginSuccess, loginFailure } from "./authSlice";
import { AxiosError } from "axios";
import { loginAPI } from "../services/authService";


function* handleLogin(action: ReturnType<typeof loginRequest>):Generator {
  try {
    const { username, password } = action.payload;
    const response = yield call(loginAPI, { username, password });
    yield put(loginSuccess(response.data));
  } catch (error) {
    const errors = error as AxiosError;
    yield put(loginFailure(errors.message || "Login failed"));
  }
}

export default function* authSaga() {
  yield takeLatest(loginRequest.type, handleLogin);
}
