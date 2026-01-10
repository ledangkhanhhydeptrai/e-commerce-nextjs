import Button from "@/components/ui/Button/Button";
import { AlertCircle, Home, RefreshCw, Shield } from "lucide-react";

export function ErrorState() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden p-12 text-center">
          {/* Error Icon with Animation */}
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 bg-red-100 rounded-full animate-ping opacity-75"></div>
            <div className="relative bg-linear-to-br from-red-500 to-red-600 rounded-full p-6">
              <AlertCircle className="w-16 h-16 text-white" />
            </div>
          </div>

          {/* Error Message */}
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Không thể tải sản phẩm
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Đã xảy ra lỗi khi tải thông tin sản phẩm. Vui lòng thử lại sau.
          </p>

          {/* Error Details */}
          <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-5 mb-8 text-left">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-red-900 mb-1">Chi tiết lỗi:</p>
                <p className="text-sm text-red-700">
                  Không thể kết nối đến máy chủ hoặc sản phẩm không tồn tại. Vui
                  lòng kiểm tra kết nối mạng của bạn.
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              loading={false}
              fullWidth
              variant="danger"
              onClick={() => (window.location.href = "/")}
              className="flex items-center justify-center gap-2 bg-white border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <Home className="w-5 h-5" />
              Về trang chủ
            </Button>
          </div>

          {/* Help Text */}
          <p className="text-sm text-gray-500 mt-8">
            Nếu vấn đề vẫn tiếp diễn, vui lòng liên hệ{" "}
            <a href="#" className="text-blue-600 hover:text-blue-700 underline">
              hỗ trợ khách hàng
            </a>
          </p>
        </div>

        {/* Additional Info Cards */}
        <div className="grid sm:grid-cols-3 gap-4 mt-8">
          <div className="bg-white rounded-xl shadow-md p-4 text-center hover:shadow-lg transition-shadow">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <AlertCircle className="w-5 h-5 text-blue-600" />
            </div>
            <p className="text-sm font-medium text-gray-900">Mã lỗi</p>
            <p className="text-xs text-gray-500 mt-1">404 - Not Found</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-4 text-center hover:shadow-lg transition-shadow">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <Shield className="w-5 h-5 text-green-600" />
            </div>
            <p className="text-sm font-medium text-gray-900">Bảo mật</p>
            <p className="text-xs text-gray-500 mt-1">Dữ liệu an toàn</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-4 text-center hover:shadow-lg transition-shadow">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <RefreshCw className="w-5 h-5 text-purple-600" />
            </div>
            <p className="text-sm font-medium text-gray-900">Tự động</p>
            <p className="text-xs text-gray-500 mt-1">Thử lại sau 30s</p>
          </div>
        </div>
      </div>
    </div>
  );
}
