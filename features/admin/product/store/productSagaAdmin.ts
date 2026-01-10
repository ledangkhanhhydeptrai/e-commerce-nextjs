import { call, put, takeLatest } from "redux-saga/effects";
import {
  createProductForm,
  deleteProduct,
  getAllProduct,
  getProductById,
  ProductFormData,
  ProductProps,
  updateProductForm
} from "../services/ProductServices";
import {
  createProductFailureAdmin,
  createProductRequestAdmin,
  createProductSuccessAdmin,
  deleteProductFailureAdmin,
  deleteProductRequestAdmin,
  deleteProductSuccessAdmin,
  getProductFailureAdmin,
  getProductRequestAdmin,
  getProductSuccessAdmin,
  updateProductFailureAdmin,
  updateProductRequestAdmin,
  updateProductSuccessAdmin
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
function* handleGetProductById(action: PayloadAction<string>): Generator {
  try {
    if (!action.payload) return;
    const id = action.payload;
    const response: ProductProps = yield call(getProductById, id);
    yield put(getProductSuccessAdminById(response));
  } catch (error) {
    const errors = error as AxiosError;
    yield put(getProductFailureAdminById(errors.message));
  }
}
function* updateProductById(
  action: PayloadAction<ProductFormData & { id: string }>
): Generator {
  try {
    if (!action.payload) return;
    const { id, name, price, quantity, file } = action.payload;
    const response: ProductProps = yield call(updateProductForm, id, {
      name,
      price,
      quantity,
      file
    });
    yield put(updateProductSuccessAdmin(response));
  } catch (error) {
    const errors = error as AxiosError;
    yield put(updateProductFailureAdmin(errors.message));
  }
}
function* handleDeleteProduct(
  action: PayloadAction<string>
): Generator {
  try {
    const response = yield call(deleteProduct, action.payload);
    yield put(deleteProductSuccessAdmin(response));
  } catch (error) {
    const errors = error as AxiosError;
    yield put(deleteProductFailureAdmin(errors.message));
  }
}
export default function* productSagaAdmin() {
  yield takeLatest(getProductRequestAdmin.type, handleGetAllProduct);
  yield takeLatest(createProductRequestAdmin.type, handleCreateProduct);
  yield takeLatest(getProductRequestAdminById.type, handleGetProductById);
  yield takeLatest(updateProductRequestAdmin.type, updateProductById);
  yield takeLatest(deleteProductRequestAdmin.type, handleDeleteProduct);
}
