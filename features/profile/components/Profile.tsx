import React, { useState } from "react";
import { useProfile } from "../hooks/useProfile";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";

const Profile: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const { data, loading, error } = useProfile();

  const copyEmail = () => {
    if (data?.email) {
      navigator.clipboard.writeText(data.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Loading State
  if (loading) {
    return (
      <div className="min-h-screen bg-linear-to-br from-orange-50 via-rose-50 to-pink-50 flex items-center justify-center p-6">
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;600;700;800&family=Manrope:wght@400;500;600;700&display=swap');
            
            * {
              font-family: 'Manrope', sans-serif;
            }
            
            h1, h2, .font-display {
              font-family: 'Bricolage Grotesque', sans-serif;
            }
            
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
            
            @keyframes pulse {
              0%, 100% { opacity: 1; }
              50% { opacity: 0.5; }
            }
            
            @keyframes shimmer {
              0% { background-position: -1000px 0; }
              100% { background-position: 1000px 0; }
            }
            
            .animate-spin {
              animation: spin 1s linear infinite;
            }
            
            .animate-pulse {
              animation: pulse 2s ease-in-out infinite;
            }
            
            .shimmer {
              background: linear-gradient(90deg, #f3f4f6 25%, #e5e7eb 50%, #f3f4f6 75%);
              background-size: 1000px 100%;
              animation: shimmer 2s infinite;
            }
          `}
        </style>

        <div className="w-full max-w-lg">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-white/50">
            {/* Avatar Skeleton */}
            <div className="flex justify-center mb-8">
              <div className="w-32 h-32 rounded-3xl shimmer"></div>
            </div>

            {/* Title Skeleton */}
            <div className="text-center mb-10">
              <div className="h-10 shimmer rounded-xl mb-3 mx-auto max-w-xs"></div>
              <div className="h-5 shimmer rounded-lg mx-auto max-w-sm"></div>
            </div>

            {/* Fields Skeleton */}
            <div className="space-y-6">
              <div>
                <div className="h-4 shimmer rounded w-32 mb-3"></div>
                <div className="h-20 shimmer rounded-2xl"></div>
              </div>
              <div>
                <div className="h-4 shimmer rounded w-32 mb-3"></div>
                <div className="h-20 shimmer rounded-2xl"></div>
              </div>
            </div>

            {/* Buttons Skeleton */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              <div className="h-14 shimmer rounded-2xl"></div>
              <div className="h-14 shimmer rounded-2xl"></div>
            </div>

            {/* Loading Text */}
            <div className="text-center mt-8">
              <div className="inline-flex items-center gap-3 text-gray-600">
                <div className="w-5 h-5 border-3 border-rose-400 border-t-transparent rounded-full animate-spin"></div>
                <span className="font-semibold">Đang tải thông tin...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="min-h-screen bg-linear-to-br from-orange-50 via-rose-50 to-pink-50 flex items-center justify-center p-6">
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;600;700;800&family=Manrope:wght@400;500;600;700&display=swap');
            
            * {
              font-family: 'Manrope', sans-serif;
            }
            
            h1, h2, .font-display {
              font-family: 'Bricolage Grotesque', sans-serif;
            }
            
            @keyframes shake {
              0%, 100% { transform: translateX(0); }
              25% { transform: translateX(-10px); }
              75% { transform: translateX(10px); }
            }
            
            @keyframes fadeIn {
              from { opacity: 0; transform: scale(0.9); }
              to { opacity: 1; transform: scale(1); }
            }
            
            .animate-shake {
              animation: shake 0.5s ease-in-out;
            }
            
            .animate-fade-in {
              animation: fadeIn 0.5s ease-out;
            }
          `}
        </style>

        <div className="w-full max-w-lg animate-fade-in">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-red-100">
            {/* Error Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-32 h-32 rounded-3xl bg-linear-to-br from-red-400 via-rose-400 to-pink-500 flex items-center justify-center shadow-2xl animate-shake">
                <svg
                  className="w-16 h-16 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
            </div>

            {/* Error Message */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-display font-bold text-gray-900 mb-4">
                Có lỗi xảy ra
              </h1>
              <p className="text-gray-600 font-medium mb-4">
                Không thể tải thông tin tài khoản
              </p>
              <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-4">
                <p className="text-sm text-red-700 font-semibold">
                  {typeof error === "string"
                    ? error
                    : "Đã xảy ra lỗi không xác định"}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={() => window.location.reload()}
                className="w-full group relative overflow-hidden bg-linear-to-r from-orange-500 via-rose-500 to-pink-500 text-white font-bold py-4 px-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                  Thử lại
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-pink-600 via-rose-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button
                onClick={() => window.history.back()}
                className="w-full bg-white border-2 border-gray-200 text-gray-700 font-bold py-4 px-6 rounded-2xl hover:border-rose-400 hover:text-rose-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                  Quay lại
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // No Data State
  if (!data) {
    return (
      <div className="min-h-screen bg-linear-to-br from-orange-50 via-rose-50 to-pink-50 flex items-center justify-center p-6">
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;600;700;800&family=Manrope:wght@400;500;600;700&display=swap');
            
            * {
              font-family: 'Manrope', sans-serif;
            }
            
            h1, h2, .font-display {
              font-family: 'Bricolage Grotesque', sans-serif;
            }
            
            @keyframes float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-20px); }
            }
            
            @keyframes fadeIn {
              from { opacity: 0; transform: scale(0.9); }
              to { opacity: 1; transform: scale(1); }
            }
            
            .animate-float {
              animation: float 3s ease-in-out infinite;
            }
            
            .animate-fade-in {
              animation: fadeIn 0.5s ease-out;
            }
          `}
        </style>

        <div className="w-full max-w-lg animate-fade-in">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-white/50 text-center">
            {/* Empty Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-32 h-32 rounded-3xl bg-linear-to-br from-gray-200 via-gray-300 to-gray-400 flex items-center justify-center shadow-2xl animate-float">
                <svg
                  className="w-16 h-16 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                  />
                </svg>
              </div>
            </div>

            {/* No Data Message */}
            <h1 className="text-4xl font-display font-bold text-gray-900 mb-4">
              Không có dữ liệu
            </h1>
            <p className="text-gray-600 font-medium mb-8">
              Không tìm thấy thông tin tài khoản của bạn
            </p>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={() => window.location.reload()}
                className="w-full group relative overflow-hidden bg-linear-to-r from-orange-500 via-rose-500 to-pink-500 text-white font-bold py-4 px-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                  Tải lại trang
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-pink-600 via-rose-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button
                onClick={() => window.history.back()}
                className="w-full bg-white border-2 border-gray-200 text-gray-700 font-bold py-4 px-6 rounded-2xl hover:border-rose-400 hover:text-rose-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  Về trang chủ
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Success State (Normal UI)
  return (
    <>
      <Header />
      <div className="min-h-screen bg-linear-to-br from-orange-50 via-rose-50 to-pink-50 flex items-center justify-center">
        <style>
          {`
          @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;600;700;800&family=Manrope:wght@400;500;600;700&display=swap');
          
          * {
            font-family: 'Manrope', sans-serif;
          }
          
          h1, h2, .font-display {
            font-family: 'Bricolage Grotesque', sans-serif;
          }
          
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }
          
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes pulse {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.8;
            }
          }
          
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          
          .animate-slide-up {
            animation: slideUp 0.8s ease-out forwards;
          }
          
          .animate-pulse-soft {
            animation: pulse 2s ease-in-out infinite;
          }
        `}
        </style>

        {/* Floating decoration circles */}
        <div className="fixed top-20 left-20 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="fixed bottom-20 right-20 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl animate-float"></div>

        <div className="w-full max-w-lg opacity-0 animate-slide-up">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-white/50">
            {/* Avatar */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-32 h-32 rounded-3xl bg-linear-to-br from-orange-400 via-rose-400 to-pink-500 flex items-center justify-center shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <span className="text-6xl font-display font-bold text-white">
                    {data.username.charAt(0).toUpperCase()}
                  </span>
                </div>
                {/* Online status */}
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-emerald-400 rounded-full border-4 border-white shadow-lg animate-pulse-soft"></div>
              </div>
            </div>

            {/* Title */}
            <div className="text-center mb-10">
              <h1 className="text-4xl font-display font-bold text-gray-900 mb-2">
                Thông tin tài khoản
              </h1>
              <p className="text-gray-500 font-medium">
                Quản lý thông tin cá nhân của bạn
              </p>
            </div>

            {/* Information Fields */}
            <div className="space-y-6">
              {/* Username */}
              <div className="group">
                <label className="block text-sm font-bold text-gray-600 mb-3 uppercase tracking-wider">
                  Tên người dùng
                </label>
                <div className="flex items-center gap-4 p-5 bg-linear-to-r from-orange-50 to-rose-50 rounded-2xl border-2 border-orange-100 group-hover:border-orange-300 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-orange-400 to-rose-400 flex items-center justify-center shrink-0 shadow-lg">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xl font-bold text-gray-900">
                      {data.username}
                    </div>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="group">
                <label className="block text-sm font-bold text-gray-600 mb-3 uppercase tracking-wider">
                  Địa chỉ Email
                </label>
                <div className="flex items-center gap-4 p-5 bg-linear-to-r from-rose-50 to-pink-50 rounded-2xl border-2 border-rose-100 group-hover:border-rose-300 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-rose-400 to-pink-400 flex items-center justify-center shrink-0 shadow-lg">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-lg font-semibold text-gray-900 truncate">
                      {data.email}
                    </div>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="w-11 h-11 rounded-xl bg-white border-2 border-rose-200 flex items-center justify-center hover:bg-rose-50 hover:border-rose-400 transition-all duration-200 shrink-0 shadow-sm"
                    title="Sao chép email"
                  >
                    {copied ? (
                      <svg
                        className="w-5 h-5 text-emerald-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5 text-rose-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              <button className="group relative overflow-hidden bg-linear-to-r from-orange-500 via-rose-500 to-pink-500 text-white font-bold py-4 px-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                  Chỉnh sửa
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-pink-600 via-rose-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button className="bg-white border-2 border-gray-200 text-gray-700 font-bold py-4 px-6 rounded-2xl hover:border-rose-400 hover:text-rose-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Cài đặt
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
