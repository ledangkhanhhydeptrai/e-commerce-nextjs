import API from "@/config/api.config";

export const loginAPI = (payload: { username: string; password: string }) => {
  return API.post("/api/auth/login", payload);
};
