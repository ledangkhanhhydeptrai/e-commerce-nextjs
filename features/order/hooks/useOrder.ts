import { useRouter } from "next/navigation";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { addOrderFromCart } from "../store/orderSlice";

export default function useOrder() {
  const router = useRouter();
  const dispatch = useDispatch();

  const order = useSelector((state: RootState) => state.order.order); // order vừa tạo

  const handleCheckout = () => {
    const response = dispatch(addOrderFromCart()); // saga chạy, state update, useEffect redirect
    if (response) {
      router.push("/order");
    }
  };
  return { order, handleCheckout };
}
