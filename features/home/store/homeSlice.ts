import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductProps } from "../homeprops/HomeProps";

interface ProductState {
  products: ProductProps[];
  loading: boolean;
  error: string | null;
}
const initialState: ProductState = {
  products: [] as ProductProps[],
  loading: false,
  error: null as string | null
};
const homeSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProductRequest(state) {
      state.loading = true;
      state.error = null;
    },
    getProductSuccess(state, action: PayloadAction<ProductProps[]>) {
      state.loading = false;
      state.products = action.payload;
    },
    getProductsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    }
  }
});
export const { getProductRequest, getProductSuccess, getProductsFailure } =
  homeSlice.actions;
console.log("getProductRequest:", getProductRequest);

export default homeSlice.reducer;
