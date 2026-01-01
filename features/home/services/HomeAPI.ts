import { fetchBaseResponse } from "@/config/api.config";
import { ProductProps } from "../homeprops/HomeProps";
export interface GetProductResponse {
  status: number;
  message: string;
  data: ProductProps[];
}

export const HomeAPI = async (): Promise<ProductProps[]> => {
  const res = await fetchBaseResponse<GetProductResponse>(
    "/api/public/product",
    { method: "GET" }
  );
  return res.data.data; // ✅ chỉ array
};
