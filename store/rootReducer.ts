// store/rootReducer.ts
import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "@/features/auth/store/authSlice";
import registerReducer from "@/features/register/store/registerSlice";
import homeReducer from "@/features/home/store/homeSlice";
import CartReducer from "@/features/cart/store/cartSlice";
import OrderReducer from "@/features/order/store/orderSlice";
import PaymentReducer from "@/features/payment/store/paymentSlice";
import ProductIdReducer from "@/features/home/store/productDetailSlice";
import UserReducer from "@/features/admin/user/store/userSlice";
import ProductReducer from "@/features/admin/product/store/productSliceAdmin";
import ProductAdminByIdReducer from "@/features/admin/product/store/productSliceAdminById";
const rootReducer = combineReducers({
  auth: authReducer,
  register: registerReducer,
  product: homeReducer,
  cart: CartReducer,
  order: OrderReducer,
  payment: PaymentReducer,
  productId: ProductIdReducer,
  userAdmin: UserReducer,
  productAdmin: ProductReducer,
  productAdminById: ProductAdminByIdReducer
});

export default rootReducer;
