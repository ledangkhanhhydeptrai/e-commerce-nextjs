"use client";
import Link from "next/link";
import { useHome } from "../hooks/useHome";
import Image from "next/image";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

export default function Homepage() {
  const { featuredPhones, loading, error } = useHome();

  const brands = [
    {
      name: "Apple",
      icon: "🍎",
      count: 45,
      gradient: "from-gray-800 to-gray-600"
    },
    {
      name: "Samsung",
      icon: "📱",
      count: 67,
      gradient: "from-blue-600 to-blue-400"
    },
    {
      name: "Xiaomi",
      icon: "🔷",
      count: 89,
      gradient: "from-orange-600 to-orange-400"
    },
    {
      name: "OPPO",
      icon: "⭕",
      count: 54,
      gradient: "from-green-600 to-green-400"
    },
    {
      name: "Vivo",
      icon: "💙",
      count: 43,
      gradient: "from-blue-500 to-purple-500"
    },
    {
      name: "Realme",
      icon: "⚡",
      count: 38,
      gradient: "from-yellow-500 to-yellow-400"
    }
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600 mb-4" />
          <p className="text-gray-600 text-lg font-medium">Đang tải...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-linear-to-br from-red-50 to-white flex items-center justify-center p-10">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md">
          <div className="text-6xl mb-4 text-center">⚠️</div>
          <p className="text-red-500 text-center font-semibold">
            {error}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-purple-50">
      <Header />
      <section className="relative overflow-hidden bg-linear-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="absolute inset-0 bg-black opacity-10" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />

        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-32">
          <div className="text-center text-white">
            <div className="text-black inline-block mb-4 px-6 py-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full text-sm font-semibold">
              ✨ Chào mừng đến với cửa hàng của chúng tôi
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Khám Phá Smartphone
              <br />
              <span className="bg-clip-text text-transparent bg-linear-to-r from-yellow-300 to-pink-300">
                Công Nghệ Mới Nhất
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Giá tốt nhất thị trường - Bảo hành chính hãng - Giao hàng nhanh
              toàn quốc
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transform hover:scale-105 transition-all shadow-xl"
              >
                Mua ngay 🛒
              </Link>
              <button className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all">
                Tìm hiểu thêm →
              </button>
            </div>
          </div>
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z"
              fill="rgb(249, 250, 251)"
            />
          </svg>
        </div>
      </section>

      {/* Brands Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">
            Thương Hiệu Hàng Đầu
          </h2>
          <p className="text-gray-600 text-lg">
            Đa dạng lựa chọn từ các thương hiệu uy tín
          </p>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {brands.map(brand =>
            <Link
              key={brand.name}
              href={`/products?brand=${brand.name}`}
              className="group relative bg-white rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border-2 border-transparent hover:border-blue-200 overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-linear-to-br ${brand.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}
              />
              <div className="relative">
                <div className="text-5xl mb-3 transform group-hover:scale-110 transition-transform">
                  {brand.icon}
                </div>
                <p className="font-bold text-gray-800 mb-1">
                  {brand.name}
                </p>
                <p className="text-sm text-gray-500 font-medium">
                  {brand.count} sản phẩm
                </p>
              </div>
            </Link>
          )}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-2">
              Sản Phẩm Nổi Bật
            </h2>
            <p className="text-gray-600">Những lựa chọn hàng đầu cho bạn</p>
          </div>
          <Link
            href="/products"
            className="hidden md:flex items-center gap-2 text-blue-600 hover:text-blue-700 font-bold text-lg group"
          >
            Xem tất cả
            <span className="transform group-hover:translate-x-2 transition-transform">
              →
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredPhones.map(phone =>
            <div
              key={phone.id}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border-2 border-gray-100"
            >
              {/* IMAGE */}
              <div className="relative w-full h-64 bg-linear-to-br from-gray-50 to-gray-100 overflow-hidden">
                <Image
                  src={phone.image}
                  alt={phone.name}
                  fill
                  className="object-contain p-6 group-hover:scale-110 transition-transform duration-500"
                />

                {/* BADGE */}
                <span
                  className={`absolute top-4 left-4 px-4 py-2 rounded-full text-xs font-bold text-white shadow-lg backdrop-blur-sm
                    ${phone.stockStatus === "IN_STOCK"
                      ? "bg-green-500"
                      : phone.stockStatus === "LOW_STOCK"
                        ? "bg-yellow-500"
                        : "bg-gray-500"}`}
                >
                  {phone.stockStatus === "IN_STOCK"
                    ? "✓ Còn hàng"
                    : phone.stockStatus === "LOW_STOCK"
                      ? "⚡ Sắp hết"
                      : "✕ Hết hàng"}
                </span>

                <button className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 transform">
                  <span className="text-xl">❤️</span>
                </button>

                {/* Discount badge (example) */}
                <div className="absolute bottom-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  -15%
                </div>
              </div>

              {/* INFO */}
              <div className="p-6">
                <h3 className="font-bold text-gray-800 mb-3 line-clamp-2 text-lg group-hover:text-blue-600 transition-colors">
                  {phone.name}
                </h3>

                <div className="mb-4">
                  <span className="text-2xl font-black text-red-600">
                    {phone.price.toLocaleString("vi-VN")}₫
                  </span>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                  <span className="text-sm text-gray-500 ml-1">(128)</span>
                </div>

                <button
                  disabled={phone.stockStatus === "OUT_OF_STOCK"}
                  className={`w-full py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-md
                    ${phone.stockStatus === "OUT_OF_STOCK"
                      ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                      : "bg-linear-to-r from-blue-600 to-purple-600 text-white hover:shadow-xl"}`}
                >
                  {phone.stockStatus === "OUT_OF_STOCK"
                    ? "Hết hàng"
                    : "Thêm vào giỏ 🛒"}
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="text-center mt-10 md:hidden">
          <Link
            href="/products"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors"
          >
            Xem tất cả sản phẩm →
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              icon: "🚚",
              title: "Giao hàng nhanh",
              desc: "Miễn phí toàn quốc"
            },
            {
              icon: "💯",
              title: "Chính hãng 100%",
              desc: "Bảo hành chính hãng"
            },
            { icon: "🔄", title: "Đổi trả dễ dàng", desc: "Trong vòng 7 ngày" },
            { icon: "💳", title: "Thanh toán", desc: "Đa dạng hình thức" }
          ].map((feature, i) =>
            <div
              key={i}
              className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-all transform hover:-translate-y-1 border-2 border-gray-100"
            >
              <div className="text-5xl mb-3">
                {feature.icon}
              </div>
              <h4 className="font-bold text-gray-800 mb-2">
                {feature.title}
              </h4>
              <p className="text-gray-600 text-sm">
                {feature.desc}
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
