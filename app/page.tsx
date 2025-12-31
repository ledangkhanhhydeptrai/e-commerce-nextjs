"use client";

import React from "react";
import { Zap, Shield, Truck, Star, ChevronRight } from "lucide-react";
import Image from "next/image";
import Button from "@/components/ui/Button/Button";
import Header from "@/components/layouts/Header";

export default function PhoneStoreHomepage() {
  const featuredPhones = [
    {
      id: 1,
      name: "Galaxy Ultra X",
      price: "25.990.000₫",
      image:
        "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600&h=800&fit=crop",
      tag: "Mới nhất"
    },
    {
      id: 2,
      name: "iPhone Pro Max",
      price: "32.990.000₫",
      image:
        "https://images.unsplash.com/photo-1592286927505-b0fb86d485fc?w=600&h=800&fit=crop",
      tag: "Hot"
    },
    {
      id: 3,
      name: "Pixel Premium",
      price: "19.990.000₫",
      image:
        "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&h=800&fit=crop",
      tag: "Giảm giá"
    }
  ];

  const features = [
    { icon: Zap, title: "Hiệu năng cao", desc: "Chip xử lý mạnh mẽ" },
    { icon: Shield, title: "Bảo hành 2 năm", desc: "Chính hãng 100%" },
    { icon: Truck, title: "Miễn phí giao hàng", desc: "Toàn quốc" },
    { icon: Star, title: "Ưu đãi lớn", desc: "Giảm đến 30%" }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* NAVBAR */}
      <Header />

      {/* HERO */}
      <section className="pt-32 pb-24 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Trải nghiệm công nghệ
          <span className="block text-blue-400">đỉnh cao</span>
        </h1>
        <p className="text-slate-400 max-w-xl mx-auto mb-10">
          Điện thoại chính hãng, bảo hành dài hạn, giá tốt nhất thị trường.
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-8 py-4 bg-blue-600 rounded-full font-semibold hover:bg-blue-500 transition">
            Khám phá ngay
          </button>
          <button className="px-8 py-4 border border-white/20 rounded-full hover:bg-white/5 transition">
            Xem ưu đãi
          </button>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="max-w-6xl mx-auto px-6 pb-24 grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredPhones.map(phone =>
          <div
            key={phone.id}
            className="bg-slate-900 rounded-2xl p-5 border border-white/10 hover:border-blue-500/40 transition"
          >
            <div className="relative mb-4 overflow-hidden rounded-xl">
              <span className="absolute top-3 left-3 bg-blue-600 text-xs px-3 py-1 rounded-full">
                {phone.tag}
              </span>
              <Image
                src={phone.image}
                alt={phone.name}
                className="w-full h-full object-cover transition group-hover:scale-105"
                fill
              />
            </div>
            <h3 className="font-semibold text-lg mb-2">
              {phone.name}
            </h3>
            <div className="flex items-center justify-between">
              <span className="text-blue-400 font-bold text-xl">
                {phone.price}
              </span>
              <Button
                loading={false}
                fullWidth
                variant="primary"
                className="p-3 bg-blue-600 rounded-full hover:bg-blue-500 transition"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        )}
      </section>

      {/* FEATURES */}
      <section className="bg-slate-900/40 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Tại sao chọn chúng tôi?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {features.map((f, i) =>
              <div
                key={i}
                className="bg-slate-900 p-6 rounded-2xl border border-white/10 hover:border-blue-500/40 transition"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <f.icon />
                </div>
                <h3 className="font-semibold mb-2">
                  {f.title}
                </h3>
                <p className="text-slate-400 text-sm">
                  {f.desc}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto bg-blue-600 rounded-3xl p-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Nhận mã giảm giá 15%</h2>
          <p className="text-blue-100 mb-8">
            Đăng ký để nhận ưu đãi độc quyền từ PhoneHub
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              className="flex-1 px-5 py-3 rounded-full text-slate-900"
              placeholder="Email của bạn"
            />
            <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-slate-100 transition">
              Đăng ký
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 text-center text-slate-400">
        © 2025 PhoneHub. All rights reserved.
      </footer>
    </div>
  );
}
