import { fetchBaseResponse } from "@/config/api.config";
import { AxiosError } from "axios";
export interface ProductProps {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}
export interface ProductResponseAdmin {
  status: number;
  message: string;
  data: ProductProps[];
}
export interface ProductResponseAdminById {
  status: number;
  message: string;
  data: ProductProps | null;
}
export interface ProductFormData {
  name: string;
  price: number;
  quantity: number;
  file: File | null;
}
export const getAllProduct = async () => {
  try {
    const response = await fetchBaseResponse<ProductResponseAdmin>(
      `/api/product/admin`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    return response.data.data;
  } catch (error) {
    const errors = error as AxiosError;
    throw errors;
  }
};
export const getProductById = async (id: string) => {
  try {
    const response = await fetchBaseResponse<ProductResponseAdminById>(
      `/api/product/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    return response.data.data;
  } catch (error) {
    const errors = error as AxiosError;
    throw errors;
  }
};
export const createProductForm = async ({
  name,
  price,
  quantity,
  file
}: ProductFormData) => {
  try {
    const formData = new FormData();

    formData.append("name", name);
    formData.append("price", String(price));
    formData.append("quantity", String(quantity));
    formData.append("file", file as File);

    const response = await fetchBaseResponse<ProductResponseAdmin>(
      "/api/product/create",
      {
        method: "POST",
        data: formData // ✅ QUAN TRỌNG
        // ❌ KHÔNG headers
      }
    );

    return response.data.data;
  } catch (error) {
    const errors = error as AxiosError;
    throw errors;
  }
};
