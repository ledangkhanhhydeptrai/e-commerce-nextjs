"use client";
import React from "react";
import {
  User,
  Lock,
  Phone,
  AlertCircle,
  Eye,
  EyeOff,
  Sparkles
} from "lucide-react";
import { useRouter } from "next/navigation";

// Props interface
interface Props {
  onSubmit: (username: string, password: string) => void;
  loading: boolean;
  error: string | null;
}

export default function LoginForm({ onSubmit, loading, error }: Props) {
  const [username, setUsername] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [rememberMe, setRememberMe] = React.useState<boolean>(false);
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const [focusedField, setFocusedField] = React.useState<string | null>(null);
  const router = useRouter();
  const handleSubmit = () => {
    if (!username || !password) return;
    onSubmit(username, password);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-linear-to-br from-white to-blue-50 rounded-3xl shadow-2xl mb-6 relative group hover:scale-110 transition-transform duration-300">
            <div className="absolute inset-0 bg-linear-to-br from-blue-400 to-purple-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <Phone className="w-10 h-10 text-indigo-600 relative z-10" />
            <Sparkles className="w-4 h-4 text-yellow-400 absolute top-2 right-2 animate-pulse" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-3 drop-shadow-lg">
            Phone Sale
          </h1>
          <p className="text-white/90 text-base font-medium drop-shadow">
            Trải nghiệm AI Phone thế hệ mới
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 border border-white/40 hover:shadow-indigo-500/20 transition-shadow duration-300">
          <div className="mb-8">
            <h2 className="text-3xl font-bold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
              Chào mừng trở lại! 👋
            </h2>
            <p className="text-gray-600">Vui lòng đăng nhập để tiếp tục</p>
          </div>

          {/* Error Alert */}
          {error && (
            <div className="mb-6 bg-linear-to-r from-red-50 to-pink-50 border-2 border-red-200 rounded-2xl p-4 flex items-start gap-3 animate-shake shadow-lg">
              <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5 animate-pulse" />
              <p className="text-red-700 text-sm font-medium">{error}</p>
            </div>
          )}

          {/* Form */}
          <div className="space-y-6" onKeyPress={handleKeyPress}>
            {/* Username Input */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                Tên đăng nhập
                <span className="text-red-500">*</span>
              </label>
              <div className="relative group">
                <div
                  className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-all duration-200 ${
                    focusedField === "username"
                      ? "text-indigo-600"
                      : "text-gray-400"
                  }`}
                >
                  <User className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  onFocus={() => setFocusedField("username")}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full pl-12 pr-4 py-4 rounded-xl border-2 transition-all duration-300 focus:outline-none font-medium ${
                    error
                      ? "border-red-300 focus:border-red-500 bg-red-50/30"
                      : focusedField === "username"
                      ? "border-indigo-500 bg-indigo-50/50 shadow-lg shadow-indigo-100"
                      : "border-gray-200 bg-gray-50/50"
                  } hover:border-indigo-300 focus:bg-white placeholder:text-gray-400`}
                  placeholder="Nhập tên đăng nhập của bạn"
                  disabled={loading}
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                Mật khẩu
                <span className="text-red-500">*</span>
              </label>
              <div className="relative group">
                <div
                  className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-all duration-200 ${
                    focusedField === "password"
                      ? "text-indigo-600"
                      : "text-gray-400"
                  }`}
                >
                  <Lock className="w-5 h-5" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setFocusedField("password")}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full pl-12 pr-12 py-4 rounded-xl border-2 transition-all duration-300 focus:outline-none font-medium ${
                    error
                      ? "border-red-300 focus:border-red-500 bg-red-50/30"
                      : focusedField === "password"
                      ? "border-indigo-500 bg-indigo-50/50 shadow-lg shadow-indigo-100"
                      : "border-gray-200 bg-gray-50/50"
                  } hover:border-indigo-300 focus:bg-white placeholder:text-gray-400`}
                  placeholder="Nhập mật khẩu của bạn"
                  disabled={loading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-indigo-600 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2.5 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-5 h-5 rounded-lg border-2 border-gray-300 text-indigo-600 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-0 cursor-pointer transition-all"
                  disabled={loading}
                />
                <span className="text-sm font-medium text-gray-700 group-hover:text-indigo-600 transition-colors">
                  Ghi nhớ đăng nhập
                </span>
              </label>
              <a
                href="#"
                className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors hover:underline"
              >
                Quên mật khẩu?
              </a>
            </div>

            {/* Login Button */}
            <button
              onClick={handleSubmit}
              disabled={loading || !username || !password}
              className="relative w-full bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-indigo-500/50 transform hover:-translate-y-1 active:translate-y-0 transition-all duration-200 disabled:transform-none disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group"
            >
              <div className="absolute inset-0 bg-linear-to-r from-white/0 via-white/20 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span className="relative flex items-center justify-center gap-2">
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Đang xử lý...
                  </>
                ) : (
                  "Đăng nhập ngay →"
                )}
              </span>
            </button>

            {/* Sign Up Link */}
            <div className="text-center pt-6 border-t-2 border-gray-100">
              <p className="text-gray-600 text-sm mb-3">Chưa có tài khoản?</p>
              <button
                onClick={() => {
                  router.push("/auth/register");
                }}
                disabled={loading}
                className="w-full bg-white border-2 border-gray-200 hover:border-indigo-500 hover:bg-linear-to-r hover:from-indigo-50 hover:to-purple-50 text-gray-700 hover:text-indigo-600 font-semibold py-3.5 rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Đăng ký tài khoản mới ✨
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-white/80 text-sm mt-8 drop-shadow">
          © 2025 Phone Sale. All rights reserved.
        </p>
      </div>

      <style jsx>{`
        @keyframes shake {
          0%,
          100% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-8px);
          }
          75% {
            transform: translateX(8px);
          }
        }

        .animate-shake {
          animation: shake 0.4s ease-out;
        }

        .delay-1000 {
          animation-delay: 1s;
        }

        .delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}
