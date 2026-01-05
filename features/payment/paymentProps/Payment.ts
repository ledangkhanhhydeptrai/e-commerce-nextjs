import { OrderEnum } from "@/features/order/OrderStatus/OrderStatus";

export interface PaymentProps {
  checkoutUrl: string;
  paymentLinkId: string;
  orderCode: number;
  paymentStatus: PaymentEnum;
  orderStatus: OrderEnum;
}
export type PaymentEnum = "PENDING" | "PAID" | "FAILED" | "CANCELLED";
