import React from "react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-linear-to-r from-blue-500 to-purple-500 p-2 rounded-lg">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-2xl font-black text-white">PhoneStore</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Cửa hàng điện thoại uy tín hàng đầu Việt Nam. Chuyên cung cấp
              smartphone chính hãng, giá tốt nhất thị trường.
            </p>
            <div className="flex space-x-3 pt-2">
              <a
                href="#"
                className="bg-gray-800 hover:bg-blue-600 p-3 rounded-lg transition-all transform hover:scale-110 hover:shadow-lg"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-blue-600 p-3 rounded-lg transition-all transform hover:scale-110 hover:shadow-lg"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-pink-600 p-3 rounded-lg transition-all transform hover:scale-110 hover:shadow-lg"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-red-600 p-3 rounded-lg transition-all transform hover:scale-110 hover:shadow-lg"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
              Danh Mục
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-linear-to-r from-blue-500 to-purple-500 rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              {["iPhone", "Samsung", "Xiaomi", "OPPO", "Vivo", "Realme"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={`/products?brand=${item}`}
                      className="hover:text-blue-400 transition-colors flex items-center group"
                    >
                      <span className="mr-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
                        →
                      </span>
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
              Hỗ Trợ Khách Hàng
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-linear-to-r from-blue-500 to-purple-500 rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              {[
                { text: "Chính sách bảo hành", href: "/warranty" },
                { text: "Chính sách đổi trả", href: "/return" },
                { text: "Hướng dẫn mua hàng", href: "/guide" },
                { text: "Phương thức thanh toán", href: "/payment" },
                { text: "Giao hàng & Vận chuyển", href: "/shipping" },
                { text: "Câu hỏi thường gặp", href: "/faq" }
              ].map((item) => (
                <li key={item.text}>
                  <Link
                    href={item.href}
                    className="hover:text-blue-400 transition-colors flex items-center group"
                  >
                    <span className="mr-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </span>
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
              Liên Hệ
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-linear-to-r from-blue-500 to-purple-500 rounded-full"></span>
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <span className="text-blue-500 mt-1 mr-3 group-hover:scale-110 transition-transform">
                  📍
                </span>
                <div>
                  <p className="font-semibold text-white mb-1">Địa chỉ</p>
                  <p className="text-sm text-gray-400">
                    123 Đường ABC, Quận 1, TP.HCM
                  </p>
                </div>
              </li>
              <li className="flex items-start group">
                <span className="text-blue-500 mt-1 mr-3 group-hover:scale-110 transition-transform">
                  📞
                </span>
                <div>
                  <p className="font-semibold text-white mb-1">Hotline</p>
                  <a
                    href="tel:1900xxxx"
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    1900.xxxx (miễn phí)
                  </a>
                </div>
              </li>
              <li className="flex items-start group">
                <span className="text-blue-500 mt-1 mr-3 group-hover:scale-110 transition-transform">
                  ✉️
                </span>
                <div>
                  <p className="font-semibold text-white mb-1">Email</p>
                  <a
                    href="mailto:support@phonestore.vn"
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    support@phonestore.vn
                  </a>
                </div>
              </li>
              <li className="flex items-start group">
                <span className="text-blue-500 mt-1 mr-3 group-hover:scale-110 transition-transform">
                  ⏰
                </span>
                <div>
                  <p className="font-semibold text-white mb-1">Giờ làm việc</p>
                  <p className="text-sm text-gray-400">
                    8:00 - 22:00 (Tất cả các ngày)
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <h4 className="text-white font-semibold text-center mb-6">
            Phương Thức Thanh Toán
          </h4>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {[
              "Visa",
              "Mastercard",
              "JCB",
              "Momo",
              "ZaloPay",
              "VNPay",
              "COD"
            ].map((method) => (
              <div
                key={method}
                className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg transition-all transform hover:scale-105 shadow-lg"
              >
                <span className="font-semibold text-white">{method}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-wrap justify-center items-center gap-6">
            <div className="text-center">
              <div className="bg-gray-800 p-4 rounded-lg inline-block mb-2">
                <span className="text-3xl">✅</span>
              </div>
              <p className="text-xs text-gray-400">Chính hãng 100%</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-800 p-4 rounded-lg inline-block mb-2">
                <span className="text-3xl">🛡️</span>
              </div>
              <p className="text-xs text-gray-400">Bảo mật thông tin</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-800 p-4 rounded-lg inline-block mb-2">
                <span className="text-3xl">🚚</span>
              </div>
              <p className="text-xs text-gray-400">Giao hàng nhanh</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-800 p-4 rounded-lg inline-block mb-2">
                <span className="text-3xl">💯</span>
              </div>
              <p className="text-xs text-gray-400">Uy tín hàng đầu</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black bg-opacity-50 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear}{" "}
              <span className="text-white font-semibold">PhoneStore</span>. Bản
              quyền thuộc về PhoneStore Việt Nam.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link
                href="/terms"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                Điều khoản sử dụng
              </Link>
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                Chính sách bảo mật
              </Link>
              <Link
                href="/sitemap"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                Sơ đồ trang
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 bg-linear-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all transform hover:scale-110 z-50 group"
        aria-label="Back to top"
      >
        <svg
          className="w-6 h-6 group-hover:-translate-y-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </footer>
  );
}
