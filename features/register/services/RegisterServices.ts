import { fetchBaseResponse } from "../../../config/api.config";
export interface RegisterFormValues {
  username: string;
  email: string;
  password: string;
  fileUrl: File | null;
}

export interface RegisterPayload {
  username: string;
  email: string;
  password: string;
}
export interface RegisterResponse {
  status: number;
  message: string;
  data: null;
}
export const RegisterAPI = async (
  formData: FormData
): Promise<RegisterResponse> => {
  const response = await fetchBaseResponse<RegisterResponse>(
    "/api/auth/register",
    {
      method: "POST",
      data: formData
    }
  );
  if (response.status !== 200) {
    throw new Error(response.message);
  }
  // ✅ RETURN CẢ RESPONSE
  return response.data;
};
