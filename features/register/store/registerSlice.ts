import { ApiResponse } from "@/features/auth/store/authSaga";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  loading: boolean;
  response: ApiResponse<null> | null;
  error: string | null;
  success: boolean; // <-- thêm đây
}
const initialState: AuthState = {
  loading: false,
  response: null,
  error: null,
  success: false
};
const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    registerRequest(state, _action: PayloadAction<FormData>) {
      state.loading = true;
      state.error = null;
      state.success = false;
    },

    registerSuccess(state, action) {
      state.loading = false;
      state.response = action.payload;
      state.success = true;
    },

    registerFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
      state.success = false;
    }
  }
});
export const { registerRequest, registerSuccess, registerFailure } =
  registerSlice.actions;

export default registerSlice.reducer;
