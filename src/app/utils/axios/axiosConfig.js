import axios from "axios";

const axiosApi = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_API_URL,
    withCredentials: false,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

export default axiosApi