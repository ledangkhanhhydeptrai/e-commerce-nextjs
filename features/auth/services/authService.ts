import API from "@/config/api.config";

export interface LoginPayload {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  role: "ADMIN" | "CUSTOMER";
}

export const loginAPI = (payload: LoginPayload) => {
  return API.post<LoginResponse>("/api/auth/login", payload);
};
