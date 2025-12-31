import { ApiResponse } from "@/features/auth/store/authSaga";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RegisterPayload {
  email: string;
  username: string;
  password: string;
}
interface AuthState {
  loading: boolean;
  response: ApiResponse<null> | null;
  error: string | null;
}
const initialState: AuthState = {
  loading: false,
  response: null,
  error: null
};
const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    registerRequest(state, action: PayloadAction<RegisterPayload>) {
      state.loading = true;
      state.error = null;
    },
    registerSuccess(state, action: PayloadAction<ApiResponse<null>>) {
      state.loading = false;
      state.response = action.payload;
    },
    registerFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    }
  }
});
export const { registerRequest, registerSuccess, registerFailure } =
  registerSlice.actions;

export default registerSlice.reducer;
