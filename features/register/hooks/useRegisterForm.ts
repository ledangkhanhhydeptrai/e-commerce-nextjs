"use client";
import { useState } from "react";

export default function useRegisterForm() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState<string | null>(null);

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
    validate
  };
}
