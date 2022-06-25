// import PostAuthor from "./postAuthor";
import TimeAgo from "./timeAgo";

import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useMutation, useQueryClient } from "react-query";

const SinglePostPage = () => {
    const { id } = useParams()
    const queryClient = useQueryClient()
    const { mutateAsync, isLoading } = useMutation()

    const removePost = async () => {
        await mutateAsync({id})
        queryClient.invalidateQueries("posts")
    }


    if (true) {
        return (
            <section className='container my-7 mx-auto flex justify-center'>
                <h2 className='font-thin'>Post not found!</h2>
            </section>
        )
    }

    // return (
    //     <div className="className='container mx-auto'">
    //         <div className="flex flex-col">
    //             <div className="flex flex-row ">
    //                 <button onClick={removePost}>
    //                     Remove
    //                 </button>
    //             </div>
    //             <article>
    //                 <h2>{post.title}</h2>
    //                 <p>{post.body}</p>
    //                 <p className="postCredit">
    //                     <Link to={`/post/edit/${post.id}`}>Edit Post</Link>
    //                     {/* <PostAuthor userId={post.userId} /> */}
    //                     <TimeAgo timestamp={post.date} />
    //                 </p>
    //                 {/* <ReactionButtons post={post} /> */}
    //             </article>
    //         </div>
    //     </div>
    // )
}

export default SinglePostPage