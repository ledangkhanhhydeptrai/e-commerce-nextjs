"use client";
import React from "react";
import {
  Package,
  Plus,
  Search,
  Filter,
  Edit2,
  Trash2,
  Eye,
  Download,
  Upload,
  MoreVertical,
  DollarSign,
  Box,
  TrendingUp,
  AlertCircle
} from "lucide-react";

import Input from "@/components/ui/Input/Input";
import Image from "next/image";
import Button from "@/components/ui/Button/Button";
import { useProduct } from "../hooks/useProduct";
import ProductForm from "./ProductForm";
import Modal from "@/components/ui/Modal/Modal";
import { ProductProps } from "../services/ProductServices";
export default function ProductPage() {
  const { product, loading, error, stats } = useProduct();
  const { totalProduct, totalValue, totalQuantity, lowStock } = stats;
  const [openCreate, setOpenCreate] = React.useState<boolean>(false);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedProducts, setSelectedProducts] = React.useState<string[]>([]);
  // Format currency
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND"
    }).format(price);
  };

  // Filter products
  const filteredProducts = product.filter((product: ProductProps) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Select product
  const toggleSelectProduct = (id: string) => {
    setSelectedProducts(
      prev =>
        prev.includes(id) ? prev.filter(pid => pid !== id) : [...prev, id]
    );
  };

  const selectAllProducts = () => {
    if (selectedProducts.length === filteredProducts.length) {
      setSelectedProducts([]);
    } else {
      setSelectedProducts(filteredProducts.map(p => p.id));
    }
  };
  if (loading) {
    return (
      <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center p-6">
        <div className="text-center">
          <div className="relative inline-block mb-6">
            <div className="w-24 h-24 border-8 border-blue-200 border-t-blue-600 rounded-full animate-spin" />
            <Package className="w-10 h-10 text-blue-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Đang tải dữ liệu...
          </h2>
          <p className="text-gray-600">Vui lòng đợi trong giây lát</p>

          {/* Loading skeleton preview */}
          <div className="mt-12 max-w-4xl mx-auto space-y-4">
            <div className="bg-white rounded-2xl p-6 shadow-lg animate-pulse">
              <div className="grid grid-cols-4 gap-4">
                <div className="h-24 bg-gray-200 rounded-xl" />
                <div className="h-24 bg-gray-200 rounded-xl" />
                <div className="h-24 bg-gray-200 rounded-xl" />
                <div className="h-24 bg-gray-200 rounded-xl" />
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg animate-pulse">
              <div className="h-12 bg-gray-200 rounded-xl mb-4" />
              <div className="space-y-3">
                <div className="h-16 bg-gray-200 rounded-xl" />
                <div className="h-16 bg-gray-200 rounded-xl" />
                <div className="h-16 bg-gray-200 rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center p-6">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-3xl shadow-2xl p-8 text-center border-4 border-red-100">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertCircle className="w-10 h-10 text-red-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Oops! Có lỗi xảy ra
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {error}
            </p>

            <div className="mt-6 p-4 bg-gray-50 rounded-xl">
              <p className="text-sm text-gray-600">
                💡 <strong>Gợi ý:</strong> Kiểm tra kết nối internet hoặc liên
                hệ bộ phận hỗ trợ
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Quản lý sản phẩm
              </h1>
              <p className="text-gray-600">
                Quản lý kho hàng và thông tin sản phẩm
              </p>
            </div>
            <Button
              fullWidth
              loading={loading}
              variant="primary"
              onClick={() => setOpenCreate(true)}
              className="bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-lg"
            >
              <Plus className="w-5 h-5" />
              Thêm sản phẩm
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Package className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-green-600 text-sm font-semibold bg-green-50 px-2 py-1 rounded-lg">
                  +12%
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-1">Tổng sản phẩm</p>
              <p className="text-3xl font-bold text-gray-900">
                {totalProduct}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100 hover:shadow-xl transition-all duration-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-green-600" />
                </div>
                <span className="text-green-600 text-sm font-semibold bg-green-50 px-2 py-1 rounded-lg">
                  +8%
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-1">Tổng giá trị</p>
              <p className="text-2xl font-bold text-gray-900">
                {formatPrice(totalValue)}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Box className="w-6 h-6 text-purple-600" />
                </div>
                <span className="text-blue-600 text-sm font-semibold bg-blue-50 px-2 py-1 rounded-lg">
                  Tồn kho
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-1">Số lượng</p>
              <p className="text-3xl font-bold text-gray-900">
                {totalQuantity}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100 hover:shadow-xl transition-all duration-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-orange-600" />
                </div>
                <span className="text-red-600 text-sm font-semibold bg-red-50 px-2 py-1 rounded-lg">
                  Cảnh báo
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-1">Sắp hết hàng</p>
              <p className="text-3xl font-bold text-gray-900">
                {lowStock}
              </p>
            </div>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          {/* Toolbar */}
          <div className="p-6 border-b border-gray-100 bg-linear-to-r from-gray-50 to-white">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md w-full">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Tìm kiếm sản phẩm..."
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  className="text-black w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                />
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3">
                <button className="px-4 py-3 border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all flex items-center gap-2 text-gray-700 font-medium">
                  <Filter className="w-5 h-5" />
                  Lọc
                </button>
                <button className="px-4 py-3 border-2 border-gray-200 rounded-xl hover:border-green-500 hover:bg-green-50 transition-all flex items-center gap-2 text-gray-700 font-medium">
                  <Download className="w-5 h-5" />
                  Export
                </button>
                <button className="px-4 py-3 border-2 border-gray-200 rounded-xl hover:border-purple-500 hover:bg-purple-50 transition-all flex items-center gap-2 text-gray-700 font-medium">
                  <Upload className="w-5 h-5" />
                  Import
                </button>
              </div>
            </div>

            {/* Selected Info */}
            {selectedProducts.length > 0 &&
              <div className="mt-4 bg-blue-50 border-2 border-blue-200 rounded-xl p-3 flex items-center justify-between">
                <span className="text-blue-700 font-medium">
                  Đã chọn {selectedProducts.length} sản phẩm
                </span>
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-medium">
                    Xóa tất cả
                  </button>
                  <button
                    onClick={() => setSelectedProducts([])}
                    className="px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-100 transition-all font-medium"
                  >
                    Bỏ chọn
                  </button>
                </div>
              </div>}
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b-2 border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left">
                    <Input
                      type="checkbox"
                      checked={
                        selectedProducts.length === filteredProducts.length &&
                        filteredProducts.length > 0
                      }
                      onChange={selectAllProducts}
                      className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500 cursor-pointer"
                    />
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Sản phẩm
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Giá
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Số lượng
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Trạng thái
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Tổng giá trị
                  </th>
                  <th className="px-6 py-4 text-right text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Thao tác
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredProducts.map(product =>
                  <tr
                    key={product.id}
                    className="hover:bg-blue-50/50 transition-colors group"
                  >
                    <td className="px-6 py-4">
                      <Input
                        type="checkbox"
                        checked={selectedProducts.includes(product.id)}
                        onChange={() => toggleSelectProduct(product.id)}
                        className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500 cursor-pointer"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <Image
                            src={product.image}
                            alt={product.name}
                            width={300}
                            height={300}
                            className="w-16 h-16 rounded-xl object-cover ring-2 ring-gray-100 group-hover:ring-blue-300 transition-all"
                          />
                          <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <Eye className="w-3 h-3 text-white" />
                          </div>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {product.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            ID: {product.id.slice(0, 8)}...
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-bold text-gray-900">
                        {formatPrice(product.price)}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                        <span className="font-semibold text-gray-900">
                          {product.quantity}
                        </span>
                        <span className="text-gray-500 text-sm">sản phẩm</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {product.quantity > 20
                        ? <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                            Còn hàng
                          </span>
                        : product.quantity > 10
                          ? <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-700">
                              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                              Sắp hết
                            </span>
                          : <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-700">
                              <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                              Ít hàng
                            </span>}
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-bold text-indigo-600">
                        {formatPrice(product.price * product.quantity)}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <Button
                          fullWidth
                          variant="primary"
                          loading={loading}
                          className="p-2 hover:bg-blue-100 rounded-lg transition-all group/btn"
                        >
                          <Eye className="w-5 h-5 text-gray-600 group-hover/btn:text-blue-600" />
                        </Button>
                        <Button
                          fullWidth
                          variant="primary"
                          loading={loading}
                          className="p-2 hover:bg-green-100 rounded-lg transition-all group/btn"
                        >
                          <Edit2 className="w-5 h-5 text-gray-600 group-hover/btn:text-green-600" />
                        </Button>
                        <Button
                          fullWidth
                          variant="primary"
                          loading={loading}
                          className="p-2 hover:bg-red-100 rounded-lg transition-all group/btn"
                        >
                          <Trash2 className="w-5 h-5 text-gray-600 group-hover/btn:text-red-600" />
                        </Button>
                        <Button
                          fullWidth
                          variant="primary"
                          loading={loading}
                          className="p-2 hover:bg-gray-100 rounded-lg transition-all"
                        >
                          <MoreVertical className="w-5 h-5 text-gray-600" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 border-t border-gray-100 bg-gray-50 flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Hiển thị{" "}
              <span className="font-semibold text-gray-900">
                1-{filteredProducts.length}
              </span>{" "}
              trong tổng số{" "}
              <span className="font-semibold text-gray-900">
                {product.length}
              </span>{" "}
              sản phẩm
            </p>
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 border-2 border-gray-200 rounded-lg hover:bg-white hover:border-blue-500 transition-all font-medium text-gray-700">
                Trước
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium">
                1
              </button>
              <button className="px-4 py-2 border-2 border-gray-200 rounded-lg hover:bg-white hover:border-blue-500 transition-all font-medium text-gray-700">
                2
              </button>
              <button className="px-4 py-2 border-2 border-gray-200 rounded-lg hover:bg-white hover:border-blue-500 transition-all font-medium text-gray-700">
                3
              </button>
              <button className="px-4 py-2 border-2 border-gray-200 rounded-lg hover:bg-white hover:border-blue-500 transition-all font-medium text-gray-700">
                Sau
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={openCreate}
        onClose={() => setOpenCreate(false)}
        title="Thêm sản phẩm mới"
        size="xl"
        type="info"
        closeOnOverlayClick={false}
        showCloseButton={false}
      >
        <ProductForm />
      </Modal>
    </div>
  );
}
