"use client";
import { ShoppingCart, Check, Package, ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useProductDetail } from "@/features/home/hooks/useProductDetail";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import { useCart } from "@/features/cart";
import useOrder from "@/features/order/hooks/useOrder";

export default function HomeById() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const id = params.id;
  const { product, loading, error } = useProductDetail(id);
  const [quantity, setQuantity] = React.useState(1);
  const { addToCart } = useCart();
  const { handleCheckout } = useOrder();
  const formatPrice = (price: number) =>
    new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND"
    }).format(price);

  const handleQuantityChange = (type: "increase" | "decrease") => {
    setQuantity((prev) => {
      if (type === "decrease" && prev > 1) return prev - 1;
      if (type === "increase") return prev + 1;
      return prev;
    });
  };

  const handleGoBack = () => {
    router.back();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600">
        {error}
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Product not found
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
      <Header />
      <div className="">
        {/* Nút quay về */}
        <button
          onClick={handleGoBack}
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 font-medium mb-6 group transition duration-200"
        >
          <ArrowLeft className="w-5 h-5 transform group-hover:-translate-x-1 transition duration-200" />
          <span>Quay về</span>
        </button>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
            {/* Phần hình ảnh */}
            <div className="flex items-center justify-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition duration-300"></div>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="relative w-full max-w-md rounded-2xl shadow-xl transform group-hover:scale-105 transition duration-300"
                />
              </div>
            </div>

            {/* Phần thông tin */}
            <div className="flex flex-col justify-center space-y-6">
              {/* Badge trạng thái */}
              <div className="flex items-center space-x-2">
                {product.stockStatus === "IN_STOCK" ? (
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-green-100 text-green-800">
                    <Check className="w-4 h-4 mr-2" />
                    Còn hàng
                  </span>
                ) : (
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-red-100 text-red-800">
                    <Package className="w-4 h-4 mr-2" />
                    Hết hàng
                  </span>
                )}
              </div>

              {/* Tên sản phẩm */}
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {product.name}
              </h1>

              {/* Giá */}
              <div className="border-t border-b border-gray-200 py-6">
                <p className="text-sm text-gray-500 mb-2">Giá bán</p>
                <p className="text-4xl font-bold text-blue-600">
                  {formatPrice(product.price * quantity)}
                </p>
              </div>

              {/* Số lượng */}
              <div className="space-y-3">
                <p className="text-sm font-semibold text-gray-700">Số lượng</p>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => handleQuantityChange("decrease")}
                    className="w-10 h-10 rounded-lg bg-gray-200 hover:bg-gray-300 flex items-center justify-center font-semibold text-gray-700 transition"
                  >
                    -
                  </button>
                  <span className="text-xl font-semibold text-gray-900 w-12 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange("increase")}
                    className="w-10 h-10 rounded-lg bg-gray-200 hover:bg-gray-300 flex items-center justify-center font-semibold text-gray-700 transition"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Nút hành động */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={() => addToCart(product.id, quantity)}
                  className="flex-1 bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition duration-200 flex items-center justify-center space-x-2"
                  disabled={product.stockStatus !== "IN_STOCK"}
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>Thêm vào giỏ hàng</span>
                </button>
                <button
                  onClick={handleCheckout}
                  className="flex-1 bg-linear-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition duration-200"
                  disabled={product.stockStatus !== "IN_STOCK"}
                >
                  Mua ngay
                </button>
              </div>

              {/* Thông tin bổ sung */}
              <div className="mt-6 p-6 bg-gray-50 rounded-xl space-y-2">
                <p className="text-sm text-gray-600 flex items-center">
                  <Check className="w-4 h-4 mr-2 text-green-600" />
                  Miễn phí vận chuyển toàn quốc
                </p>
                <p className="text-sm text-gray-600 flex items-center">
                  <Check className="w-4 h-4 mr-2 text-green-600" />
                  Bảo hành chính hãng 12 tháng
                </p>
                <p className="text-sm text-gray-600 flex items-center">
                  <Check className="w-4 h-4 mr-2 text-green-600" />
                  Đổi trả trong 7 ngày
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
