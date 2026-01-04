import React from "react";
import { Package, Clock, CheckCircle, XCircle, Calendar, RefreshCw, ShoppingBag, CreditCard } from "lucide-react";
import useOrder from "../hooks/useOrder";
import { OrderEnum } from "../OrderStatus/OrderStatus";
import Image from "next/image";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import { OrderItemProps } from "../order/OrderProps";

const StatusBadge = ({ status }: { status: OrderEnum }) => {
  const statusConfig = {
    PENDING: {
      color: "bg-linear-to-r from-yellow-400 to-orange-400 text-white shadow-lg shadow-yellow-200",
      icon: Clock,
      text: "Đang xử lý",
      dotColor: "bg-yellow-500"
    },
    COMPLETED: {
      color: "bg-linear-to-r from-green-400 to-emerald-500 text-white shadow-lg shadow-green-200",
      icon: CheckCircle,
      text: "Hoàn thành",
      dotColor: "bg-green-500"
    },
    CANCELLED: {
      color: "bg-linear-to-r from-red-400 to-pink-500 text-white shadow-lg shadow-red-200",
      icon: XCircle,
      text: "Đã hủy",
      dotColor: "bg-red-500"
    }
  };
  const config = statusConfig[status] || statusConfig.PENDING;
  const Icon = config.icon;

  return (
    <div className="relative">
      <div className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold ${config.color} backdrop-blur-sm`}>
        <span className={`w-2 h-2 ${config.dotColor} rounded-full animate-pulse`}></span>
        <Icon size={18} strokeWidth={2.5} />
        {config.text}
      </div>
    </div>
  );
};

const formatPrice = (price: number) =>
  new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(price);

const formatDate = (dateString: string) =>
  new Date(dateString).toLocaleDateString("vi-VN", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

export default function OrderPage() {
  const { order } = useOrder();

  if (!order) {
    return (
      <div className="min-h-screen bg-linear-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-4">
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-12 max-w-lg w-full border border-white/50">
          <div className="relative mb-8">
            <div className="w-32 h-32 bg-linear-to-br from-indigo-400 to-purple-500 rounded-full mx-auto flex items-center justify-center shadow-2xl">
              <Package className="w-16 h-16 text-white" strokeWidth={2} />
            </div>
            <div className="absolute top-0 right-1/4 animate-bounce">
              <div className="w-12 h-12 bg-linear-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl">📦</span>
              </div>
            </div>
          </div>
          <h2 className="text-3xl font-black text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600 text-center mb-4">
            Không có dữ liệu đơn hàng
          </h2>
          <p className="text-gray-600 text-center mb-8 text-lg">
            Hiện tại chưa có thông tin đơn hàng nào. Vui lòng thử lại sau.
          </p>
          <button className="w-full bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-bold py-4 px-8 rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
            <RefreshCw size={20} />
            Làm mới trang
          </button>
        </div>
      </div>
    );
  }

  const orderData = order;

  if (!orderData) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-linear-to-br from-gray-50 to-gray-100">
        <div className="bg-white p-12 rounded-3xl shadow-xl text-center border border-gray-200">
          <Package className="w-24 h-24 text-gray-300 mx-auto mb-6" />
          <h3 className="text-2xl font-bold mb-3 text-gray-800">Chưa có đơn hàng</h3>
          <p className="text-gray-500 text-lg">Các đơn hàng của bạn sẽ hiển thị ở đây</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 via-purple-50 to-pink-50">
      <Header />
      
      <div className="mt-10">
        {/* Page Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-linear-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <ShoppingBag className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-5xl font-black text-transparent bg-clip-text bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600">
                Đơn hàng của tôi
              </h1>
              <p className="text-gray-600 text-lg mt-1">Chi tiết đơn hàng vừa tạo</p>
            </div>
          </div>
        </div>

        {/* Order Card */}
        <div className="bg-white overflow-hidden hover:shadow-3xl transition-all duration-500">
          {/* Header with Gradient */}
          <div className="relative bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 p-8 text-white overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>
            
            <div className="relative flex flex-wrap justify-between items-center gap-4">
              <div>
                <p className="text-white/80 text-sm font-medium mb-2 flex items-center gap-2">
                  <CreditCard size={16} />
                  MÃ ĐƠN HÀNG
                </p>
                <p className="font-mono text-2xl font-black tracking-wider">
                  #{orderData.id.slice(0, 8).toUpperCase()}
                </p>
              </div>
              <StatusBadge status={orderData.status} />
            </div>
          </div>

          {/* Items Section */}
          <div className="p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Package className="w-5 h-5 text-indigo-600" />
              Sản phẩm trong đơn hàng
            </h3>
            
            <div className="space-y-4">
              {orderData.items.map((item: OrderItemProps) => (
                <div
                  key={item.productId}
                  className="group relative bg-linear-to-br from-gray-50 to-gray-100 rounded-2xl p-5 hover:from-indigo-50 hover:to-purple-50 transition-all duration-300 border-2 border-transparent hover:border-indigo-200"
                >
                  <div className="flex gap-5">
                    <div className="relative">
                      <Image
                        src={item.image}
                        alt="Product"
                        width={300}
                        height={300}
                        className="w-28 h-28 object-cover rounded-xl shadow-lg group-hover:shadow-2xl group-hover:scale-105 transition-all duration-300"
                      />
                      <div className="absolute -top-2 -right-2 bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shadow-lg">
                        {item.quantity}
                      </div>
                    </div>
                    
                    <div className="flex-1 flex flex-col justify-center">
                      <p className="text-xs text-gray-500 mb-2 font-mono">
                        ID: {item.productId.slice(0, 8)}...
                      </p>
                      <p className="font-bold text-2xl text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600 mb-2">
                        {formatPrice(item.price)}
                      </p>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-gray-600">Số lượng:</span>
                        <span className="font-bold text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full">
                          × {item.quantity}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Section */}
          <div className="bg-linear-to-br from-gray-50 to-gray-100 p-8 border-t-2 border-gray-200">
            <div className="space-y-4">
              <div className="flex justify-between items-center text-base bg-white rounded-xl p-4 shadow-sm">
                <span className="text-gray-600 flex items-center gap-2">
                  <Calendar size={18} className="text-indigo-600" />
                  Ngày đặt:
                </span>
                <span className="font-semibold text-gray-800">
                  {formatDate(orderData.createdAt)}
                </span>
              </div>
              
              <div className="flex justify-between items-center text-base bg-white rounded-xl p-4 shadow-sm">
                <span className="text-gray-600 flex items-center gap-2">
                  <Clock size={18} className="text-purple-600" />
                  Cập nhật:
                </span>
                <span className="font-semibold text-gray-800">
                  {formatDate(orderData.updatedAt)}
                </span>
              </div>
              
              <div className="flex justify-between items-center pt-4 border-t-2 border-gray-300">
                <span className="text-2xl font-bold text-gray-800">TỔNG CỘNG:</span>
                <span className="text-4xl font-black text-transparent bg-clip-text bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600">
                  {formatPrice(orderData.totalPrice)}
                </span>
              </div>

              {/* Payment Button */}
              {orderData.status === "PENDING" && (
                <button className="w-full mt-6 bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-bold py-5 px-8 rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 group">
                  <CreditCard size={24} className="group-hover:rotate-12 transition-transform duration-300" />
                  <span className="text-xl">Thanh toán ngay</span>
                  <div className="ml-2 bg-white/20 px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm">
                    {formatPrice(orderData.totalPrice)}
                  </div>
                </button>
              )}

              {orderData.status === "COMPLETED" && (
                <div className="w-full mt-6 bg-linear-to-r from-green-500 to-emerald-600 text-white font-bold py-5 px-8 rounded-2xl flex items-center justify-center gap-3 shadow-lg">
                  <CheckCircle size={24} />
                  <span className="text-xl">Đã thanh toán thành công</span>
                </div>
              )}

              {orderData.status === "CANCELLED" && (
                <div className="w-full mt-6 bg-linear-to-r from-gray-400 to-gray-500 text-white font-bold py-5 px-8 rounded-2xl flex items-center justify-center gap-3 shadow-lg opacity-75">
                  <XCircle size={24} />
                  <span className="text-xl">Đơn hàng đã bị hủy</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}