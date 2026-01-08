import { call, put, takeLatest } from "redux-saga/effects";
import { getAllUser, UserProps } from "../services/userServices";
import { getUserFailure, getUserRequest, getUserSuccess } from "./userSlice";
import { AxiosError } from "axios";

function* getAllUserAdmin(): Generator {
  try {
    const users: UserProps[] = yield call(getAllUser);
    console.log("API response:", users);
    yield put(getUserSuccess(users));
  } catch (error) {
    const errors = error as AxiosError;
    yield put(getUserFailure(errors.message));
  }
}
export default function* userSaga() {
  yield takeLatest(getUserRequest.type, getAllUserAdmin);
}
