"use client";
import { RootState } from "@/store/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerRequest } from "../store/registerSlice";
import RegisterForm from "../components/RegisterForm";
import { RegisterPayload } from "../services/RegisterServices";
import { useRouter } from "next/navigation";

const RegisterContainer: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { loading, error, success } = useSelector(
    (rootState: RootState) => rootState.register
  );
  React.useEffect(() => {
    if (success) {
      router.push("/auth/login"); // chuyển trang khi đăng ký thành công
    }
  }, [success, router]);
  const handleRegister = (payload: RegisterPayload) => {
    dispatch(registerRequest(payload));
  };

  return (
    <RegisterForm onSubmit={handleRegister} loading={loading} error={error} />
  );
};

export default RegisterContainer;
