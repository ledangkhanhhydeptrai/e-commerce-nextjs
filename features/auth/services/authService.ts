import { fetchBaseResponse } from "@/config/api.config";


export interface LoginPayload {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  role: "ADMIN" | "CUSTOMER";
}

export const loginAPI = (payload: LoginPayload) => {
  return fetchBaseResponse("/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    data: payload
  });
};
