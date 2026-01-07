// features/auth/store/authSlice.ts
import { ROLE_ADMIN, ROLE_CUSTOMER } from "@/constants";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  token: string;
  role: typeof ROLE_ADMIN | typeof ROLE_CUSTOMER;
}

interface LoginPayload {
  username: string;
  password: string;
}

interface AuthState {
  loading: boolean;
  user: User | null;
  error: string | null;
  isAuthenticated: boolean; // ✅ THÊM
}

const initialState: AuthState = {
  loading: false,
  user: null,
  error: null,
  isAuthenticated: false
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginRequest(state, action: PayloadAction<LoginPayload>) {
      state.loading = true;
      state.error = null;
      console.log("Login:", action.payload);
    },
    loginSuccess(state, action: PayloadAction<User>) {
      state.loading = false;
      state.user = action.payload;
      state.isAuthenticated = true; // ✅ SET
    },
    loginFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    logout(state) {
      state.user = null;
      state.loading = false;
      state.error = null;
    }
  }
});

export const { loginRequest, loginSuccess, loginFailure, logout } =
  authSlice.actions;
export default authSlice.reducer;
