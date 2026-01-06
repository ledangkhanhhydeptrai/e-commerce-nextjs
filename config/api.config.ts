import { getUsernameFromToken } from "@/features/auth/utils/JWTPayload";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

console.log("API URL:", process.env.NEXT_PUBLIC_API_URL);

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 15000
});

// Interceptor request
API.interceptors.request.use(
  (config) => {
    console.log("Request Config Before Send:", config);

    if (typeof window !== "undefined") {
      const token = localStorage.getItem("jwt");
      console.log("Token from localStorage:", token);

      if (token) {
        config.headers = config.headers || {};
        config.headers.Authorization = `Bearer ${token}`;

        const username = getUsernameFromToken(token);
        if (username) {
          config.headers["X-Username"] = username;
          console.log("X-Username header added:", username);
        }
      }
    }

    return config;
  },
  (error) => {
    console.log("Request error:", error);
    return Promise.reject(error);
  }
);

export interface BaseResponse<T> {
  status: number;
  message: string;
  data: T;
  serverStatus?: number;
  success?: boolean;
}

// Hàm fetch base response
export async function fetchBaseResponse<T = unknown>(
  url: string,
  config: AxiosRequestConfig
): Promise<BaseResponse<T>> {
  console.log("Calling fetchBaseResponse with URL:", url);
  console.log("Axios config:", config);

  try {
    const response: AxiosResponse = await API(url, config);
    console.log("Axios response:", response);

    const raw = response.data;
    console.log("Raw response data:", raw);

    if (Array.isArray(raw)) {
      return {
        status: response.status,
        data: raw as T,
        message: "Success",
        serverStatus: response.status,
        success: true
      };
    }

    if (typeof raw !== "object" && raw !== null) {
      return {
        status: response.status,
        data: (raw.data !== "undefined" ? raw.data : raw) as T,
        message: raw.message || "Success",
        serverStatus: raw.status || response.status,
        success: raw.success || false
      };
    }

    return {
      status: response.status,
      data: raw as T,
      message: "Success",
      serverStatus: response.status,
      success: true
    };
  } catch (error) {
    console.log("Axios catch error:", error);

    if (axios.isAxiosError(error)) {
      const raw = error.response?.data;
      console.log("Axios error response data:", raw);

      return {
        status: raw?.status || error.response?.status || 400,
        message: raw?.message || "Request failed",
        data: raw?.data ?? null,
        success: false
      };
    }

    throw error; // chỉ throw khi crash thật
  }
}

export default API;
