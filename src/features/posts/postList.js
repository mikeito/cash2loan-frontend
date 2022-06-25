import { Link } from "react-router-dom";
import { selectAllPosts } from "./postSlice"; 
import { useSelector } from "react-redux";

const PostList = () => {
  // const {data, isError, isSuccess, error, isLoading} = useGetPostsQuery();
  const { posts } = useSelector(selectAllPosts)

  // const posts = data;
  // const dm = process.env.REACT_APP_BACKEND_API_URL;
  let domain = (new URL(process.env.REACT_APP_BACKEND_API_URL));

  console.log("888888888888888888");
  console.log(posts);
  let displayPost;
  // if(isLoading) {
  //   displayPost = <div class="text-center">
  //       <svg role="status" class="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
  //           <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
  //           <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
  //       </svg>
  //   </div>
  // }
  // if (isError) {
  //   displayPost = <div className="text-red-600 font-extrabold">{ error }</div>
  // } else {
    
  

  displayPost = posts?.map((post, index) => {
    return <Link to={"/post/"+post.id} key={index}>
    <div class="flex flex-row mb-4 bg-slate-100 rounded-xl md:p-0 dark:bg-slate-800">
      <div className="flex flex-row shrink w-4/5">
        <img
          class="w-28 h-28 md:w-48 rounded-lg"
          src={domain.origin+"/"+post.image_path}
          alt=""
        />
        <div class="my-auto text-left ml-2 space-y-1">
          <h2 className="text-lg font-bold">{ post.title }</h2>

          <div class="text-sm font-normal">
            {" "}
            {/* truncate */}
            If time is most precious, this collection of lifehacks is so so
            precious. Be more productive and optimize your life.
          </div>
        </div>
      </div>
      <div className="flex-none w-1/5">
        <button className="py-2 px-8 mt-8 ml-7 rounded-md font-medium text-black border border-gray-200 bg-white hover:bg-slate-400">
          Button
        </button>
      </div>
    </div>
    </Link>
  })
// }



  return (
    <>
      {displayPost}
    </>
  );
};

export default PostList;
