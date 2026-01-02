interface ItemsProps {
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
