import { call, put, takeLatest } from "redux-saga/effects";
import { getAPIProfile } from "../services/ProfileAPI";
import {
  getProfileFailure,
  getProfileRequest,
  getProfileSuccess
} from "./profileSlice";
import { AxiosError } from "axios";

function* handleGetProfile(): Generator {
  try {
    const response = yield call(getAPIProfile);
    yield put(getProfileSuccess(response));
  } catch (error) {
    const errors = error as AxiosError;
    yield put(getProfileFailure(errors.message));
  }
}
export default function* profileSaga() {
  yield takeLatest(getProfileRequest.type, handleGetProfile);
}
