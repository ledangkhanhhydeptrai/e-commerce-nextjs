import { BaseResponse, fetchBaseResponse } from "@/config/api.config";

export interface RegisterFormValues {
  username: string;
  email: string;
  password: string;
  fileUrl: File | null;
}

// Backend trả data = null
export type RegisterResponseData = null;

// API response
export type RegisterResponse = BaseResponse<RegisterResponseData>;

export const RegisterAPI = async (formData: FormData) => {
  return fetchBaseResponse<RegisterResponse>("/api/auth/register", {
    method: "POST",
    data: formData
  });
};
