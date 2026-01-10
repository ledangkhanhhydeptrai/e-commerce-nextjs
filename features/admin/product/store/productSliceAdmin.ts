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
    updateProductRequestAdmin(state, _action: PayloadAction<ProductFormData>) {
      state.loading = true;
      state.error = null;
    },
    updateProductSuccessAdmin(state, action: PayloadAction<ProductProps>) {
      const updated = action.payload;
      const index = state.product.findIndex((p) => p.id === updated.id);

      if (index !== -1) {
        state.product[index] = updated; // ✅ replace
      }
    },
    updateProductFailureAdmin(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    deleteProductRequestAdmin(state, _action: PayloadAction<string>) {
      state.loading = true;
      state.error = null;
    },
    deleteProductSuccessAdmin(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = null;
      state.product = state.product.filter((p) => p.id !== action.payload);
    },
    deleteProductFailureAdmin(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    }
  }
});
export const {
  getProductRequestAdmin,
  getProductSuccessAdmin,
  getProductFailureAdmin,
  createProductRequestAdmin,
  createProductSuccessAdmin,
  createProductFailureAdmin,
  updateProductRequestAdmin,
  updateProductSuccessAdmin,
  updateProductFailureAdmin,
  deleteProductRequestAdmin,
  deleteProductSuccessAdmin,
  deleteProductFailureAdmin
} = productSlice.actions;
export default productSlice.reducer;
