import axiosApi from "./axiosConfig";
import { sub } from "date-fns";
import { storage } from "../local";

const token = storage.getToken();
const refreshToken = storage.getRefreshToken();

const config = {
  // 'content-type': 'multipart/form-data; charset=utf-8; boundary=' + Math.random().toString().substr(2),
  'content-Type': 'multipart/form-data',
};

//** POST REQUESTS */

const refreshAccessToken = async () => {
  axiosApi.defaults.headers.common["authorization"] = `Bearer ${token}`
  // axiosApi.defaults.headers.set("authorization", `Bearer ${refreshToken}`)
  // axiosApi.headers.set("authorization", `Bearer ${refreshToken}`)
  const response = await axiosApi.get("/token/refresh");
  return response.data;
};

const getUser = async ({queryKey}) => {
  const [_key, { email }] = queryKey;
  await axiosApi.get(`/user/${email}`, {
    email,
  })
}

const login = async (credentials) => {
  return await axiosApi.post("/login", credentials, {withCredentials: true,});
};

const register = async (credentials) => {
  return await axiosApi.post("/user/save", credentials);
};

const addPost = async (incomingData) => {
  return await axiosApi.post("/post", incomingData, config);
};

//** GET REQUESTS */

const getPosts = async () => {
  const response = await axiosApi.get("/posts");
  return response.data;
};

const getSinglePost = async ({ queryKey }) => {
  
  const [_key, { id }] = queryKey;
  const response = await axiosApi.get(`/post/${id}`,);
  return response.data;
};

//** UPDATE REQUESTS */

const updatePost = async ({ id, data }) => {
  console.log("00022222");
  console.log(id);
  console.log(data);
  // return await axiosApi.patch(`/post/${incomingData.id}`, incomingData, config);
  return await axiosApi.put(`/post/${id}`, data, config);
};

//** DELETE REQUESTS */

const deletePost = async ({ id }) => {
  axiosApi.delete(`/post/${id}`, {
    id,
  });
};

//** INTERCEPTOR */ 
axiosApi.interceptors.response.use(
  (response) => { return response; },
  async (error) => {
    const originalRequest = error.config;
    console.log("ERRORRRRR interceptor: "+ error);
    // if(token && error?.response?.status === 403) {
    //   console.log('sending refresh token')
    //   await refreshAccessToken();
    //   return axiosApi(originalRequest);
    // }
    return Promise.reject(error);
  }
)

export {
  refreshAccessToken,
  getUser,
  login,
  register,
  addPost,
  getPosts,
  getSinglePost,
  updatePost,
  deletePost,
};
