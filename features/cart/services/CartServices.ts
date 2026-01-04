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
/** 🔥 UPDATE quantity */
export const updateCartItemAPI = async (
  cartItemId: string,
  quantity: number
): Promise<CartProps | null> => {
  const res = await fetchBaseResponse<CartResponse>(
    `/api/cart/items/${cartItemId}`,
    {
      method: "PUT",
      headers: JSON_HEADERS,
      data: { quantity }
    }
  );

  return res.data.data ? res.data.data : null;
};
export const deleteCartItemAPI = async (id: string): Promise<void> => {
  await fetchBaseResponse(`/api/cart/${id}`, {
    method: "DELETE",
    headers: JSON_HEADERS
  });
};
