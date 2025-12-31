"use client";
import { RootState } from "@/store/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerRequest } from "../store/registerSlice";
import RegisterForm from "../components/RegisterForm";
import { RegisterPayload } from "../services/RegisterServices";

const RegisterContainer: React.FC = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector(
    (rootState: RootState) => rootState.register
  );
  const handleRegister = (payload: RegisterPayload) => {
    dispatch(registerRequest(payload));
  };

  return (
    <RegisterForm onSubmit={handleRegister} loading={loading} error={error} />
  );
};

export default RegisterContainer;
