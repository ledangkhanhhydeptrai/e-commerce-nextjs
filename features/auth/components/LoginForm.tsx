"use client";
import React from "react";
import { User, Lock, Phone, AlertCircle } from "lucide-react";
import Button from "@/components/ui/Button/Button";
import Label from "@/components/ui/Label/Label";
import Input from "@/components/ui/Input/Input";
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
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header Section */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg mb-4">
            <Phone className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Phone Sale</h1>
          <p className="text-gray-600 text-sm">
            Artificial Intelligence Phone - Trải nghiệm tốt nhất cho khách hàng
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Chào mừng trở lại!
            </h2>
            <p className="text-gray-600 text-sm">
              Vui lòng đăng nhập vào tài khoản của bạn
            </p>
          </div>

          {/* Error Alert */}
          {error && (
            <div className="mb-6 bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3 animate-shake">
              <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          )}

          {/* Form */}
          <div className="space-y-5" onKeyPress={handleKeyPress}>
            {/* Username Input */}
            <div className="space-y-2">
              <Label
                htmlFor="register"
                optional={false}
                size="md"
                required
                variant="colorful"
                className="text-sm font-medium text-gray-700 block"
              >
                Tên đăng nhập
              </Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="w-5 h-5 text-gray-400" />
                </div>
                <Input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className={`w-full pl-12 pr-4 py-3.5 rounded-xl border-2 transition-all duration-200 focus:outline-none ${
                    error
                      ? "border-red-300 focus:border-red-500 bg-red-50/50"
                      : "border-gray-200 focus:border-blue-500 bg-gray-50/50"
                  } hover:border-gray-300 focus:bg-white`}
                  placeholder="Nhập tên đăng nhập"
                  disabled={loading}
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <Label
                className="text-sm font-medium text-gray-700 block"
                htmlFor="password"
                optional={false}
                size="md"
                required
                variant="colorful"
              >
                Mật khẩu
              </Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="w-5 h-5 text-gray-400" />
                </div>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full pl-12 pr-4 py-3.5 rounded-xl border-2 transition-all duration-200 focus:outline-none ${
                    error
                      ? "border-red-300 focus:border-red-500 bg-red-50/50"
                      : "border-gray-200 focus:border-blue-500 bg-gray-50/50"
                  } hover:border-gray-300 focus:bg-white`}
                  placeholder="Nhập mật khẩu"
                  disabled={loading}
                />
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <Label
                htmlFor="remember"
                optional={false}
                size="md"
                required
                variant="colorful"
                className="flex items-center gap-2 cursor-pointer group"
              >
                <Input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-0 cursor-pointer"
                  disabled={loading}
                />
                <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                  Ghi nhớ đăng nhập
                </span>
              </Label>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-700 font-medium transition-colors hover:underline"
              >
                Quên mật khẩu?
              </a>
            </div>

            {/* Login Button */}
            <Button
              onClick={handleSubmit}
              loading={loading}
              variant="primary"
              fullWidth
              className="w-full bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3.5 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 disabled:transform-none disabled:hover:shadow-lg"
            >
              Đăng nhập
            </Button>

            {/* Sign Up Link */}
            <div className="text-center pt-4 border-t border-gray-200">
              <p className="text-gray-600 text-sm">
                Chưa có tài khoản?{" "}
                <Button
                  variant="primary"
                  loading={loading}
                  fullWidth
                  onClick={() => {
                    router.push("/auth/register");
                  }}
                  className="w-full bg-blue-600 border-2 border-gray-300 hover:border-blue-500 text-black hover:text-blue-600 font-semibold py-3 rounded-xl transition-all duration-200"
                >
                  Đăng ký ngay
                </Button>
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-500 text-xs mt-6">
          © 2025 Phone Sale. All rights reserved.
        </p>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shake {
          0%,
          100% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-5px);
          }
          75% {
            transform: translateX(5px);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-shake {
          animation: shake 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}
