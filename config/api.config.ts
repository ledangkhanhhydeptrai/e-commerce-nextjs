import axios from "axios";

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 15000
});
console.log("API instance created with baseURL:", API.defaults.baseURL);
export default API;
