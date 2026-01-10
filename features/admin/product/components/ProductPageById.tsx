"use client";
import React from "react";
import { Truck, Shield, RotateCcw, ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useProductById } from "../hooks/useProduct";
import { useParams, useRouter } from "next/navigation";
import { LoadingState } from "./LoadingState";
import Button from "@/components/ui/Button/Button";
import { ErrorState } from "./ErrorState";

export default function ProductPageById() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const { products, loading, error } = useProductById(id);
  if (!products) {
    return <LoadingState />;
  }
  if (error) {
    return <ErrorState />;
  }

  return (
    <div className="bg-linear-to-br from-slate-50 to-slate-100">
      <div className="">
        <Button
          variant="secondary"
          fullWidth
          loading={loading}
          onClick={() => router.back()}
          className="flex items-center gap-2 px-4 py-2 rounded-xl"
        >
          <ArrowLeft className="w-5 h-5" />
          Quay lại
        </Button>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-8 lg:p-12">
            {/* Image Section */}
            <div className="space-y-4">
              <div className="aspect-square bg-linear-to-br from-slate-100 to-slate-200 rounded-2xl overflow-hidden">
                <Image
                  src={products.image}
                  alt={products.name}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>

            {/* Product Info Section */}
            <div className="flex flex-col space-y-6">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-3">
                  {products.name}
                </h1>

                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-5xl font-bold text-blue-600">
                    {products.price.toLocaleString("vi-VN")}₫
                  </span>
                </div>
                {products.quantity === 0 && (
                  <div className="inline-block px-4 py-2 bg-red-100 text-red-700 rounded-full font-semibold mb-4">
                    Hết hàng
                  </div>
                )}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg mb-4">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-600">
                      Số lượng còn lại:
                    </span>
                  </div>
                  <span className="text-lg font-bold text-blue-600">
                    {products.quantity}
                  </span>
                  <span className="text-sm text-gray-500">sản phẩm</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                <div className="text-center space-y-2">
                  <Truck className="w-8 h-8 mx-auto text-blue-600" />
                  <p className="text-sm font-medium text-gray-900">
                    Miễn phí vận chuyển
                  </p>
                  <p className="text-xs text-gray-500">Đơn từ 500k</p>
                </div>
                <div className="text-center space-y-2">
                  <Shield className="w-8 h-8 mx-auto text-blue-600" />
                  <p className="text-sm font-medium text-gray-900">
                    Bảo hành 12 tháng
                  </p>
                  <p className="text-xs text-gray-500">Chính hãng Apple</p>
                </div>
                <div className="text-center space-y-2">
                  <RotateCcw className="w-8 h-8 mx-auto text-blue-600" />
                  <p className="text-sm font-medium text-gray-900">
                    Đổi trả 7 ngày
                  </p>
                  <p className="text-xs text-gray-500">Miễn phí 100%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
