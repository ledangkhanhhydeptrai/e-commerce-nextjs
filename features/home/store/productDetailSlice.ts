import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductProps } from "../homeprops/HomeProps";

interface ProductDetailState {
  product: ProductProps | null;
  loading: boolean;
  error: string | null;
}

const initialState: ProductDetailState = {
  product: null,
  loading: false,
  error: null
};

const productDetailSlice = createSlice({
  name: "productDetail",
  initialState,
  reducers: {
    getProductDetailRequest(state, _action: PayloadAction<string>) {
      state.loading = true;
      state.error = null;
    },
    getProductDetailSuccess(state, action: PayloadAction<ProductProps | null>) {
      state.loading = false;
      state.product = action.payload;
    },
    getProductDetailFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    clearProductDetail(state) {
      state.product = null;
    }
  }
});

export const {
  getProductDetailRequest,
  getProductDetailSuccess,
  getProductDetailFailure,
  clearProductDetail
} = productDetailSlice.actions;

export default productDetailSlice.reducer;
