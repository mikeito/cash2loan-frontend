import { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAddNewPostMutation } from "./postApiSlice";

import { useDispatch, useSelector } from "react-redux";
import { axiosPost } from "../../app/utils/axios/allRequests";
import { selectCurrentUser } from "../auth/authSlice";
// import { setCredentials } from "./authSlice";
// import { useLoginMutation } from "./authApiSlice";

const AddPost = () => {
  const [addNewPost, { isLoading }] = useAddNewPostMutation();

  const user = useSelector(selectCurrentUser)

  const navigate = useNavigate();

  // get user id here using selector

  const titleRef = useRef();
  const errRef = useRef();

  const [title, setTitle] = useState("");
  const [textContent, setContent] = useState("");
  const [picture, setImage] = useState(null);
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    titleRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [title, textContent, picture]);

  const canSave = [title, textContent, picture].every(Boolean) && !isLoading;

  const handleSubmit = async (e) => {
    e.preventDefault();
    var file_size = picture.size / 1024 / 1024; // in MB

    if(file_size > 1) {
      setErrMsg("Image should not be more than 1MB.")
      return
    }
    console.log([picture]);
    console.log([process.env.REACT_APP_BACKEND_API_URL]);
    const userid = 1;
    const formData = new FormData();
    const blob = new Blob([picture], {type: picture.type,});
    formData.append('title', title);
    formData.append('description', textContent);
    // formData.append('user_id', Number(user?.id));
    formData.append('user_id', Number(userid));
    formData.append('image_path', picture);
    // formData.append('image_path', blob);

    // console.info([blob]);

    // for (var pair of formData.entries()) {
    //   console.log(pair[0]+ ', ' + pair[1]); 
    // }

    if (canSave) {
      try {
        // await addNewPost({ title: title, description: textContent, image_path: blob }).unwrap();
        // await addNewPost({ formData }).unwrap();
        // await addNewPost(formData);
        const postData = await axiosPost(formData);

        setTitle("");
        setContent("");
        setImage(null);
        navigate("/");
      } catch (err) {
        console.error("Failed to save the post", err);
      }
    }
  };

  const handleTitleInput = (e) => setTitle(e.target.value);
  const handlePwdInput = (e) => setContent(e.target.value);
  const handleImageInput = (e) => setImage(e.target.files[0]);

  const content = isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <div>
          <h2 class="my-6 text-center text-3xl font-extrabold text-gray-900">
            Create a Post
          </h2>
          <p ref={errRef} className={errMsg ? "block text-center text-red-600 font-bold" : "hidden"}>{errMsg}</p>
        </div>
        <form
          class="mt-8 space-y-6"
          action="#"
          method="POST"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <input type="hidden" name="remember" value="true" />
          <div class="rounded-md space-y-3">
            <div>
              <label for="title" className="text-gray-800">
                Title
              </label>
              <input
                id="title"
                name="title"
                type="text"
                ref={titleRef}
                value={title}
                onChange={handleTitleInput}
                required
                class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Post title"
              />
            </div>
            <div>
              <label for="content" className="text-gray-800">
                Content
              </label>
              <textarea
                id="content"
                name="content"
                rows="4"
                onChange={handlePwdInput}
                value={textContent}
                required
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your content..."
              />
            </div>
            <div>
              <label class="block">
                <span class="sr-only">Choose File</span>
                <input
                  type="file"
                  onChange={handleImageInput}
                  class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
              </label>
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit post
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  return content;
};
export default AddPost;
