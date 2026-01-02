import { fetchBaseResponse } from "@/config/api.config";
import { JSON_HEADERS } from "@/constants";
import { CartProps, CartResponse } from "../cart/CartProps";

export const CartAPI = async (): Promise<CartProps | null> => {
  const res = await fetchBaseResponse<CartResponse>(`/api/cart`, {
    method: "GET",
    headers: JSON_HEADERS
  });
  return res.data.data ? res.data.data : null;
};
