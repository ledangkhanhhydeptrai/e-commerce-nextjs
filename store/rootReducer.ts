// store/rootReducer.ts
import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "@/features/auth/store/authSlice";
import registerReducer from "@/features/register/store/registerSlice";
const rootReducer = combineReducers({
  auth: authReducer,
  register: registerReducer
});

export default rootReducer;
