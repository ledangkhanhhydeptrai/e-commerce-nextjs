import { AxiosError } from "axios";
import {
  registerFailure,
  registerRequest,
  registerSuccess
} from "./registerSlice";
import { call, put, takeLatest } from "redux-saga/effects";
import { RegisterAPI, RegisterResponse } from "../services/RegisterServices";

function* handleRegister(action: ReturnType<typeof registerRequest>): Generator<
  // yield type
  unknown,
  // return type
  void,
  // next value type (kết quả yield call)
  RegisterResponse
> {
  try {
    console.log("🔥 SAGA START", action.payload);

    const response = yield call(RegisterAPI, action.payload);
    console.log("✅ API RESPONSE", response);

    // ❌ API báo lỗi
    if (response.status !== 201) {
      yield put(registerFailure(response.message || "Đăng ký thất bại"));
      return;
    }

    // ✅ API thành công
    yield put(registerSuccess());
  } catch (error) {
    console.log("❌ API ERROR", error);
    yield put(
      registerFailure((error as AxiosError)?.message || "Có lỗi xảy ra")
    );
  } finally {
    console.log("🟡 SAGA FINISH");
  }
}

export default function* registerSaga() {
  yield takeLatest(registerRequest, handleRegister);
}
