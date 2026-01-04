"use client";
import React from "react";
import {
  ShoppingCart,
  ArrowLeft,
  Package,
  Truck,
  ShieldCheck,
  Trash2,
  Tag,
  Gift,
  Sparkles,
  Clock
} from "lucide-react";
import { useCart } from "../hooks/useCart";
import Image from "next/image";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import { useRouter } from "next/navigation";

const CartPage: React.FC = () => {
  const { cart, loading, error, changeQuantity, deleteItem } = useCart();
  const router = useRouter();

  if (loading) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-linear-to-br from-sky-50 via-cyan-50 to-teal-50 flex items-center justify-center relative overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-300/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-300/30 rounded-full blur-3xl animate-pulse"></div>
          </div>

          <div className="text-center relative z-10">
            <div className="relative inline-block">
              <div className="animate-spin rounded-full h-24 w-24 border-4 border-cyan-200 border-t-cyan-600 mx-auto mb-6"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <ShoppingCart className="w-10 h-10 text-cyan-600 animate-pulse" />
              </div>
            </div>
            <p className="text-gray-700 font-bold text-xl animate-pulse">
              Đang tải giỏ hàng...
            </p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-linear-to-br from-sky-50 via-cyan-50 to-teal-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-md text-center border-2 border-red-100 animate-fade-in">
            <div className="w-24 h-24 bg-linear-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
              <span className="text-5xl">⚠️</span>
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-3">
              Có lỗi xảy ra
            </h3>
            <p className="text-red-600 font-semibold mb-6">{error}</p>
            <button
              onClick={() => router.back()}
              className="w-full bg-linear-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-xl font-bold hover:from-red-600 hover:to-red-700 transition-all"
            >
              Quay lại
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (!cart || cart.items.length === 0) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-linear-to-br from-sky-50 via-cyan-50 to-teal-50 flex items-center justify-center p-4 relative overflow-hidden">
          {/* Animated blobs */}
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-cyan-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-teal-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-20 left-20 w-72 h-72 bg-sky-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>

          <div className="relative bg-white/90 backdrop-blur-2xl rounded-3xl shadow-2xl p-14 text-center max-w-lg w-full border border-cyan-100 animate-scale-in">
            <div className="relative inline-block mb-8">
              <div className="w-32 h-32 bg-linear-to-br from-cyan-400 via-cyan-500 to-teal-600 rounded-full flex items-center justify-center shadow-2xl animate-float">
                <ShoppingCart
                  className="w-16 h-16 text-white"
                  strokeWidth={2.5}
                />
              </div>
              <div className="absolute -top-2 -right-2 w-12 h-12 bg-linear-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <span className="text-2xl">✨</span>
              </div>
            </div>

            <h2 className="text-5xl font-black bg-linear-to-r from-cyan-600 via-teal-600 to-sky-600 bg-clip-text text-transparent mb-4 animate-fade-in">
              Giỏ hàng trống
            </h2>

            <p className="text-gray-600 mb-10 text-lg leading-relaxed">
              Hãy khám phá và thêm những sản phẩm yêu thích vào giỏ hàng nhé! 🛍️
            </p>

            <button
              onClick={() => router.push("/")}
              className="w-full bg-linear-to-r from-cyan-600 via-cyan-500 to-teal-600 text-white px-10 py-5 rounded-2xl font-black text-lg hover:from-cyan-700 hover:to-teal-700 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105 active:scale-95 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <Sparkles className="w-6 h-6" />
                Khám phá ngay
                <Sparkles className="w-6 h-6" />
              </span>
              <div className="absolute inset-0 bg-linear-to-r from-teal-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const subtotal = cart.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 0 ? 30000 : 0;
  const discount = subtotal > 1000000 ? subtotal * 0.1 : 0;
  const total = subtotal + shipping - discount;

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND"
    }).format(amount);

  return (
    <div className="min-h-screen bg-linear-to-br from-sky-50 via-cyan-50 to-teal-50 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-cyan-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-teal-200/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <Header />

      <div className="">
        {/* Header Section */}
        <div className="mb-10 animate-fade-in">
          <button
            onClick={() => router.back()}
            className="group flex items-center gap-3 text-gray-600 hover:text-cyan-600 mb-8 transition-all bg-white/80 backdrop-blur-sm px-6 py-3.5 rounded-2xl shadow-lg hover:shadow-xl border border-cyan-100"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform duration-300" />
            <span className="font-bold">Tiếp tục mua sắm</span>
          </button>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
            <div className="relative">
              <div className="w-20 h-20 bg-linear-to-br from-cyan-500 via-cyan-600 to-teal-600 rounded-3xl flex items-center justify-center shadow-2xl animate-float">
                <ShoppingCart
                  className="w-10 h-10 text-white"
                  strokeWidth={2.5}
                />
              </div>
              <div className="absolute -top-3 -right-3 w-10 h-10 bg-linear-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-xl border-4 border-white animate-bounce">
                <span className="text-white text-sm font-black">
                  {cart.items.length}
                </span>
              </div>
            </div>
            <div>
              <h1 className="text-5xl sm:text-6xl font-black bg-linear-to-r from-cyan-600 via-teal-600 to-sky-600 bg-clip-text text-transparent mb-2">
                Giỏ hàng của bạn
              </h1>
              <p className="text-gray-600 text-lg flex items-center gap-2">
                <Package className="w-5 h-5 text-cyan-600" />
                <span className="font-semibold">
                  {cart.items.length} sản phẩm
                </span>
                <span className="text-gray-400">•</span>
                <span className="text-cyan-600 font-bold">
                  {formatCurrency(total)}
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cart.items.map((item) => (
              <div
                key={item.cartItemId}
                className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl overflow-hidden border border-cyan-100 hover:shadow-2xl hover:border-cyan-200 transition-all duration-300 group animate-slide-in relative"
              >
                {/* Delete button */}
                <button
                  onClick={() => deleteItem(cart.id)}
                  className="absolute top-5 right-5 z-20 w-11 h-11 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-red-50 transition-all hover:scale-110 group/trash border border-gray-200"
                  aria-label="Xóa sản phẩm"
                >
                  <Trash2 className="w-5 h-5 text-gray-400 group-hover/trash:text-red-500 transition-colors" />
                </button>

                <div className="flex flex-col sm:flex-row gap-6 p-7">
                  {/* Product Image */}
                  <div className="relative shrink-0 overflow-hidden rounded-2xl bg-linear-to-br from-cyan-100 via-teal-50 to-sky-100 border border-cyan-200">
                    <Image
                      src={item.image}
                      alt={item.productName}
                      width={300}
                      height={300}
                      className="w-full sm:w-48 h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-xl border-2 border-cyan-200">
                      <span className="text-base font-black text-cyan-600">
                        x{item.quantity}
                      </span>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 flex flex-col justify-between min-w-0">
                    <div>
                      <h3 className="text-2xl font-black text-gray-900 group-hover:text-cyan-600 transition-colors mb-4 pr-12">
                        {item.productName}
                      </h3>

                      <div className="flex flex-wrap items-center gap-3 mb-5">
                        <div className="flex items-center gap-2 text-sm bg-gray-100 px-3 py-1.5 rounded-full">
                          <Package className="w-4 h-4 text-gray-600" />
                          <span className="font-semibold text-gray-700">
                            Còn hàng
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-emerald-700 bg-linear-to-r from-emerald-50 to-green-50 px-4 py-1.5 rounded-full border border-emerald-200">
                          <Truck className="w-4 h-4" />
                          <span className="font-bold">Giao nhanh 2h</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-amber-700 bg-linear-to-r from-amber-50 to-yellow-50 px-4 py-1.5 rounded-full border border-amber-200">
                          <Clock className="w-4 h-4" />
                          <span className="font-bold">Còn 5 sản phẩm</span>
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-bold text-gray-700">
                          Số lượng:
                        </span>
                        <div className="flex items-center border-2 border-cyan-300 rounded-2xl overflow-hidden shadow-md bg-white">
                          <button
                            className="px-5 py-3 hover:bg-cyan-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-black text-cyan-600 text-lg"
                            disabled={item.quantity <= 1}
                            onClick={() =>
                              changeQuantity(item.cartItemId, item.quantity - 1)
                            }
                          >
                            −
                          </button>
                          <span className="px-7 py-3 font-black text-gray-900 bg-cyan-50 border-x-2 border-cyan-300 text-lg">
                            {item.quantity}
                          </span>
                          <button
                            className="px-5 py-3 hover:bg-cyan-50 transition-colors font-black text-cyan-600 text-lg"
                            onClick={() =>
                              changeQuantity(item.cartItemId, item.quantity + 1)
                            }
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Price Section */}
                    <div className="flex items-end justify-between mt-6 pt-6 border-t-2 border-gray-100">
                      <div>
                        <p className="text-sm text-gray-500 mb-1 font-semibold">
                          Đơn giá
                        </p>
                        <p className="text-xl font-black text-gray-800">
                          {formatCurrency(item.price)}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500 mb-1 font-semibold">
                          Thành tiền
                        </p>
                        <p className="text-3xl font-black bg-linear-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
                          {formatCurrency(item.price * item.quantity)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10">
              <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-7 text-center shadow-xl border border-blue-100 hover:shadow-2xl hover:scale-105 hover:border-blue-200 transition-all duration-300 animate-fade-in">
                <div className="w-16 h-16 bg-linear-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                  <Truck className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>
                <p className="font-black text-gray-900 text-lg mb-1">
                  Giao hàng nhanh
                </p>
                <p className="text-sm text-gray-600 font-semibold">
                  Chỉ 2-3 ngày
                </p>
              </div>
              <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-7 text-center shadow-xl border border-emerald-100 hover:shadow-2xl hover:scale-105 hover:border-emerald-200 transition-all duration-300 animate-fade-in">
                <div className="w-16 h-16 bg-linear-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                  <ShieldCheck
                    className="w-8 h-8 text-white"
                    strokeWidth={2.5}
                  />
                </div>
                <p className="font-black text-gray-900 text-lg mb-1">An toàn</p>
                <p className="text-sm text-gray-600 font-semibold">
                  Bảo mật 100%
                </p>
              </div>
              <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-7 text-center shadow-xl border border-teal-100 hover:shadow-2xl hover:scale-105 hover:border-teal-200 transition-all duration-300 animate-fade-in">
                <div className="w-16 h-16 bg-linear-to-br from-teal-400 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                  <Package className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>
                <p className="font-black text-gray-900 text-lg mb-1">Đổi trả</p>
                <p className="text-sm text-gray-600 font-semibold">
                  Trong 7 ngày
                </p>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 sticky top-8 border-2 border-cyan-200 animate-fade-in">
              <div className="flex items-center gap-3 mb-7 pb-6 border-b-2 border-cyan-100">
                <div className="w-12 h-12 bg-linear-to-br from-cyan-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Tag className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
                <h2 className="text-2xl font-black text-gray-900">
                  Tóm tắt đơn hàng
                </h2>
              </div>

              <div className="space-y-4 mb-7">
                <div className="flex justify-between items-center text-gray-700 p-4 bg-gray-50 rounded-2xl border border-gray-200">
                  <span className="font-bold">Tạm tính</span>
                  <span className="font-black text-lg">
                    {formatCurrency(subtotal)}
                  </span>
                </div>

                <div className="flex justify-between items-center text-gray-700 p-4 bg-gray-50 rounded-2xl border border-gray-200">
                  <span className="font-bold">Phí vận chuyển</span>
                  <span className="font-black text-lg">
                    {formatCurrency(shipping)}
                  </span>
                </div>

                {discount > 0 && (
                  <div className="flex justify-between items-center text-emerald-700 p-4 bg-linear-to-r from-emerald-50 to-teal-50 rounded-2xl border-2 border-emerald-200 shadow-md animate-fade-in">
                    <span className="font-bold flex items-center gap-2">
                      <span className="text-2xl">🎉</span>
                      Giảm giá 10%
                    </span>
                    <span className="font-black text-lg">
                      -{formatCurrency(discount)}
                    </span>
                  </div>
                )}

                {subtotal >= 500000 && (
                  <div className="bg-linear-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl p-5 shadow-lg animate-fade-in">
                    <p className="text-sm font-black text-amber-800 flex items-center gap-2 mb-2">
                      <Gift className="w-5 h-5" />
                      Ưu đãi đặc biệt!
                    </p>
                    <p className="text-xs text-amber-700 font-semibold">
                      Miễn phí vận chuyển cho đơn hàng trên 500k ✨
                    </p>
                  </div>
                )}

                <div className="pt-5 border-t-2 border-cyan-200">
                  <div className="flex justify-between items-center p-5 bg-linear-to-r from-cyan-50 to-teal-50 rounded-2xl border-2 border-cyan-200 shadow-lg">
                    <span className="text-xl font-black text-gray-900">
                      Tổng cộng
                    </span>
                    <span className="text-4xl font-black bg-linear-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
                      {formatCurrency(total)}
                    </span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-linear-to-r from-cyan-600 via-cyan-500 to-teal-600 text-white py-6 rounded-2xl font-black text-xl hover:from-cyan-700 hover:to-teal-700 transition-all shadow-2xl hover:shadow-3xl transform hover:scale-105 active:scale-95 mb-5 relative overflow-hidden group">
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <ShieldCheck className="w-6 h-6" />
                  Thanh toán ngay
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-teal-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>

              <p className="text-center text-sm text-gray-600 flex items-center justify-center gap-2 font-semibold">
                <ShieldCheck className="w-4 h-4 text-cyan-600" />
                Giao dịch được bảo mật SSL 256-bit
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        .animate-slide-in {
          animation: slide-in 0.5s ease-out forwards;
        }
        .animate-scale-in {
          animation: scale-in 0.5s ease-out forwards;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default CartPage;
