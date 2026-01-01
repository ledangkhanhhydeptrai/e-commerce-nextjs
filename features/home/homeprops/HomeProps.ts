import { ProductEnum } from "../enum/ProductEnum";

export interface ProductProps {
  id: string;
  name: string;
  price: number;
  stockStatus: ProductEnum;
  image: string;
}
