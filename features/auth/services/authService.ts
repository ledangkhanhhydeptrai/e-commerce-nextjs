import { fetchBaseResponse } from "@/config/api.config";
import { API_AUTH_LOGIN, JSON_HEADERS } from "@/constants";

export interface LoginPayload {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  role: "ADMIN" | "CUSTOMER";
}

export const loginAPI = (payload: LoginPayload) => {
  return fetchBaseResponse(API_AUTH_LOGIN, {
    method: "POST",
    headers: JSON_HEADERS,
    data: payload
  });
};
