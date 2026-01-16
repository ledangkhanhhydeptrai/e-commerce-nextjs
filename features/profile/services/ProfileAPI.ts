import { fetchBaseResponse } from "@/config/api.config";
import { ProfileResponse } from "../ProfileProps/ProfileProps";
import { AxiosError } from "axios";

export const getAPIProfile = async () => {
  try {
    const response = await fetchBaseResponse<ProfileResponse>(`/api/profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (response.status === 200) {
      return response.data.data;
    }
  } catch (error) {
    const errors = error as AxiosError;
    throw errors;
  }
};
