import { call, put, takeLatest } from "redux-saga/effects";
import {
  createProductForm,
  getAllProduct,
  getProductById,
  ProductFormData,
  ProductProps
} from "../services/ProductServices";
import {
  createProductFailureAdmin,
  createProductRequestAdmin,
  createProductSuccessAdmin,
  getProductFailureAdmin,
  getProductRequestAdmin,
  getProductSuccessAdmin
} from "./productSliceAdmin";
import { AxiosError } from "axios";
import { PayloadAction } from "@reduxjs/toolkit";
import {
  getProductFailureAdminById,
  getProductRequestAdminById,
  getProductSuccessAdminById
} from "./productSliceAdminById";

function* handleGetAllProduct(): Generator {
  try {
    const response: ProductProps[] = yield call(getAllProduct);
    yield put(getProductSuccessAdmin(response));
  } catch (error) {
    const errors = error as AxiosError;
    yield put(getProductFailureAdmin(errors.message));
  }
}
function* handleCreateProduct(
  action: PayloadAction<ProductFormData>
): Generator {
  try {
    const { name, price, quantity, file } = action.payload;
    const response: ProductProps = yield call(createProductForm, {
      name,
      price,
      quantity,
      file
    });
    yield put(createProductSuccessAdmin(response));
  } catch (error) {
    const errors = error as AxiosError;
    yield put(createProductFailureAdmin(errors.message));
  }
}
function* handleGetProductById(
  action: PayloadAction<ProductProps | null>
): Generator {
  try {
    if (!action.payload) return;
    const { id } = action.payload;
    const response: ProductProps = yield call(getProductById, id);
    yield put(getProductSuccessAdminById(response));
  } catch (error) {
    const errors = error as AxiosError;
    yield put(getProductFailureAdminById(errors.message));
  }
}
export default function* productSagaAdmin() {
  yield takeLatest(getProductRequestAdmin.type, handleGetAllProduct);
  yield takeLatest(createProductRequestAdmin.type, handleCreateProduct);
  yield takeLatest(getProductRequestAdminById.type,handleGetProductById);
}
