import { fetchBaseResponse } from "@/config/api.config";
import { PaymentProps } from "../paymentProps/Payment";
interface PaymentResponse {
  status: number;
  message: string;
  data: PaymentProps | null;
}
export const PaymentAPI = async (orderId: string) => {
  const response = await fetchBaseResponse<PaymentResponse>(
    `/api/payment/${orderId}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    }
  );
  return response.data.data ? response.data.data : null;
};
// export const CancelPaymentAPI = async (orderId: string) => {
//   const response = await fetchBaseResponse<PaymentResponse>(
//     `/api/payment/${orderId}/cancel`,
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       }
//     }
//   );
//   console.log("Response", response);
//   return response.data.data ? response.data.data : null;
// };
