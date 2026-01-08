import { fetchBaseResponse } from "@/config/api.config";
import { AxiosError } from "axios";
export interface UserProps {
  id: string;
  email: string;
  username: string;
  createdAt: string;
  updatedAt: string;
}
export interface UserResponse {
  status: number;
  message: string;
  data: UserProps[];
}
export const getAllUser = async ()=> {
  try {
    const response = await fetchBaseResponse<UserResponse>(`/api/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    return response.data.data;
  } catch (error) {
    const errors = error as AxiosError;
    throw new Error(`Lỗi lấy api ${errors}`);
  }
};
