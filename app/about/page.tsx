"use client";
import React, { useState } from "react";
import {
  Smartphone,
  Award,
  Users,
  Shield,
  TrendingUp,
  Heart
} from "lucide-react";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

export default function AboutPage() {
  const [activeValue, setActiveValue] = useState(0);

  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Chính Hãng 100%",
      description:
        "Cam kết mọi sản phẩm đều chính hãng, có xuất xứ rõ ràng và được bảo hành đầy đủ."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Chất Lượng Hàng Đầu",
      description:
        "Kiểm tra kỹ lưỡng từng sản phẩm trước khi đến tay khách hàng."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Khách Hàng Là Trung Tâm",
      description:
        "Luôn lắng nghe và đặt lợi ích khách hàng lên hàng đầu trong mọi quyết định."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Đổi Mới Liên Tục",
      description:
        "Cập nhật những công nghệ và sản phẩm mới nhất trên thị trường."
    }
  ];

  const team = [
    { name: "Nguyễn Văn An", role: "Giám Đốc", image: "👨‍💼" },
    { name: "Trần Thị Bình", role: "Trưởng Phòng Kinh Doanh", image: "👩‍💼" },
    { name: "Lê Hoàng Minh", role: "Chuyên Viên Tư Vấn", image: "🧑‍💻" },
    { name: "Phạm Thu Hà", role: "Trưởng Phòng Kỹ Thuật", image: "👩‍🔧" }
  ];

  const stats = [
    { number: "50K+", label: "Khách Hàng Tin Tưởng" },
    { number: "100+", label: "Sản Phẩm Đa Dạng" },
    { number: "15+", label: "Năm Kinh Nghiệm" },
    { number: "99%", label: "Hài Lòng" }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-purple-600/20 to-blue-600/20 animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
          <div className="text-center">
            <div className="inline-block mb-6 animate-bounce">
              <Smartphone className="w-20 h-20 text-purple-400" />
            </div>
            <h1 className="text-6xl font-bold text-white mb-6 bg-clip-text bg-linear-to-r from-purple-400 to-blue-400">
              PhoneHub Store
            </h1>
            <p className="text-2xl text-purple-200 mb-4">
              Đối Tác Tin Cậy Của Bạn Trong Thế Giới Di Động
            </p>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Với hơn 15 năm kinh nghiệm, chúng tôi tự hào là địa chỉ uy tín
              hàng đầu cung cấp điện thoại di động chính hãng với giá tốt nhất
              thị trường.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 hover:bg-white/20 border border-purple-500/30"
            >
              <div className="text-4xl font-bold text-purple-400 mb-2">
                {stat.number}
              </div>
              <div className="text-slate-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Story Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-purple-500/20">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">
            Câu Chuyện Của Chúng Tôi
          </h2>
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Khởi đầu từ một cửa hàng nhỏ vào năm 2009, PhoneHub Store đã không
              ngừng phát triển và trở thành một trong những địa chỉ uy tín nhất
              trong lĩnh vực kinh doanh điện thoại di động tại Việt Nam.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Chúng tôi hiểu rằng điện thoại di động không chỉ là một thiết bị
              công nghệ, mà còn là người bạn đồng hành trong cuộc sống hàng ngày
              của bạn. Vì vậy, chúng tôi cam kết mang đến những sản phẩm chất
              lượng nhất với dịch vụ tốt nhất.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              Đội ngũ nhân viên của chúng tôi được đào tạo bài bản, am hiểu sâu
              sắc về sản phẩm và luôn sẵn sàng tư vấn nhiệt tình để giúp bạn tìm
              được chiếc điện thoại phù hợp nhất.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Giá Trị Cốt Lõi
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              onMouseEnter={() => setActiveValue(index)}
              className={`bg-white/5 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 cursor-pointer ${
                activeValue === index
                  ? "border-purple-500 bg-white/10 transform scale-105"
                  : "border-purple-500/20 hover:border-purple-500/50"
              }`}
            >
              <div
                className={`mb-4 transition-all duration-300 ${
                  activeValue === index
                    ? "text-purple-400 transform scale-110"
                    : "text-purple-300"
                }`}
              >
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {value.title}
              </h3>
              <p className="text-slate-300">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-white mb-4 text-center">
          Đội Ngũ Của Chúng Tôi
        </h2>
        <p className="text-slate-300 text-center mb-12 text-lg">
          Những con người tận tâm đứng sau thành công của PhoneHub
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 text-center border border-purple-500/20 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {member.image}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {member.name}
              </h3>
              <p className="text-purple-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-linear-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-center">
          <Users className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-4">
            Hãy Đến Với Chúng Tôi
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Ghé thăm cửa hàng hoặc liên hệ với chúng tôi để trải nghiệm dịch vụ
            tốt nhất
          </p>
          <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-all duration-300 transform hover:scale-105 shadow-xl">
            Liên Hệ Ngay
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
