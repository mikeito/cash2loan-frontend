import axios from "axios";
import { storage } from "../local";

const token = storage.getToken();

const axiosApi = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_API_URL,
    withCredentials: false,
    headers: {
      // Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

if (token) {
  axiosApi.defaults.headers.common["authorization"] = `Bearer ${token}`
}

export default axiosApi