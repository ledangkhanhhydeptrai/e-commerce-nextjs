import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "production"
    ? "" // gọi /api/... của Next.js
    : process.env.NEXT_PUBLIC_API_URL; // localhost

const API = axios.create({
  baseURL,
  timeout: 15000,
});

export default API;
