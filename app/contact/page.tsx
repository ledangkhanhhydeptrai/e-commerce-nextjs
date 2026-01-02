"use client";
import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Facebook,
  Instagram,
  Globe
} from "lucide-react";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Điện Thoại",
      details: ["Hotline: 1900-xxxx", "Tư vấn: 0901-xxx-xxx"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["support@phonehub.vn", "sales@phonehub.vn"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Địa Chỉ",
      details: ["123 Nguyễn Huệ, Q.1", "TP. Hồ Chí Minh"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Giờ Làm Việc",
      details: ["T2-T7: 8:00 - 21:00", "CN: 9:00 - 20:00"],
      color: "from-green-500 to-emerald-500"
    }
  ];

  const socialLinks = [
    {
      icon: <Facebook className="w-6 h-6" />,
      name: "Facebook",
      color: "hover:bg-blue-600"
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      name: "Instagram",
      color: "hover:bg-pink-600"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      name: "Zalo",
      color: "hover:bg-blue-500"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      name: "Website",
      color: "hover:bg-purple-600"
    }
  ];

  const stores = [
    {
      name: "Chi Nhánh 1 - Quận 1",
      address: "123 Nguyễn Huệ, Phường Bến Nghé, Quận 1",
      phone: "0901-xxx-xxx",
      hours: "8:00 - 21:00 (T2-T7)"
    },
    {
      name: "Chi Nhánh 2 - Quận 3",
      address: "456 Võ Văn Tần, Phường 5, Quận 3",
      phone: "0902-xxx-xxx",
      hours: "8:00 - 21:00 (T2-T7)"
    },
    {
      name: "Chi Nhánh 3 - Thủ Đức",
      address: "789 Võ Văn Ngân, Phường Linh Chiểu, TP. Thủ Đức",
      phone: "0903-xxx-xxx",
      hours: "8:00 - 21:00 (T2-T7)"
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      <div className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-linear-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <h1 className="text-6xl font-bold text-white mb-6 bg-clip-text bg-linear-to-r from-purple-400 to-blue-400">
            Liên Hệ Với Chúng Tôi
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn. Hãy để lại thông
            tin hoặc ghé thăm cửa hàng!
          </p>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div
                className={`w-14 h-14 rounded-xl bg-linear-to-br ${info.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <div className="text-white">{info.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {info.title}
              </h3>
              {info.details.map((detail, idx) => (
                <p key={idx} className="text-slate-300">
                  {detail}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content - Form & Map */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/20">
            <h2 className="text-3xl font-bold text-white mb-6">Gửi Tin Nhắn</h2>

            {submitted && (
              <div className="mb-6 bg-green-500/20 border border-green-500 rounded-xl p-4 text-green-300 animate-pulse">
                ✓ Cảm ơn bạn! Chúng tôi sẽ phản hồi trong thời gian sớm nhất.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-slate-300 mb-2">Họ và Tên *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 border border-purple-500/30 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                  placeholder="Nguyễn Văn A"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/10 border border-purple-500/30 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 mb-2">
                    Số Điện Thoại
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-purple-500/30 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                    placeholder="0901234567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-slate-300 mb-2">
                  Chủ Đề
                </label>

                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-purple-500/30 rounded-xl px-4 py-3 text-white focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                >
                  <option value="" className="bg-slate-800">
                    Chọn chủ đề
                  </option>
                  <option value="product" className="bg-slate-800">
                    Tư vấn sản phẩm
                  </option>
                  <option value="warranty" className="bg-slate-800">
                    Bảo hành
                  </option>
                  <option value="complaint" className="bg-slate-800">
                    Khiếu nại
                  </option>
                  <option value="other" className="bg-slate-800">
                    Khác
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-slate-300 mb-2">Nội Dung *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-white/10 border border-purple-500/30 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all resize-none"
                  placeholder="Nhập nội dung bạn muốn gửi..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-linear-to-r from-purple-600 to-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-xl"
              >
                <Send className="w-5 h-5" />
                Gửi Tin Nhắn
              </button>
            </form>
          </div>

          {/* Map & Social */}
          <div className="space-y-8">
            {/* Map */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Vị Trí Cửa Hàng
              </h2>
              <div className="aspect-video bg-linear-to-br from-purple-500/20 to-blue-500/20 rounded-xl flex items-center justify-center border border-purple-500/30">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                  <p className="text-slate-300">Bản đồ Google Maps</p>
                  <p className="text-sm text-slate-400 mt-2">
                    123 Nguyễn Huệ, Quận 1, TP.HCM
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/20">
              <h2 className="text-2xl font-bold text-white mb-6">
                Kết Nối Với Chúng Tôi
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <button
                    key={index}
                    className={`bg-white/10 ${social.color} border border-purple-500/30 rounded-xl p-4 text-white transition-all duration-300 transform hover:scale-105 flex items-center gap-3`}
                  >
                    {social.icon}
                    <span className="font-semibold">{social.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Store Locations */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Hệ Thống Cửa Hàng
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {stores.map((store, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-purple-500 to-blue-500 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {store.name}
                  </h3>
                </div>
              </div>
              <div className="space-y-2 text-slate-300">
                <p className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                  {store.address}
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-purple-400" />
                  {store.phone}
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-purple-400" />
                  {store.hours}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
