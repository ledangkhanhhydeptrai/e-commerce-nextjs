// features/auth/store/authSaga.ts
import { call, put, takeLatest } from "redux-saga/effects";
import { loginRequest, loginSuccess, loginFailure, User } from "./authSlice";
import { AxiosError, AxiosResponse } from "axios";
import { loginAPI } from "../services/authService";
import { getUsernameFromToken } from "../utils/JWTPayload";
import { decodeJwt } from "../types/jwt";

export interface ApiResponse<T> {
  status: number;
  message: string;
  data: T;
}

export interface ApiErrorResponse {
  status: number;
  message: string;
  data: null;
}

function* handleLogin(
  action: ReturnType<typeof loginRequest>
): Generator<unknown, void, AxiosResponse<ApiResponse<User>>> {
  try {
    const { username, password } = action.payload;

    const response = yield call(loginAPI, {
      username,
      password
    });
    const { token, role } = response.data.data;
    localStorage.setItem("jwt", token);
    const decodedUsername = getUsernameFromToken(token);
    localStorage.setItem("username", decodedUsername ?? "");
    const payload = decodeJwt(token);
    if (!payload) {
      throw new Error("Invalid token");
    }
    // response.data là ApiResponse<User>
    yield put(loginSuccess({ ...response.data.data, role }));
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

    yield put(loginFailure(message));
  }
}

export default function* authSaga() {
  yield takeLatest(loginRequest.type, handleLogin);
}
