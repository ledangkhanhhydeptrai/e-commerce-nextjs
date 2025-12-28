// features/auth/login/components/LoginForm.tsx
"use client";

import React, { useState } from "react";
import Button from "@/components/ui/Button/Button";

interface Props {
  onSubmit: (username: string, password: string) => void;
  loading: boolean;
  error: string | null;
}

export default function LoginForm({ onSubmit, loading, error }: Props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!username || !password) return;
    onSubmit(username, password);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md p-6 bg-white rounded shadow"
    >
      <h1 className="text-2xl font-semibold mb-4 text-center">Login</h1>
      {error && <p className="text-red-500 mb-3">{error}</p>}
      <input
        type="text"
        className="w-full border p-2 mb-3 rounded-2xl"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        className="w-full border p-2 mb-3 rounded-2xl"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit" fullWidth loading={loading} variant="primary">
        Login
      </Button>
    </form>
  );
}
