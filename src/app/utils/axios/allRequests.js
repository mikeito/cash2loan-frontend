import axiosApi from "./axiosConfig";
import { setAuthToken } from "./setAuthToken";
import { sub } from "date-fns";

const userid = 1;

//** POST REQUESTS */

const axiosLogin = async (credentials) => {
  axiosApi.post("/login", credentials);
};

const axiosRegister = async (credentials) => {
  axiosApi.post("/user/save", credentials);
};

const axiosPost = async (incomingData) => {
  axiosApi.post("/post/save", {
    ...incomingData,
    userId: Number(userid), // get this data
    created_at: new Date().toISOString(),
  });
};

//** GET REQUESTS */

const axiosPostsGet = async (incomingData) => {
  axiosApi.get("/posts", {
    transformResponse: [
      (responseData) => {
        let min = 1;
        const loadedPosts = responseData.map((post) => {
          if (!post?.created_at)
            post.date = sub(new Date(), { minutes: min++ }).toISOString();

          return post;
        });
        // return postsAdapter.setAll(initialState, loadedPosts)
      },
    ],
  });
};

const axiosGetSinglePost = async ({ id }) => {
  axiosApi.get("/posts", {
    params: { id: id },
  });
};

//** UPDATE REQUESTS */

const axiosPostUpdate = async (incomingData) => {
  axiosApi.put(`/posts/${incomingData.id}`, {
    ...incomingData,
    updated_at: new Date().toISOString(),
  });
};

//** DELETE REQUESTS */

const axiosPostDelete = async ({ id }) => {
  axiosApi.delete(`/posts/${id}`, {
    id,
  });
};

export {
  axiosLogin,
  axiosRegister,
  axiosPost,
  axiosPostsGet,
  axiosGetSinglePost,
  axiosPostUpdate,
  axiosPostDelete,
};
