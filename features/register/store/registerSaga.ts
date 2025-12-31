import { ApiErrorResponse, ApiResponse } from "@/features/auth/store/authSaga";
import { AxiosError, AxiosResponse } from "axios";
import { registerFailure, registerRequest, registerSuccess } from "./registerSlice";
import { call, put, takeLatest } from "redux-saga/effects";
import { RegisterAPI } from "../services/RegisterServices";

function* handleRegister(
  action: ReturnType<typeof registerRequest>
): Generator<unknown, void, AxiosResponse<ApiResponse<null>>> {
  try {
    const { email, username, password } = action.payload;
    const response = yield call(RegisterAPI, { email, username, password });
    yield put(registerSuccess(response.data));
  } catch (error) {
    let message = "Login failed";

    if (error && (error as AxiosError).isAxiosError) {
      const err = error as AxiosError<ApiErrorResponse>;

      if (
        err.response &&
        err.response.data &&
        typeof err.response.data.message === "string"
      ) {
        message = err.response.data.message;
      }
    }

    yield put(registerFailure(message));
  }
}
export default function* registerSaga() {
  yield takeLatest(registerRequest.type, handleRegister);
}
