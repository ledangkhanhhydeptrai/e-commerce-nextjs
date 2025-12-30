import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "production"
    ? "" // gọi /api/... của Next.js
    : process.env.NEXT_PUBLIC_API_URL; // localhost
console.log("API URL:", process.env.NEXT_PUBLIC_API_URL);
const API = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 15000
});

export default API;
