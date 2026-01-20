import React, { useState } from "react";
import { useProfile } from "../hooks/useProfile";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import Input from "@/components/ui/Input/Input";
import { useDispatch } from "react-redux";
import { updateProfileRequest } from "../store/profileUpdateSlice";
import Image from "next/image";

const Profile: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const { data, loading, error, success } = useProfile();
  const [email, setEmail] = React.useState<string>("");
  const [username, setUsername] = React.useState<string>("");
  const [focusedField, setFocusedField] = React.useState<string | null>(null);
  const [imageError, setImageError] = React.useState(false);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (data) {
      setEmail(data.email);
      setUsername(data.username);
      setImageError(false); // Reset image error when data changes
    }
  }, [data, success]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      updateProfileRequest({
        email,
        username
      })
    );
  };

  const handleImageError = () => {
    setImageError(true);
  };

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
            <h1 className="text-4xl font-display font-bold text-gray-900 mb-4">
              Không có dữ liệu
            </h1>
            <p className="text-gray-600 font-medium mb-8">
              Không tìm thấy thông tin tài khoản của bạn
            </p>
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
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-linear-to-br from-orange-50 via-rose-50 to-pink-50 flex items-center justify-center p-6">
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;600;700;800&family=Manrope:wght@400;500;600;700&display=swap');
            
            @keyframes shimmer {
              0% { background-position: -1000px 0; }
              100% { background-position: 1000px 0; }
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
            <div className="flex justify-center mb-8">
              <div className="w-32 h-32 rounded-3xl shimmer"></div>
            </div>
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

  if (error) {
    return (
      <div className="min-h-screen bg-linear-to-br from-orange-50 via-rose-50 to-pink-50 flex items-center justify-center p-6">
        <div className="w-full max-w-lg">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-red-100 text-center">
            <h1 className="text-4xl font-display font-bold text-gray-900 mb-4">
              Có lỗi xảy ra
            </h1>
            <p className="text-gray-600 font-medium mb-4">
              Không thể tải thông tin tài khoản
            </p>
          </div>
        </div>
      </div>
    );
  }

  const copyEmail = () => {
    if (data.email) {
      navigator.clipboard.writeText(data.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Check if user has image and it's not errored
  const hasValidImage = data.image && !imageError;

  return (
    <>
      <Header />
      <div className="min-h-screen bg-linear-to-br from-orange-50 via-rose-50 to-pink-50 py-12">
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
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
          }
          
          @keyframes slideInLeft {
            from { opacity: 0; transform: translateX(-100px); }
            to { opacity: 1; transform: translateX(0); }
          }
          
          @keyframes slideInRight {
            from { opacity: 0; transform: translateX(100px); }
            to { opacity: 1; transform: translateX(0); }
          }
          
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
          }
          
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          
          .animate-slide-in-left {
            animation: slideInLeft 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .animate-slide-in-right {
            animation: slideInRight 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .animate-pulse-soft {
            animation: pulse 2s ease-in-out infinite;
          }
          
          .input-focus-glow:focus {
            box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.1), 0 4px 12px rgba(249, 115, 22, 0.15);
          }
          
          .decorative-blob {
            filter: blur(60px);
            opacity: 0.4;
          }
          
          .stat-card {
            transition: all 0.3s ease;
          }
          
          .stat-card:hover {
            transform: translateY(-4px);
          }

          .avatar-image {
            object-fit: cover;
            object-position: center;
          }
        `}
        </style>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* LEFT SIDE - Profile Display */}
            <div className="animate-slide-in-left">
              <div className="sticky top-6">
                <div className="relative">
                  {/* Decorative Blobs */}
                  <div className="absolute -top-10 -left-10 w-72 h-72 bg-orange-300 rounded-full decorative-blob animate-float" />
                  <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-rose-300 rounded-full decorative-blob" />

                  {/* Main Content Card */}
                  <div className="relative z-10 bg-white/70 backdrop-blur-xl rounded-3xl p-10 border border-white/50 shadow-2xl">
                    {/* Avatar Section */}
                    <div className="flex justify-center mb-8">
                      <div className="relative">
                        <div className="w-40 h-40 rounded-3xl bg-linear-to-br from-orange-400 via-rose-400 to-pink-500 flex items-center justify-center shadow-2xl transform hover:scale-105 transition-transform duration-300 cursor-pointer overflow-hidden">
                          {hasValidImage ? (
                            <Image
                              src={data.image}
                              alt={data.username}
                              width={300}
                              height={300}
                              onError={handleImageError}
                              className="w-full h-full avatar-image"
                            />
                          ) : (
                            <span className="text-7xl font-display font-bold text-white">
                              {data.username.charAt(0).toUpperCase()}
                            </span>
                          )}
                        </div>
                        <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-emerald-400 rounded-full border-4 border-white shadow-lg flex items-center justify-center animate-pulse-soft">
                          <svg
                            className="w-6 h-6 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* User Info */}
                    <div className="text-center mb-8">
                      <h1 className="font-display text-5xl font-bold bg-linear-to-r from-orange-600 via-rose-600 to-pink-600 bg-clip-text text-transparent mb-3">
                        {data.username}
                      </h1>
                      <p className="text-gray-500 text-lg font-medium mb-2">
                        {data.email}
                      </p>
                      <button
                        onClick={copyEmail}
                        className="inline-flex items-center gap-2 text-sm text-rose-600 hover:text-rose-700 font-semibold transition-colors"
                      >
                        {copied ? (
                          <>
                            <svg
                              className="w-4 h-4"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            Đã sao chép!
                          </>
                        ) : (
                          <>
                            <svg
                              className="w-4 h-4"
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
                            Sao chép email
                          </>
                        )}
                      </button>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="stat-card bg-linear-to-br from-orange-50 to-orange-100 rounded-2xl p-5 border-2 border-orange-200">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 bg-linear-to-br from-orange-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                            <svg
                              className="w-6 h-6 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        </div>
                        <h3 className="font-bold text-gray-800 text-2xl mb-1">
                          100%
                        </h3>
                        <p className="text-sm text-gray-600 font-semibold">
                          Xác thực
                        </p>
                      </div>

                      <div className="stat-card bg-linear-to-br from-rose-50 to-rose-100 rounded-2xl p-5 border-2 border-rose-200">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 bg-linear-to-br from-rose-400 to-rose-500 rounded-xl flex items-center justify-center shadow-lg">
                            <svg
                              className="w-6 h-6 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        </div>
                        <h3 className="font-bold text-gray-800 text-2xl mb-1">
                          Bảo mật
                        </h3>
                        <p className="text-sm text-gray-600 font-semibold">
                          Cao cấp
                        </p>
                      </div>
                    </div>

                    {/* Account Info */}
                    <div className="space-y-4 mb-8">
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-10 h-10 bg-linear-to-br from-orange-100 to-orange-200 rounded-lg flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-orange-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">
                            User ID
                          </p>
                          <p className="text-gray-800 font-mono text-xs truncate max-w-xs">
                            {data.id}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-10 h-10 bg-linear-to-br from-rose-100 to-rose-200 rounded-lg flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-rose-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">
                            Trạng thái
                          </p>
                          <p className="text-emerald-600 font-semibold">
                            Đang hoạt động
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Security Notice */}
                    <div className="bg-linear-to-r from-orange-50 to-rose-50 rounded-2xl p-5 border-2 border-orange-100">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-linear-to-br from-orange-400 to-rose-400 rounded-lg flex items-center justify-center shrink-0">
                          <svg
                            className="w-5 h-5 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-800 mb-1">
                            Bảo mật tài khoản
                          </h3>
                          <p className="text-sm text-gray-600">
                            Dữ liệu của bạn được mã hóa end-to-end và bảo vệ bởi
                            công nghệ tiên tiến nhất.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE - Update Form */}
            <div className="animate-slide-in-right">
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                {/* Header Bar */}
                <div className="h-2 bg-linear-to-r from-orange-500 via-rose-500 to-pink-500" />

                <div className="p-8 lg:p-10">
                  {/* Form Header */}
                  <div className="mb-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-linear-to-br from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                        <svg
                          className="w-7 h-7 text-white"
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
                      </div>
                      <div>
                        <h2 className="font-display text-3xl font-bold text-gray-800">
                          Cập nhật thông tin
                        </h2>
                        <p className="text-gray-500">
                          Chỉnh sửa thông tin tài khoản của bạn
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Update Form */}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* User ID (Read-only) */}
                    <div>
                      <label className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                        User ID
                      </label>
                      <div className="relative">
                        <Input
                          type="text"
                          value={data.id}
                          className="w-full px-4 py-3.5 bg-gray-50 text-gray-400 border border-gray-200 rounded-xl outline-none cursor-not-allowed text-sm font-mono"
                          readOnly
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5 bg-gray-200 text-gray-600 px-2.5 py-1 rounded-lg text-xs font-bold">
                          <svg
                            className="w-3.5 h-3.5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>LOCKED</span>
                        </div>
                      </div>
                    </div>

                    {/* Username */}
                    <div>
                      <label
                        className={`text-xs font-semibold mb-2 uppercase tracking-wide flex items-center gap-1.5 transition-colors ${focusedField === "username" ? "text-orange-600" : "text-gray-500"}`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full transition-colors ${focusedField === "username" ? "bg-orange-600" : "bg-gray-400"}`}
                        />
                        Username
                      </label>
                      <div className="relative group">
                        <Input
                          type="text"
                          name="username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          onFocus={() => setFocusedField("username")}
                          onBlur={() => setFocusedField(null)}
                          className="input-focus-glow w-full px-4 py-3.5 bg-gray-50 text-gray-800 border-2 border-gray-200 rounded-xl outline-none transition-all focus:bg-white focus:border-orange-400"
                          required
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-orange-400 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none">
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
                              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        className={`text-xs font-semibold mb-2 uppercase tracking-wide flex items-center gap-1.5 transition-colors ${focusedField === "email" ? "text-rose-600" : "text-gray-500"}`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full transition-colors ${focusedField === "email" ? "bg-rose-600" : "bg-gray-400"}`}
                        />
                        Email Address
                      </label>
                      <div className="relative group">
                        <Input
                          type="email"
                          name="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          onFocus={() => setFocusedField("email")}
                          onBlur={() => setFocusedField(null)}
                          className="input-focus-glow w-full px-4 py-3.5 bg-gray-50 text-gray-800 border-2 border-gray-200 rounded-xl outline-none transition-all focus:bg-white focus:border-rose-400"
                          required
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-rose-400 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none">
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
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="relative w-full mt-8 px-6 py-4 bg-linear-to-r from-orange-500 via-rose-500 to-pink-500 text-white font-bold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/50 hover:-translate-y-0.5 active:translate-y-0 group"
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
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Lưu thay đổi
                      </span>
                    </button>
                  </form>

                  {/* Footer */}
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <p className="text-xs text-gray-400 flex items-center justify-center gap-1.5">
                      <svg
                        className="w-3.5 h-3.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Thay đổi sẽ được cập nhật ngay lập tức
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
