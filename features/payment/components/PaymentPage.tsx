"use client";
import {
  CheckCircle,
  ExternalLink,
  CreditCard,
  Clock,
  Hash,
  Plus,
  Shield,
  Sparkles
} from "lucide-react";
import { usePayment } from "../hooks/usePayment";

export default function PaymentPage() {
  const { payment, loading } = usePayment();
  if (loading) {
    return (
      <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Đang tải thanh toán...</p>
        </div>
      </div>
    );
  }

  if (!payment) {
    return (
      <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-slate-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-3xl shadow-2xl p-8 text-center border border-gray-100">
            {/* Icon */}
            <div className="mb-6 flex justify-center">
              <div className="relative">
                <div className="w-24 h-24 bg-linear-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                  <CreditCard className="w-12 h-12 text-white" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center border-4 border-white shadow-md">
                  <span className="text-white text-xl font-bold">!</span>
                </div>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Chưa có phương thức thanh toán
            </h2>

            {/* Description */}
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              Bạn chưa thêm phương thức thanh toán nào. Vui lòng thêm thẻ để
              tiếp tục.
            </p>

            {/* Action Button */}
            <button className="w-full bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 transform hover:scale-105">
              <Plus className="w-5 h-5" />
              Thêm phương thức thanh toán
            </button>

            {/* Secondary Info */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                <Shield className="w-4 h-4 text-green-600" />
                <span>
                  <span className="font-semibold text-gray-700">
                    Bảo mật 100%
                  </span>{" "}
                  - Dữ liệu được mã hóa
                </span>
              </div>
            </div>
          </div>

          {/* Additional Help */}
          <div className="mt-6 text-center">
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium hover:underline transition-all">
              Cần trợ giúp? Liên hệ hỗ trợ
            </button>
          </div>
        </div>
      </div>
    );
  }
  const handlePayment = () => {
    window.open(payment.checkoutUrl, "_blank");
  };
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <div className="">
        {/* Success Badge */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="bg-linear-to-r from-green-400 to-emerald-500 rounded-full p-4 shadow-xl animate-pulse">
              <CheckCircle className="w-16 h-16 text-white" />
            </div>
            <Sparkles className="w-6 h-6 text-yellow-400 absolute -top-1 -right-1 animate-bounce" />
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          {/* Header */}
          <div className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-5"></div>

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-5 rounded-full -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-5 rounded-full -ml-16 -mb-16"></div>
          </div>

          {/* Content */}
          <div className="p-8 space-y-6">
            {/* Order Code */}
            <div className="bg-linear-to-br from-blue-50 to-indigo-50 rounded-2xl p-5 flex items-start space-x-4 border border-blue-100 hover:shadow-md transition-all duration-300">
              <div className="bg-linear-to-br from-blue-500 to-blue-600 rounded-xl p-3 shadow-md">
                <Hash className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-500 font-semibold mb-1 uppercase tracking-wide">
                  Mã đơn hàng
                </p>
                <p className="text-xl font-bold text-gray-800">
                  {payment.orderCode}
                </p>
              </div>
            </div>

            {/* Payment Link ID */}
            <div className="bg-linear-to-br from-purple-50 to-pink-50 rounded-2xl p-5 flex items-start space-x-4 border border-purple-100 hover:shadow-md transition-all duration-300">
              <div className="bg-linear-to-br from-purple-500 to-purple-600 rounded-xl p-3 shadow-md">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-500 font-semibold mb-1 uppercase tracking-wide">
                  Payment Link ID
                </p>
                <p className="text-sm font-mono text-gray-700 break-all leading-relaxed">
                  {payment.paymentLinkId}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-4">
              <button
                onClick={handlePayment}
                className="w-full bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-bold py-5 rounded-2xl transition-all duration-300 flex items-center justify-center space-x-3 shadow-xl hover:shadow-2xl transform hover:scale-105 active:scale-95"
              >
                <ExternalLink className="w-6 h-6" />
                <span className="text-lg">Tiến hành thanh toán</span>
              </button>
            </div>

            {/* Info Note */}
            <div className="bg-linear-to-r from-amber-50 to-yellow-50 border-2 border-amber-200 rounded-2xl p-4 mt-6">
              <div className="flex items-center justify-center space-x-2">
                <Clock className="w-5 h-5 text-amber-600" />
                <p className="text-sm text-amber-800 font-medium">
                  Vui lòng hoàn tất thanh toán trong vòng{" "}
                  <span className="font-bold">15 phút</span>
                </p>
              </div>
            </div>

            {/* Security Badge */}
            <div className="flex items-center justify-center space-x-2 pt-4 border-t border-gray-100">
              <Shield className="w-4 h-4 text-green-600" />
              <p className="text-xs text-gray-500">
                Bảo mật bởi{" "}
                <span className="font-bold text-gray-700">SSL 256-bit</span>
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-600">
            Powered by{" "}
            <span className="font-bold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              PayOS
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
