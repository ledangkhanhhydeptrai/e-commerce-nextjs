import { fetchBaseResponse } from "@/config/api.config";
import { ProductProps } from "../homeprops/HomeProps";
import { API_PRODUCTS } from "@/constants";
export interface GetProductResponse {
  status: number;
  message: string;
  data: ProductProps[];
}
export interface GetProductResponseNull {
  status: number;
  message: string;
  data: ProductProps | null;
}
export const HomeAPI = async (): Promise<ProductProps[]> => {
  const res = await fetchBaseResponse<GetProductResponse>(API_PRODUCTS, {
    method: "GET"
  });
  return res.data.data; // ✅ chỉ array
};
export const HomeGetById = async (id: string): Promise<ProductProps | null> => {
  const res = await fetchBaseResponse<GetProductResponseNull>(
    `/api/public/product/${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
  return res.data.data ? res.data.data : null;
};
