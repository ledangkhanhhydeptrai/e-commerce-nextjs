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
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-[3fr_2fr]">
      <div className="flex items-center">
        <div className="w-full max-w-xl px-6 sm:px-10 lg:px-16">
          <p className="text-blue-600 font-semibold mb-10">Phone Sale</p>
          <h1 className="text-3xl lg:text-4xl font-bold leading-tight text-gray-900 ">
            Artificial Intelligence Phone <br />
            Phone has been brought for customer to use the best comfortable
          </h1>
          <p className="text-gray-500 mt-4">
            Welcome back! Please login to your account
          </p>
          {error &&
            <div className="mt-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </div>}
          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label htmlFor="" className="text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                className={`mt-1 w-full rounded-lg border px-4 py-3 focus:outline-none ${error
                  ? "border-red-400 focus:ring-red-400"
                  : "focus:ring-blue-500"}`}
                placeholder="Nhập username"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="" className="text-sm font-medium text-gray-700">
                Mật khẩu
              </label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className={`mt-1 w-full rounded-lg border px-4 py-3 focus:outline-none ${error
                  ? "border-red-400 focus:ring-red-400"
                  : "focus:ring-blue-500"}`}
                placeholder="Nhập mật khẩu"
              />
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-600">
                <input
                  type="checkbox"
                  className="rounded"
                  placeholder="Đánh dấu tick"
                />
                Remember me
              </label>
              <a href="" className="text-blue-600 hover:underline">
                Forgot Password
              </a>
            </div>
            <div className="flex gap-4 pt-2">
              <Button
                type="submit"
                loading={loading}
                variant="secondary"
                fullWidth
                className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Login
              </Button>
              <Button
                type="button"
                loading={loading}
                variant="secondary"
                fullWidth
                className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Sign Up
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* <div className="hidden lg:flex items-center justify-center">
        <Image
          src="/illustration.svg"
          alt="Illustration"
          width={420}
          height={420}
          priority
        />
      </div> */}
    </div>
  );
}
