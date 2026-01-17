import { call, put, takeLatest } from "redux-saga/effects";
import { getAPIProfile, updateUserProfile } from "../services/ProfileAPI";
import {
  getProfileFailure,
  getProfileRequest,
  getProfileSuccess
} from "./profileSlice";
import { AxiosError } from "axios";
import {
  updateProfileFailure,
  updateProfileRequest,
  updateProfileSuccess
} from "./profileUpdateSlice";
import { PayloadAction } from "@reduxjs/toolkit";

function* handleGetProfile(): Generator {
  try {
    const response = yield call(getAPIProfile);
    yield put(getProfileSuccess(response));
  } catch (error) {
    const errors = error as AxiosError;
    yield put(getProfileFailure(errors.message));
  }
}
function* handleUpdateProfile(
  action: PayloadAction<{ username: string; email: string }>
): Generator {
  try {
    const response = yield call(updateUserProfile, action.payload);
    yield put(updateProfileSuccess(response));
  } catch (error) {
    const errors = error as AxiosError;
    yield put(updateProfileFailure(errors.message));
  }
}
export default function* profileSaga() {
  yield takeLatest(getProfileRequest.type, handleGetProfile);
  yield takeLatest(updateProfileRequest.type, handleUpdateProfile);
}
