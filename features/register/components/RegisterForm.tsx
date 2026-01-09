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
  Zap,
  Star,
  CheckCircle2,
  ArrowRight,
  Sparkles
} from "lucide-react";

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

export default function RegisterForm({
  onSubmit,
  loading,
  error
}: RegisterProps) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

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
    <div className="min-h-screen bg-linear-to-br from-violet-50 via-purple-50 to-fuchsia-50 flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-fuchsia-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-violet-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main Card */}
      <div className="">
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Left Column - Branding */}
          <div className="relative bg-linear-to-br from-violet-600 via-purple-600 to-fuchsia-600 p-12 text-white overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full -ml-48 -mb-48"></div>

            <div className="relative z-10">
              {/* Logo & Title */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center">
                    <Smartphone className="w-8 h-8" />
                  </div>
                  <Sparkles className="w-6 h-6 text-yellow-300 animate-pulse" />
                </div>
                <h1 className="text-4xl font-bold mb-3 bg-linear-to-r from-white to-purple-100 bg-clip-text text-transparent">
                  Phone Sale AI
                </h1>
                <p className="text-purple-100 text-lg leading-relaxed">
                  Trải nghiệm mua sắm thông minh với công nghệ AI tiên tiến
                </p>
              </div>

              {/* Features */}
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-lg rounded-xl flex items-center justify-center shrink-0 group-hover:bg-white/30 transition-all duration-300">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">
                      Bảo mật tuyệt đối
                    </h3>
                    <p className="text-purple-100 text-sm">
                      Dữ liệu được mã hóa end-to-end với công nghệ blockchain
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-lg rounded-xl flex items-center justify-center shrink-0 group-hover:bg-white/30 transition-all duration-300">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Siêu tốc độ</h3>
                    <p className="text-purple-100 text-sm">
                      Xử lý giao dịch nhanh chóng với AI optimization
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-lg rounded-xl flex items-center justify-center shrink-0 group-hover:bg-white/30 transition-all duration-300">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Hỗ trợ 24/7</h3>
                    <p className="text-purple-100 text-sm">
                      Chatbot AI và đội ngũ chuyên viên luôn sẵn sàng
                    </p>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-300 text-yellow-300"
                    />
                  ))}
                </div>
                <p className="text-white/90 mb-4 italic leading-relaxed">
                  Sản phẩm tuyệt vời! Giao diện đẹp, dễ sử dụng và hỗ trợ nhiệt
                  tình. Đã mua 3 chiếc điện thoại!
                </p>
                <p className="text-purple-200 text-sm font-medium">
                  — Nguyễn Văn A, Khách hàng VIP
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="p-12">
            {/* Header */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Tạo tài khoản
              </h2>
              <p className="text-gray-600">
                Bắt đầu hành trình mua sắm thông minh của bạn
              </p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-6 bg-red-50 border-2 border-red-200 rounded-xl p-4 flex items-center gap-3 animate-shake">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-red-600 text-xl">⚠</span>
                </div>
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            )}

            {/* Form */}
            <div className="space-y-5">
              {/* Email Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div
                    className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors ${
                      focusedField === "email"
                        ? "text-purple-600"
                        : "text-gray-400"
                    }`}
                  >
                    <Mail className="w-5 h-5" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    onKeyPress={handleKeyPress}
                    className={`text-black w-full pl-12 pr-4 py-4 text-base rounded-xl border-2 transition-all duration-200 focus:outline-none ${
                      error
                        ? "border-red-300 focus:border-red-500 bg-red-50/50"
                        : focusedField === "email"
                        ? "border-purple-500 bg-white shadow-lg shadow-purple-100"
                        : "border-gray-200 bg-gray-50/50 hover:border-gray-300"
                    }`}
                    placeholder="example@email.com"
                    disabled={loading}
                  />
                </div>
              </div>

              {/* Username Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Tên người dùng <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div
                    className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors ${
                      focusedField === "username"
                        ? "text-purple-600"
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
                    onKeyPress={handleKeyPress}
                    className={`text-black w-full pl-12 pr-4 py-4 text-base rounded-xl border-2 transition-all duration-200 focus:outline-none ${
                      error
                        ? "border-red-300 focus:border-red-500 bg-red-50/50"
                        : focusedField === "username"
                        ? "border-purple-500 bg-white shadow-lg shadow-purple-100"
                        : "border-gray-200 bg-gray-50/50 hover:border-gray-300"
                    }`}
                    placeholder="Nhập tên người dùng"
                    disabled={loading}
                  />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Mật khẩu <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div
                    className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors ${
                      focusedField === "password"
                        ? "text-purple-600"
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
                    onKeyPress={handleKeyPress}
                    className={`text-black w-full pl-12 pr-12 py-4 text-base rounded-xl border-2 transition-all duration-200 focus:outline-none ${
                      error
                        ? "border-red-300 focus:border-red-500 bg-red-50/50"
                        : focusedField === "password"
                        ? "border-purple-500 bg-white shadow-lg shadow-purple-100"
                        : "border-gray-200 bg-gray-50/50 hover:border-gray-300"
                    }`}
                    placeholder="••••••••"
                    disabled={loading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-purple-600 transition-colors"
                    disabled={loading}
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
                <p className="mt-2 text-xs text-gray-500 flex items-center gap-1">
                  <Shield className="w-3 h-3" />
                  Tối thiểu 8 ký tự, bao gồm chữ hoa và số
                </p>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={!isFormValid || loading}
                className={`w-full py-4 rounded-xl font-semibold text-white text-base transition-all duration-300 flex items-center justify-center gap-2 group ${
                  isFormValid && !loading
                    ? "bg-linear-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 shadow-lg shadow-purple-300 hover:shadow-xl hover:shadow-purple-400 hover:-translate-y-0.5"
                    : "bg-gray-300 cursor-not-allowed"
                }`}
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Đang xử lý...
                  </>
                ) : (
                  <>
                    Đăng ký ngay
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              {/* Divider */}
              <div className="relative flex items-center justify-center my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative bg-white px-4 text-sm text-gray-500">
                  hoặc đăng ký với
                </div>
              </div>

              {/* Social Login */}
              <div className="grid grid-cols-2 gap-3">
                <button className="py-3 px-4 border-2 border-gray-200 rounded-xl hover:border-purple-300 hover:bg-purple-50 transition-all duration-200 font-medium text-gray-700 flex items-center justify-center gap-2 group">
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
                  Google
                </button>
                <button className="py-3 px-4 border-2 border-gray-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 font-medium text-gray-700 flex items-center justify-center gap-2">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Facebook
                </button>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">Đã có tài khoản?</p>
              <button
                onClick={() => (window.location.href = "/auth/login")}
                className="w-full bg-white border-2 border-gray-200 hover:border-purple-500 text-gray-700 hover:text-purple-600 font-semibold py-3.5 rounded-xl transition-all duration-200 hover:shadow-md"
              >
                Đăng nhập ngay
              </button>
            </div>

            {/* Terms */}
            <p className="mt-6 text-xs text-gray-500 text-center leading-relaxed">
              Bằng việc đăng ký, bạn đồng ý với{" "}
              <a
                href="#"
                className="text-purple-600 hover:text-purple-700 underline"
              >
                Điều khoản dịch vụ
              </a>{" "}
              và{" "}
              <a
                href="#"
                className="text-purple-600 hover:text-purple-700 underline"
              >
                Chính sách bảo mật
              </a>
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
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
            transform: translateX(-2px);
          }
          20%,
          40%,
          60%,
          80% {
            transform: translateX(2px);
          }
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
}
