"use client";
import React, { useState } from "react";
import {
  Search,
  Calendar,
  User,
  Tag,
  TrendingUp,
  Clock,
  ArrowRight,
  Eye
} from "lucide-react";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", name: "Tất Cả", count: 12 },
    { id: "review", name: "Đánh Giá", count: 5 },
    { id: "tips", name: "Thủ Thuật", count: 4 },
    { id: "news", name: "Tin Tức", count: 3 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "iPhone 16 Pro Max: Đánh giá chi tiết sau 1 tháng sử dụng",
      excerpt:
        "Sau một tháng trải nghiệm iPhone 16 Pro Max, đây là những ưu điểm và nhược điểm đáng chú ý nhất mà bạn cần biết trước khi quyết định mua...",
      category: "review",
      author: "Nguyễn Văn An",
      date: "02/01/2026",
      readTime: "8 phút",
      views: "2.5K",
      image: "📱",
      featured: true
    },
    {
      id: 2,
      title: "10 mẹo tối ưu pin cho điện thoại Android",
      excerpt:
        "Những thủ thuật đơn giản nhưng hiệu quả giúp bạn kéo dài thời lượng pin cho điện thoại Android của mình lên gấp đôi...",
      category: "tips",
      author: "Trần Thị Bình",
      date: "01/01/2026",
      readTime: "5 phút",
      views: "3.1K",
      image: "🔋",
      featured: true
    },
    {
      id: 3,
      title: "Samsung Galaxy S24 Ultra vs iPhone 15 Pro Max",
      excerpt:
        "So sánh chi tiết giữa hai flagship hàng đầu của Samsung và Apple để giúp bạn lựa chọn thiết bị phù hợp nhất...",
      category: "review",
      author: "Lê Hoàng Minh",
      date: "31/12/2025",
      readTime: "10 phút",
      views: "4.2K",
      image: "⚔️",
      featured: false
    },
    {
      id: 4,
      title: "Tin tức: Google Pixel 9 sắp ra mắt tại Việt Nam",
      excerpt:
        "Google chính thức xác nhận sẽ đưa dòng Pixel 9 về Việt Nam trong quý đầu năm 2026 với nhiều ưu đãi hấp dẫn...",
      category: "news",
      author: "Phạm Thu Hà",
      date: "30/12/2025",
      readTime: "4 phút",
      views: "1.8K",
      image: "📢",
      featured: false
    },
    {
      id: 5,
      title: "Cách chụp ảnh đẹp hơn với camera điện thoại",
      excerpt:
        "Hướng dẫn chi tiết các kỹ thuật chụp ảnh chuyên nghiệp ngay trên điện thoại của bạn, không cần thiết bị đắt tiền...",
      category: "tips",
      author: "Nguyễn Văn An",
      date: "29/12/2025",
      readTime: "7 phút",
      views: "2.9K",
      image: "📸",
      featured: false
    },
    {
      id: 6,
      title: "Top 5 điện thoại gaming tốt nhất 2026",
      excerpt:
        "Danh sách những chiếc điện thoại mạnh mẽ nhất dành cho game thủ với hiệu năng vượt trội và giá cả hợp lý...",
      category: "review",
      author: "Trần Thị Bình",
      date: "28/12/2025",
      readTime: "6 phút",
      views: "3.5K",
      image: "🎮",
      featured: false
    }
  ];

  const popularPosts = [
    { title: "Cách nhận biết iPhone chính hãng", views: "5.2K" },
    { title: "So sánh Snapdragon vs MediaTek", views: "4.8K" },
    { title: "Bảo vệ màn hình điện thoại hiệu quả", views: "4.1K" },
    { title: "Chọn tai nghe phù hợp với điện thoại", views: "3.7K" }
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter((post) => post.featured);

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      <div className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-linear-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <h1 className="text-6xl font-bold text-white mb-6 bg-clip-text bg-linear-to-r from-purple-400 to-blue-400">
            Blog & Tin Tức
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
            Cập nhật những thông tin mới nhất về công nghệ di động, đánh giá sản
            phẩm và mẹo hay
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm bài viết..."
              className="w-full bg-white/10 backdrop-blur-lg border border-purple-500/30 rounded-full pl-12 pr-4 py-4 text-white placeholder-slate-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
            />
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-4 justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-linear-to-r from-purple-600 to-blue-600 text-white shadow-xl scale-105"
                  : "bg-white/10 backdrop-blur-lg text-slate-300 hover:bg-white/20 border border-purple-500/30"
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Featured Posts */}
            {selectedCategory === "all" && searchQuery === "" && (
              <div className="mb-12">
                <div className="flex items-center gap-2 mb-6">
                  <TrendingUp className="w-6 h-6 text-purple-400" />
                  <h2 className="text-3xl font-bold text-white">
                    Bài Viết Nổi Bật
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {featuredPosts.map((post) => (
                    <div
                      key={post.id}
                      className="group bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-purple-500/30 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105"
                    >
                      <div className="aspect-video bg-linear-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center text-6xl border-b border-purple-500/20">
                        {post.image}
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-sm text-slate-400 mb-3">
                          <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full">
                            {
                              categories.find((c) => c.id === post.category)
                                ?.name
                            }
                          </span>
                          <span className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            {post.views}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-slate-300 text-sm mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-sm text-slate-400">
                          <div className="flex items-center gap-4">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {post.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {post.readTime}
                            </span>
                          </div>
                          <ArrowRight className="w-5 h-5 text-purple-400 group-hover:translate-x-2 transition-transform" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* All Posts */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                {searchQuery
                  ? `Kết quả tìm kiếm: "${searchQuery}"`
                  : "Tất Cả Bài Viết"}
              </h2>
              <div className="space-y-6">
                {filteredPosts.map((post) => (
                  <div
                    key={post.id}
                    className="group bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-[1.02]"
                  >
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-48 aspect-video md:aspect-square bg-linear-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center text-5xl shrink-0">
                        {post.image}
                      </div>
                      <div className="p-6 flex-1">
                        <div className="flex items-center gap-4 text-sm text-slate-400 mb-3">
                          <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full">
                            {
                              categories.find((c) => c.id === post.category)
                                ?.name
                            }
                          </span>
                          <span className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            {post.views}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-slate-300 mb-4">{post.excerpt}</p>
                        <div className="flex items-center justify-between text-sm text-slate-400">
                          <div className="flex items-center gap-4">
                            <span className="flex items-center gap-1">
                              <User className="w-4 h-4" />
                              {post.author}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {post.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {post.readTime}
                            </span>
                          </div>
                          <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                            Đọc thêm
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                  <Search className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                  <p className="text-slate-400 text-lg">
                    Không tìm thấy bài viết nào
                  </p>
                </div>
              )}
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-2 mt-12">
              {[1, 2, 3, 4].map((page) => (
                <button
                  key={page}
                  className={`w-12 h-12 rounded-full font-semibold transition-all duration-300 ${
                    page === 1
                      ? "bg-linear-to-r from-purple-600 to-blue-600 text-white"
                      : "bg-white/10 backdrop-blur-lg text-slate-300 hover:bg-white/20 border border-purple-500/30"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Popular Posts */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-purple-400" />
                Bài Viết Phổ Biến
              </h3>
              <div className="space-y-4">
                {popularPosts.map((post, index) => (
                  <div
                    key={index}
                    className="group flex items-start gap-4 p-3 rounded-xl hover:bg-white/10 transition-all duration-300 cursor-pointer"
                  >
                    <div className="w-8 h-8 rounded-full bg-linear-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-1 group-hover:text-purple-400 transition-colors">
                        {post.title}
                      </h4>
                      <p className="text-sm text-slate-400 flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {post.views} lượt xem
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Tag className="w-6 h-6 text-purple-400" />
                Thẻ Phổ Biến
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "iPhone",
                  "Samsung",
                  "Android",
                  "iOS",
                  "Camera",
                  "Pin",
                  "Gaming",
                  "5G",
                  "Đánh giá",
                  "Mẹo hay"
                ].map((tag, index) => (
                  <button
                    key={index}
                    className="px-4 py-2 bg-white/10 hover:bg-purple-500/30 border border-purple-500/30 hover:border-purple-500 rounded-full text-sm text-slate-300 hover:text-white transition-all duration-300"
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-linear-to-br from-purple-600 to-blue-600 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-white mb-3">
                Đăng Ký Nhận Tin
              </h3>
              <p className="text-white/90 mb-4">
                Nhận thông tin mới nhất về công nghệ và ưu đãi đặc biệt
              </p>
              <input
                type="email"
                placeholder="Email của bạn"
                className="w-full bg-white/20 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/60 mb-3 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="w-full bg-white text-purple-600 py-3 rounded-xl font-bold hover:bg-slate-100 transition-all duration-300 transform hover:scale-105">
                Đăng Ký Ngay
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
