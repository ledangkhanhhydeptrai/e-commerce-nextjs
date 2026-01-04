import { fetchBaseResponse } from "@/config/api.config";
import { OrderProps } from "../order/OrderProps";
export interface GetOrderResponse {
  status: number;
  message: string;
  data: OrderProps[];
}
export const OrderAPI = async () => {
  const response = await fetchBaseResponse<GetOrderResponse>(`/api/order`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });
  return response.data.data;
};
export const addOrder = async () => {
  const response = await fetchBaseResponse(`/api/order`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  });
  return response.data;
};
