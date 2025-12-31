"use client";
import React, { useState } from "react";
import {
  User,
  Lock,
  Mail,
  Eye,
  EyeOff,
  Smartphone,
  Shield,
  Zap
} from "lucide-react";
import Button from "@/components/ui/Button/Button";
import { useRouter } from "next/navigation";

// Props interface
interface RegisterPayload {
  email: string;
  username: string;
  password: string;
}

interface RegisterProps {
  onSubmit: (payload: RegisterPayload) => void;
  loading: boolean;
  error: string | null;
}

// Button component

export default function RegisterForm({
  onSubmit,
  loading,
  error
}: RegisterProps) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const handleSubmit = () => {
    if (email && username && password) {
      onSubmit({ email, username, password });
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && email && username && password) {
      handleSubmit();
    }
  };

  const isFormValid = email && username && password;

  return (
    <div className="fixed inset-0 bg-linear-to-br from-purple-600 via-pink-500 to-red-500 flex items-center justify-center p-6 overflow-auto">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-125 h-125 bg-white opacity-10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-white opacity-5 rounded-full blur-3xl" />
      </div>

      <div className="mt-50 w-full max-w-7xl relative z-10">
        {/* Card with 2 columns */}
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">
          {/* Left Column - Branding & Info */}
          <div className="bg-linear-to-br from-purple-600 to-pink-600 p-12 text-white flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
                <Smartphone className="w-10 h-10" />
              </div>
              <h1 className="text-5xl font-bold mb-4">Phone Sale</h1>
              <p className="text-xl text-white/90 mb-12">
                Artificial Intelligence Phone - Trải nghiệm tuyệt vời nhất dành
                cho bạn
              </p>

              {/* Features */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">
                      Bảo mật tối đa
                    </h3>
                    <p className="text-white/80">
                      Dữ liệu của bạn được mã hóa và bảo vệ tuyệt đối
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">
                      Nhanh chóng & Dễ dàng
                    </h3>
                    <p className="text-white/80">
                      Trải nghiệm mượt mà với công nghệ AI tiên tiến
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Hỗ trợ 24/7</h3>
                    <p className="text-white/80">
                      Đội ngũ hỗ trợ luôn sẵn sàng giúp đỡ bạn
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <p className="text-white/80 text-sm">
                Sản phẩm tuyệt vời! Tôi rất hài lòng với trải nghiệm mua sắm tại
                đây.
              </p>
              <p className="text-white font-semibold mt-2">
                - Khách hàng hài lòng
              </p>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="p-12">
            {/* Header */}
            <div className="mb-8">
              <h2 className="text-4xl font-bold bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                Tạo tài khoản
              </h2>
              <p className="text-gray-600 text-lg">
                Đăng ký để bắt đầu hành trình của bạn
              </p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-lg flex items-start gap-3 animate-shake">
                <svg
                  className="w-5 h-5 text-red-500 shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-red-700 text-sm font-medium">
                  {error}
                </span>
              </div>
            )}

            {/* Form */}
            <div className="space-y-5" onKeyPress={handleKeyPress}>
              {/* Email Input */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 block">
                  Email <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`text-black w-full pl-12 pr-4 py-4 text-base rounded-xl border-2 transition-all duration-200 focus:outline-none ${
                      error
                        ? "border-red-300 focus:border-red-500 bg-red-50/50"
                        : "border-gray-200 focus:border-purple-500 bg-gray-50/50"
                    } hover:border-gray-300 focus:bg-white`}
                    placeholder="example@email.com"
                    disabled={loading}
                  />
                </div>
              </div>

              {/* Username Input */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 block">
                  Tên người dùng <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className={`text-black w-full pl-12 pr-4 py-4 text-base rounded-xl border-2 transition-all duration-200 focus:outline-none ${
                      error
                        ? "border-red-300 focus:border-red-500 bg-red-50/50"
                        : "border-gray-200 focus:border-purple-500 bg-gray-50/50"
                    } hover:border-gray-300 focus:bg-white`}
                    placeholder="Nhập tên người dùng"
                    disabled={loading}
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 block">
                  Mật khẩu <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`text-black w-full pl-12 pr-12 py-4 text-base rounded-xl border-2 transition-all duration-200 focus:outline-none ${
                      error
                        ? "border-red-300 focus:border-red-500 bg-red-50/50"
                        : "border-gray-200 focus:border-purple-500 bg-gray-50/50"
                    } hover:border-gray-300 focus:bg-white`}
                    placeholder="••••••••"
                    disabled={loading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                    disabled={loading}
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Tối thiểu 8 ký tự, bao gồm chữ hoa và số
                </p>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  variant="primary"
                  fullWidth
                  onClick={handleSubmit}
                  loading={loading}
                  disabled={!isFormValid}
                  className="w-full bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 text-base rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 disabled:transform-none disabled:hover:shadow-lg"
                >
                  Đăng ký ngay
                </Button>
              </div>
            </div>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">
                  hoặc đăng ký với
                </span>
              </div>
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-3 px-4 py-3.5 border-2 border-gray-300 rounded-xl hover:bg-gray-50 transition-all hover:shadow-md active:scale-95 hover:border-gray-400">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span className="text-sm font-semibold text-gray-700">
                  Google
                </span>
              </button>
              <button className="flex items-center justify-center gap-3 px-4 py-3.5 border-2 border-gray-300 rounded-xl hover:bg-gray-50 transition-all hover:shadow-md active:scale-95 hover:border-gray-400">
                <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span className="text-sm font-semibold text-gray-700">
                  Facebook
                </span>
              </button>
            </div>

            {/* Footer */}
            <div className="text-center pt-6 mt-6 border-t border-gray-200">
              <p className="text-gray-600 text-base mb-3">Đã có tài khoản?</p>
              <Button
                variant="secondary"
                fullWidth
                loading={loading}
                onClick={() => {
                  router.push("/auth/login");
                }}
                className="w-full bg-white border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 font-semibold py-3.5 rounded-xl transition-all duration-200"
              >
                Đăng nhập ngay
              </Button>
            </div>

            {/* Terms */}
            <p className="text-center text-gray-500 text-xs mt-6">
              Bằng việc đăng ký, bạn đồng ý với{" "}
              <a
                href="#"
                className="underline hover:no-underline font-medium text-gray-700"
              >
                Điều khoản dịch vụ
              </a>{" "}
              và{" "}
              <a
                href="#"
                className="underline hover:no-underline font-medium text-gray-700"
              >
                Chính sách bảo mật
              </a>
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shake {
          0%,
          100% {
            transform: translateX(0);
          }
          10%,
          30%,
          50%,
          70%,
          90% {
            transform: translateX(-5px);
          }
          20%,
          40%,
          60%,
          80% {
            transform: translateX(5px);
          }
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
}
