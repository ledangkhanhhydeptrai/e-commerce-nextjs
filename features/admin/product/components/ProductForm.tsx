import React from "react";
import {
  Package,
  DollarSign,
  Box,
  Upload,
  X,
  Check,
  AlertCircle,
  Loader2,
  Camera,
  FileImage,
  ArrowLeft,
  Save
} from "lucide-react";
import { useCreateProduct } from "../hooks/useProduct";
import Button from "@/components/ui/Button/Button";
import Image from "next/image";
import { ProductFormData } from "../services/ProductServices";

export default function ProductForm() {
  const [formData, setFormData] = React.useState<ProductFormData>({
    name: "",
    price: 0,
    quantity: 0,
    file: null
  });

  const [preview, setPreview] = React.useState<string | null>(null);
  const [isDragging, setIsDragging] = React.useState<boolean>(false);
  const [success, setSuccess] = React.useState<boolean>(false);
  const [focusedField, setFocusedField] = React.useState<string | null>(null);
  const { createProduct, loading, error } = useCreateProduct();
  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "name" ? value : Number(value)
    }));
    
  };

  // Handle file upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  // Process file
  const processFile = (file: File) => {
    if (!file.type.startsWith("image/")) {
      alert("Vui lòng chọn file hình ảnh");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("Kích thước file không được vượt quá 5MB");
      return;
    }

    setFormData((prev) => ({ ...prev, file }));

    // Create preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
    
  };

  // Handle drag and drop
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file) {
      processFile(file);
    }
  };

  // Remove image
  const removeImage = () => {
    setFormData((prev) => ({ ...prev, file: null }));
    setPreview(null);
  };

  // Format price display
  const formatPriceDisplay = (value: number) => {
    return new Intl.NumberFormat("vi-VN").format(Number(value));
  };

  // Handle submit
  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    setSuccess(false);

    if (!formData.name.trim()) {
      return;
    }
    if (!formData.price || Number(formData.price) <= 0) {
      return;
    }
    if (!formData.quantity || Number(formData.quantity) <= 0) {
      return;
    }
    if (!formData.file) {
      return;
    }

    createProduct({
      name: formData.name,
      price: Number(formData.price),
      quantity: Number(formData.quantity),
      file: formData.file
    });

    setSuccess(true);
  };

  return (
    <div className="bg-linear-to-br from-slate-50 via-purple-50 to-pink-50">
      {/* Fixed Header */}
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-sm">
        <div className="">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                fullWidth
                loading={loading}
                variant="primary"
                className="p-2 hover:bg-gray-100 rounded-xl transition-all"
              >
                <ArrowLeft className="w-6 h-6 text-gray-600" />
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                  <div className="w-52 h-10 bg-linear-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-300">
                    <Package className="w-6 h-6 text-white" />
                  </div>
                  Thêm sản phẩm mới
                </h1>
                <p className="text-sm text-gray-600 mt-1">
                  Điền thông tin sản phẩm để thêm vào kho
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setFormData({ name: "", price: 0, quantity: 0, file: null });
                  setPreview(null);
                  
                }}
                className="px-6 py-2.5 border-2 border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold transition-all"
                disabled={loading}
              >
                Đặt lại
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                disabled={loading}
                className={`px-8 py-2.5 rounded-xl font-semibold text-white transition-all duration-300 flex items-center gap-2 ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg shadow-purple-300 hover:shadow-xl hover:-translate-y-0.5"
                }`}
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Đang xử lý...
                  </>
                ) : (
                  <>
                    <Save className="w-5 h-5" />
                    Lưu sản phẩm
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="">
        {/* Success Message */}
        {success && (
          <div className="mb-6 bg-green-50 border-2 border-green-200 rounded-2xl p-4 flex items-center gap-3 animate-slideDown">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center shrink-0">
              <Check className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-green-800 font-semibold">Thành công!</p>
              <p className="text-green-700 text-sm">
                Sản phẩm đã được thêm vào kho
              </p>
            </div>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mb-6 bg-red-50 border-2 border-red-200 rounded-2xl p-4 flex items-center gap-3 animate-shake">
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center shrink-0">
              <AlertCircle className="w-6 h-6 text-red-600" />
            </div>
            <p className="text-red-700 font-medium">{error}</p>
          </div>
        )}

        {/* Main Form Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Form Fields (2/3 width) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Info Card */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-1.5 h-8 bg-linear-to-b from-purple-600 to-pink-600 rounded-full"></div>
                Thông tin cơ bản
              </h2>

              <div className="space-y-6">
                {/* Product Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Tên sản phẩm <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div
                      className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors ${
                        focusedField === "name"
                          ? "text-purple-600"
                          : "text-gray-400"
                      }`}
                    >
                      <Package className="w-5 h-5" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Nhập tên sản phẩm"
                      className={`text-black w-full pl-12 pr-4 py-4 text-base rounded-xl border-2 transition-all duration-200 focus:outline-none ${
                        focusedField === "name"
                          ? "border-purple-500 bg-white shadow-lg shadow-purple-100"
                          : "border-gray-200 bg-gray-50/50 hover:border-gray-300"
                      }`}
                      disabled={loading}
                    />
                  </div>
                </div>

                {/* Price & Quantity Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Price */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Giá sản phẩm <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div
                        className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors ${
                          focusedField === "price"
                            ? "text-green-600"
                            : "text-gray-400"
                        }`}
                      >
                        <DollarSign className="w-5 h-5" />
                      </div>
                      <input
                        type="number"
                        name="price"
                        value={formData.price || ""}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField("price")}
                        onBlur={() => setFocusedField(null)}
                        placeholder="0"
                        min="0"
                        className={`text-black w-full pl-12 pr-4 py-4 text-base rounded-xl border-2 transition-all duration-200 focus:outline-none ${
                          focusedField === "price"
                            ? "border-green-500 bg-white shadow-lg shadow-green-100"
                            : "border-gray-200 bg-gray-50/50 hover:border-gray-300"
                        }`}
                        disabled={loading}
                      />
                    </div>
                    {formData.price > 0 && (
                      <p className="mt-2 text-sm text-green-600 font-medium">
                        ≈ {formatPriceDisplay(formData.price)} VNĐ
                      </p>
                    )}
                  </div>

                  {/* Quantity */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Số lượng <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div
                        className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors ${
                          focusedField === "quantity"
                            ? "text-blue-600"
                            : "text-gray-400"
                        }`}
                      >
                        <Box className="w-5 h-5" />
                      </div>
                      <input
                        type="number"
                        name="quantity"
                        value={formData.quantity || ""}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField("quantity")}
                        onBlur={() => setFocusedField(null)}
                        placeholder="0"
                        min="0"
                        className={`text-black w-full pl-12 pr-4 py-4 text-base rounded-xl border-2 transition-all duration-200 focus:outline-none ${
                          focusedField === "quantity"
                            ? "border-blue-500 bg-white shadow-lg shadow-blue-100"
                            : "border-gray-200 bg-gray-50/50 hover:border-gray-300"
                        }`}
                        disabled={loading}
                      />
                    </div>
                    {formData.quantity > 0 && (
                      <div className="mt-2 flex items-center gap-2">
                        {Number(formData.quantity) > 50 ? (
                          <span className="text-sm text-green-600 font-medium flex items-center gap-1">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            Tồn kho tốt
                          </span>
                        ) : Number(formData.quantity) > 20 ? (
                          <span className="text-sm text-yellow-600 font-medium flex items-center gap-1">
                            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                            Tồn kho trung bình
                          </span>
                        ) : (
                          <span className="text-sm text-red-600 font-medium flex items-center gap-1">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            Tồn kho thấp
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info Card (Optional) */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <div className="w-1.5 h-8 bg-linear-to-b from-blue-600 to-cyan-600 rounded-full"></div>
                Thông tin bổ sung
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-linear-to-br from-purple-50 to-pink-50 rounded-xl p-4 border-2 border-purple-100">
                  <p className="text-xs text-gray-600 mb-1">Danh mục</p>
                  <p className="font-semibold text-gray-900">Điện thoại</p>
                </div>
                <div className="bg-linear-to-br from-blue-50 to-cyan-50 rounded-xl p-4 border-2 border-blue-100">
                  <p className="text-xs text-gray-600 mb-1">Thương hiệu</p>
                  <p className="font-semibold text-gray-900">Apple</p>
                </div>
                <div className="bg-linear-to-br from-green-50 to-emerald-50 rounded-xl p-4 border-2 border-green-100">
                  <p className="text-xs text-gray-600 mb-1">Trạng thái</p>
                  <p className="font-semibold text-gray-900">Mới</p>
                </div>
                <div className="bg-linear-to-br from-orange-50 to-yellow-50 rounded-xl p-4 border-2 border-orange-100">
                  <p className="text-xs text-gray-600 mb-1">Bảo hành</p>
                  <p className="font-semibold text-gray-900">12 tháng</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image Upload (1/3 width) */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <div className="w-1.5 h-8 bg-linear-to-b from-purple-600 to-pink-600 rounded-full"></div>
                Hình ảnh
              </h2>

              <div className="space-y-4">
                {!preview ? (
                  <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className={`relative border-4 border-dashed rounded-2xl p-8 text-center transition-all duration-200 cursor-pointer group ${
                      isDragging
                        ? "border-purple-500 bg-purple-50 scale-105"
                        : "border-gray-300 hover:border-purple-400 hover:bg-purple-50/50"
                    }`}
                  >
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      disabled={loading}
                      title="Tải lên hình ảnh sản phẩm"
                    />

                    <div className="space-y-4">
                      <div
                        className={`w-20 h-20 mx-auto rounded-2xl flex items-center justify-center transition-all ${
                          isDragging
                            ? "bg-purple-200 scale-110"
                            : "bg-gray-100 group-hover:bg-purple-100"
                        }`}
                      >
                        {isDragging ? (
                          <Upload className="w-10 h-10 text-purple-600 animate-bounce" />
                        ) : (
                          <Camera className="w-10 h-10 text-gray-400 group-hover:text-purple-600 transition-colors" />
                        )}
                      </div>

                      <div>
                        <p className="text-lg font-semibold text-gray-900 mb-1">
                          {isDragging ? "Thả ảnh vào đây" : "Tải lên"}
                        </p>
                        <p className="text-sm text-gray-500">
                          Kéo thả hoặc click
                        </p>
                      </div>

                      <div className="space-y-2 text-xs text-gray-500">
                        <div className="flex items-center justify-center gap-1">
                          <FileImage className="w-4 h-4" />
                          PNG, JPG, WEBP
                        </div>
                        <div>Tối đa 5MB</div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="relative group">
                    <Image
                      width={300}
                      height={300}
                      src={preview}
                      alt="Preview"
                      className="w-full h-80 object-cover rounded-2xl shadow-lg"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center">
                      <Button
                        fullWidth
                        variant="secondary"
                        loading={loading}
                        type="button"
                        onClick={removeImage}
                        className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
                      >
                        <X className="w-6 h-6" />
                      </Button>
                    </div>
                    <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg">
                      <Check className="w-3 h-3" />
                      Đã chọn
                    </div>
                  </div>
                )}

                {formData.file && (
                  <div className="bg-gray-50 rounded-xl p-4 border-2 border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center shrink-0">
                        <FileImage className="w-5 h-5 text-purple-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-900 truncate text-sm">
                          {formData.file.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {(formData.file.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Quick Tips */}
              <div className="mt-6 bg-linear-to-br from-blue-50 to-indigo-50 rounded-xl p-4 border-2 border-blue-100">
                <p className="text-xs font-semibold text-blue-900 mb-2">
                  💡 Mẹo chụp ảnh đẹp:
                </p>
                <ul className="text-xs text-blue-800 space-y-1">
                  <li>• Chụp trên nền trắng</li>
                  <li>• Ánh sáng tự nhiên</li>
                  <li>• Góc chụp 45°</li>
                  <li>• Độ phân giải cao</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Cần trợ giúp?{" "}
            <a
              href="#"
              className="text-purple-600 hover:text-purple-700 font-medium underline"
            >
              Xem hướng dẫn
            </a>
            {" hoặc "}
            <a
              href="#"
              className="text-purple-600 hover:text-purple-700 font-medium underline"
            >
              Liên hệ hỗ trợ
            </a>
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes shake {
          0%,
          100% {
            transform: translateX(0);
          }
          10%,
          30%,
          50%,
          70%,
          90% {
            transform: translateX(-4px);
          }
          20%,
          40%,
          60%,
          80% {
            transform: translateX(4px);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.5s ease-out;
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
}
