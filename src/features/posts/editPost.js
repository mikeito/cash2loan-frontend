import { useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { getSinglePost, updatePost } from "../../app/utils/axios/allRequests";
import userStore from "../../app/store/userStore"; 
import Loading from "../../components/loading";

const EditPostForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = userStore((state) => state.user)

  const titleRef = useRef();
  const errRef = useRef();

  const [title, setTitle] = useState();
  const [textContent, setContent] = useState();
  const [picture, setImage] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const { data: post, isLoading, isError, error, isSuccess } = useQuery(["post", { id }], getSinglePost,
      {
        onSuccess: () => {
          console.log('RAAANNNNNNNNNNNNNNN;;;;;;;;;');
          setTitle(post?.title)
          setContent(post?.description)
        }
      }
  )
  const { mutateAsync, isLoading: isMutating } = useMutation(updatePost)

  const submitUpdate = async (key_id, form_data) => {
    await mutateAsync( { id: key_id, data: form_data })
    navigate("/post/"+id)
  }

  const handleTitleInput = (e) => setTitle(e.target.value);
  const handlePwdInput = (e) => setContent(e.target.value);
  const handleImageInput = (e) => setImage(e.target.files[0]);

  const canSave = [title, textContent].every(Boolean) && !isLoading;

  const handleSubmit = async (e) => {
    e.preventDefault();
    var file_size = picture?.size / 1024 / 1024; // in MB

    if(file_size > 1) {
      setErrMsg("Image should not be more than 1MB.")
      return
    }
    // const userid = 1;
    const formData = new FormData();
    // formData.append('id', id);
    formData.append('title', title);
    formData.append('description', textContent);
    // formData.append('user_id', Number(user?.id));
    formData.append('email', user?.username);
    formData.append('image_path', picture)
    // formData.append('old_image_path', post.image_path);


    if (canSave) {
      try {
        // addPostMutation.mutate(formData)
        submitUpdate(id, formData);

        setTitle("");
        setContent("");
        setImage("");
        // navigate("/");
      } catch (err) {
        console.error("Failed to save the post", err);
      }
    }
  };


  if (isLoading) {
    <Loading />
  }

  else if(isError) {

  }
  else if(isSuccess) {
    return (
      <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full space-y-8">
          <div>
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Edit Post
            </h2>
            <p
              ref={errRef}
              className={errMsg ? "errmsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>
          </div>
          <form
            class="mt-8 space-y-6"
            action="#"
            method="POST"
            onSubmit={handleSubmit}
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
                  placeholder="Email address"
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
  }
};

export default EditPostForm;
