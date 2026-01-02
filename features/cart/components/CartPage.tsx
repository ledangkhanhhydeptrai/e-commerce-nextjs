"use client";
import React from "react";
import {
  ShoppingCart,
  ArrowLeft,
  Package,
  Truck,
  ShieldCheck
} from "lucide-react";
import { useCart } from "../hooks/useCart";
import Image from "next/image";
import Button from "@/components/ui/Button/Button";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

const CartPage: React.FC = () => {
  const { cart, loading, error } = useCart();

  if (loading || !cart) {
    return (
      <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-600 border-t-transparent mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Đang tải giỏ hàng...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-xl p-10 max-w-md text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">⚠️</span>
          </div>
          <p className="text-red-600 font-medium">{error}</p>
        </div>
      </div>
    );
  }

  const items = cart.items ?? [];

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 0 ? 30000 : 0;
  const total = subtotal + shipping;

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND"
    }).format(amount);

  if (!cart || items.length === 0) {
    return (
      <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-12 text-center max-w-md w-full border border-gray-100">
          <div className="w-24 h-24 bg-linear-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingCart className="w-12 h-12 text-blue-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Giỏ hàng trống
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Bạn chưa có sản phẩm nào trong giỏ hàng
          </p>
          <button className="bg-linear-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Khám phá sản phẩm
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-purple-50">
      <Header/>
      <div className="">
        {/* Header */}
        <div className="mt-10">
          <Button
            variant="primary"
            fullWidth
            loading={loading}
            className="group flex items-center text-gray-600 hover:text-blue-600 mb-6 transition-all"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Tiếp tục mua sắm</span>
          </Button>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-linear-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <ShoppingCart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">
                Giỏ hàng của bạn
              </h1>
              <p className="text-gray-600 mt-1">
                {items.length} sản phẩm đang chờ thanh toán
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.productId}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all group"
              >
                <div className="flex flex-col sm:flex-row gap-6 p-6">
                  <div className="relative shrink-0 overflow-hidden rounded-xl bg-gray-100">
                    <Image
                      src={item.image}
                      alt={item.productName}
                      width={300}
                      height={300}
                      className="w-full sm:w-40 h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full shadow-md">
                      <span className="text-sm font-semibold text-gray-700">
                        x{item.quantity}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {item.productName}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                        <Package className="w-4 h-4" />
                        <span>Số lượng: {item.quantity}</span>
                      </div>
                    </div>

                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Đơn giá</p>
                        <p className="text-lg font-semibold text-gray-700">
                          {formatCurrency(item.price)}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500 mb-1">Thành tiền</p>
                        <p className="text-2xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          {formatCurrency(item.price * item.quantity)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="bg-white rounded-xl p-4 text-center shadow-md border border-gray-100">
                <Truck className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                <p className="font-semibold text-gray-900 text-sm">
                  Giao hàng nhanh
                </p>
                <p className="text-xs text-gray-600 mt-1">2-3 ngày</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-md border border-gray-100">
                <ShieldCheck className="w-8 h-8 mx-auto mb-2 text-green-600" />
                <p className="font-semibold text-gray-900 text-sm">
                  Thanh toán an toàn
                </p>
                <p className="text-xs text-gray-600 mt-1">Bảo mật 100%</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-md border border-gray-100">
                <Package className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                <p className="font-semibold text-gray-900 text-sm">
                  Đổi trả dễ dàng
                </p>
                <p className="text-xs text-gray-600 mt-1">Trong 7 ngày</p>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-8 sticky top-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-gray-100">
                Tóm tắt đơn hàng
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-700">
                  <span className="font-medium">Tạm tính</span>
                  <span className="font-semibold">
                    {formatCurrency(subtotal)}
                  </span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span className="font-medium">Phí vận chuyển</span>
                  <span className="font-semibold">
                    {formatCurrency(shipping)}
                  </span>
                </div>

                {subtotal >= cart.totalPrice && (
                  <div className="bg-linear-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4">
                    <p className="text-sm font-semibold text-green-800 flex items-center gap-2">
                      <span className="text-lg">🎉</span>
                      Miễn phí vận chuyển!
                    </p>
                  </div>
                )}

                <div className="pt-4 border-t-2 border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-gray-900">
                      Tổng cộng
                    </span>
                    <span className="text-2xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {formatCurrency(total)}
                    </span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-linear-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 mb-3">
                Tiến hành thanh toán
              </button>

              <p className="text-center text-sm text-gray-500 mt-4">
                Bạn sẽ được chuyển đến trang thanh toán
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default CartPage;
