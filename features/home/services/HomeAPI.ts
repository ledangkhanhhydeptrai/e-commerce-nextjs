import { fetchBaseResponse } from "@/config/api.config";
import { ProductProps } from "../homeprops/HomeProps";
import { API_PRODUCTS } from "@/constants";
export interface GetProductResponse {
  status: number;
  message: string;
  data: ProductProps[];
}

export const HomeAPI = async (): Promise<ProductProps[]> => {
  const res = await fetchBaseResponse<GetProductResponse>(API_PRODUCTS, {
    method: "GET"
  });
  return res.data.data; // ✅ chỉ array
};
