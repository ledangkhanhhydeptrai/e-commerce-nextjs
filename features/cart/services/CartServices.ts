import { fetchBaseResponse } from "@/config/api.config";
import { JSON_HEADERS } from "@/constants";

export const CartAPI = () => {
  return fetchBaseResponse(`/api/cart`, {
    method: "GET",
    headers: JSON_HEADERS
  });
};
