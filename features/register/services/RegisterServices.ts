import { fetchBaseResponse } from "../../../config/api.config";

export interface RegisterPayload {
  username: string;
  email: string;
  password: string;
}

export const RegisterAPI = async (payload: RegisterPayload) => {
  try {
    return await fetchBaseResponse("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      data: payload
    });
  } catch (error) {
    console.error("Register API error:", error);
    throw error; // ném lại cho saga xử lý
  }
};
