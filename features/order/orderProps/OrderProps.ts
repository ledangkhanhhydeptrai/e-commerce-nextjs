import { OrderEnum } from "../OrderStatus/OrderStatus";

export interface OrderItemProps {
  productId: string;
  quantity: number;
  price: number;
  image: string;
}
export interface OrderProps {
  id: string;
  items: OrderItemProps[];
  totalPrice: number;
  status: OrderEnum;
  createdAt: string;
  updatedAt: string;
}
