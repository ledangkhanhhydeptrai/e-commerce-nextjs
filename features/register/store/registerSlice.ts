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

    registerSuccess(state) {
      state.loading = false;
      state.success = true;
    },

    registerFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
      state.success = false;
    },
    resetRegisterState(state) {
      state.loading = false;
      state.error = null;
      state.success = false;
    }
  }
});
export const {
  registerRequest,
  registerSuccess,
  registerFailure,
  resetRegisterState
} = registerSlice.actions;

export default registerSlice.reducer;
