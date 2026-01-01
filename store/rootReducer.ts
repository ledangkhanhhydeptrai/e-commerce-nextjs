// store/rootReducer.ts
import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "@/features/auth/store/authSlice";
import registerReducer from "@/features/register/store/registerSlice";
import homeReducer from "@/features/home/store/homeSlice";
const rootReducer = combineReducers({
  auth: authReducer,
  register: registerReducer,
  product: homeReducer
});

export default rootReducer;
