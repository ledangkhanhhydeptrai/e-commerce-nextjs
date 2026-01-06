import { fetchBaseResponse } from "@/config/api.config";
import { PaymentProps } from "../paymentProps/Payment";
import { ApiResponse } from "@/features/auth/store/authSaga";

// Response chung từ backend
interface PaymentResponse {
  status: number;
  message: string;
  data: PaymentProps | null;
}
export interface PayOSResponse {
  checkoutUrl: string;
  paymentLinkId: string;
  orderCode: number;
}
/**
 * Lấy / tạo thanh toán
 * POST /api/payment/${orderId}
 */
export const PaymentAPI = async (
  orderId: string
): Promise<PayOSResponse | null> => {
  const response = await fetchBaseResponse<ApiResponse<PayOSResponse>>(
    `/api/payment/${orderId}`,
    { method: "POST" }
  );

  console.log("Create payment response:", response.data);
  return response.data?.data ?? null;
};

/**
 * Confirm thanh toán
 * GET /api/payment/confirm?orderId=...
 * Chỉ gọi khi user đã thanh toán xong
 */
export const ConfirmPaymentAPI = async (orderId: string): Promise<PaymentProps | null> => {
  const url = `/api/payment/${orderId}`;
  const res = await fetchBaseResponse<{ status: number; message: string; data: PaymentProps | null }>(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
  return res.data.data ?? null;
};

// Cancel thanh toán
// Cancel thanh toán
export const CancelPaymentPostAPI = async (
  orderId: string,
  status: string = "CANCELLED"
): Promise<PaymentProps | null> => {
  try {
    const res = await fetchBaseResponse<{ status: number; message: string; data: PaymentProps | null }>(
      `/api/payment/cancel-order?orderId=${encodeURIComponent(orderId)}&status=${encodeURIComponent(status)}`,
      {
        method: "POST", // vẫn POST
        headers: { "Content-Type": "application/json" },
      }
    );

    console.log("CancelPaymentPostAPI response:", res);
    return res.data?.data ?? null;
  } catch (err) {
    console.error("CancelPaymentPostAPI error:", err);
    throw err;
  }
};

/**
 * Cancel Payment (GET)
 * GET /api/payment/cancel-order?orderId=...&status=...
 */
export const CancelPaymentGetAPI = async (
  orderId: string,
  status: string = "CANCELLED"
): Promise<PaymentProps | null> => {
  try {
    const res = await fetchBaseResponse<PaymentResponse>(
      `/api/payment/cancel-order?orderId=${encodeURIComponent(
        orderId
      )}&status=${encodeURIComponent(status)}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );

    console.log("CancelPaymentGetAPI response:", res);
    return res.data?.data ?? null;
  } catch (err) {
    console.error("CancelPaymentGetAPI error:", err);
    throw err;
  }
};