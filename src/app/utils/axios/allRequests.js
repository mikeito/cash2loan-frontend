import axiosApi from "./axiosConfig";
import { sub } from "date-fns";

const config = {
  // 'content-type': 'multipart/form-data; charset=utf-8; boundary=' + Math.random().toString().substr(2),
  'content-Type': 'multipart/form-data',
};

//** POST REQUESTS */

const refreshAccessToken = async () => {
  const response = await axiosApi.get("/refresh");
  return response.data;
};

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

const getSinglePost = async ({ id }) => {
  return await axiosApi.get("/post", {
    params: { id: id },
  });
};

//** UPDATE REQUESTS */

const updatePost = async (incomingData) => {
  return await axiosApi.patch(`/post/${incomingData.id}`, {
    ...incomingData,
    updated_at: new Date().toISOString(),
  });
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

    if(error?.response?.status === 403) {
      console.log('sending refresh token')
      await refreshAccessToken();
      return axiosApi(originalRequest);
    }
    return Promise.reject(error);
  }
)

export {
  refreshAccessToken,
  login,
  register,
  addPost,
  getPosts,
  getSinglePost,
  updatePost,
  deletePost,
};
