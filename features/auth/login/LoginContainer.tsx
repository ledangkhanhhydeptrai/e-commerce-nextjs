"use client";

import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "../store/authSlice";
import LoginForm from "../components/LoginForm";
import { useAuthRedirect } from "../hooks/useAuthRedirect";
import { RootState } from "@/store/store";

export default function LoginContainer() {
  const dispatch = useDispatch();
  const { user, loading, error, isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );

  // ✅ SAFE: chỉ lấy role khi user tồn tại
  const role = user ? user.role : undefined;

  useAuthRedirect({
    isLoggedIn: isAuthenticated,
    redirectIfNotLoggedIn: "/auth/login",
    role
  });

  const handleLogin = (username: string, password: string) => {
    dispatch(loginRequest({ username, password }));
  };

  return <LoginForm onSubmit={handleLogin} loading={loading} error={error} />;
}
