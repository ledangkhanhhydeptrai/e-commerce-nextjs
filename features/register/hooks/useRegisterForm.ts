"use client";
import React from "react";

export default function useRegisterForm() {
  const [email, setEmail] = React.useState<string>("");
  const [username, setUsername] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [formError, setFormError] = React.useState<string | null>(null);
  const [fileUrl, setFileUrl] = React.useState<File | null>(null);
  const validate = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setFormError("Email không đúng định dạng");
      return false;
    }

    if (!username.trim()) {
      setFormError("Username không được bỏ trống");
      return false;
    }

    if (password.length < 6) {
      setFormError("Mật khẩu tối thiểu 6 ký tự");
      return false;
    }
    if (fileUrl === null) {
      setFormError("Phải upload file");
      return false;
    }
    setFormError(null);
    return true;
  };

  return {
    email,
    username,
    password,
    formError,
    setEmail,
    setUsername,
    setPassword,
    fileUrl,
    setFileUrl,
    validate
  };
}
