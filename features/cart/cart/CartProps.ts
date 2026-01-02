import { RootState } from "@/store/store";

export interface ItemsProps {
  productId: string;
  productName: string;
  price: number;
  quantity: number;
  image: string;
}
export interface CartProps {
  id: string;
  items: ItemsProps[];
  totalPrice: number;
}
export interface CartResponse {
  status: number;
  message: string;
  data: CartProps;
}
export const selectCartQuantity = (state: RootState) => {
  const cart = state.cart.cart; // cart từ slice
  console.log("Cart from redux:", cart);
  if (cart === null || cart === undefined) return 0;
  if (cart.items === null || cart.items === undefined) return 0;

  let total = 0;
  for (let i = 0; i < cart.items.length; i++) {
    total += cart.items[i].quantity || 0;
  }
  return total;
};