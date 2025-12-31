"use client";
import React from "react";

export default function useLoginForm() {
  const [username, setUsername] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [formError, setFormError] = React.useState<string | null>("");
  const validate = () => {
    if (!username.trim()) {
      setFormError("Username không được bỏ trống");
      return false;
    }
    if (password.length < 6) {
      setFormError("Mật khẩu tối thiểu 6 ký tự");
      return false;
    }
    setFormError(null);
    return true;
  };
  return {
    username,
    password,
    formError,
    setUsername,
    setPassword,
    setFormError,
    validate
  };
}
