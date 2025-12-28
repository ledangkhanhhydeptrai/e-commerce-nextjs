// features/auth/login/LoginContainer.tsx
"use client";

import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "../store/authSlice";

import LoginForm from "../components/LoginForm";
import { useAuthRedirect } from "../hooks/useAuthRedirect";
import { RootState } from "@/store/store";

export default function LoginContainer() {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state: RootState) => state.auth);

  useAuthRedirect(user !== null);

  const handleLogin = (username: string, password: string) => {
    dispatch(loginRequest({ username, password }));
  };

  return <LoginForm onSubmit={handleLogin} loading={loading} error={error} />;
}
