import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductFormData, ProductProps } from "../services/ProductServices";

interface ProductState {
  product: ProductProps[];
  loading: boolean;
  error: string | null;
}
const initialState: ProductState = {
  product: [] as ProductProps[],
  loading: false,
  error: null
};
const productSlice = createSlice({
  name: "productAdmin",
  initialState,
  reducers: {
    getProductRequestAdmin(state) {
      state.loading = true;
      state.error = null;
    },
    getProductSuccessAdmin(state, action: PayloadAction<ProductProps[]>) {
      state.loading = false;
      state.product = action.payload;
    },
    getProductFailureAdmin(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    createProductRequestAdmin(state, _action: PayloadAction<ProductFormData>) {
      state.loading = true;
      state.error = null;
    },
    createProductSuccessAdmin(state, action: PayloadAction<ProductProps>) {
      state.loading = false;
      state.product.push(action.payload);
    },
    createProductFailureAdmin(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  }
});
export const {
  getProductRequestAdmin,
  getProductSuccessAdmin,
  getProductFailureAdmin,
  createProductRequestAdmin,
  createProductSuccessAdmin,
  createProductFailureAdmin
} = productSlice.actions;
export default productSlice.reducer;
