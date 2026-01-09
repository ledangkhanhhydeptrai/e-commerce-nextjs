import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductProps } from "../services/ProductServices";

interface ProductState {
  products: ProductProps | null;
  loading: boolean;
  error: string | null;
}
const initialState: ProductState = {
  products: null,
  loading: false,
  error: null
};
const productSliceAdminById = createSlice({
  name: "productAdmin",
  initialState,
  reducers: {
    getProductRequestAdminById(state, _action: PayloadAction<string>) {
      state.loading = true;
    },
    getProductSuccessAdminById(
      state,
      action: PayloadAction<ProductProps | null>
    ) {
      state.loading = false;
      state.products = action.payload;
    },
    getProductFailureAdminById(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    }
  }
});
export const {
  getProductRequestAdminById,
  getProductSuccessAdminById,
  getProductFailureAdminById
} = productSliceAdminById.actions;
export default productSliceAdminById.reducer;
