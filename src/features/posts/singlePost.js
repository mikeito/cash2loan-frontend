import { useSelector } from 'react-redux'
import { selectPostById } from './postSlice'

// import PostAuthor from "./postAuthor";
import TimeAgo from "./timeAgo";

import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SinglePostPage = () => {
    const { id } = useParams()

    const post = useSelector((state) => selectPostById(state, 1))

    console.log('----------');
    // console.log('id is: '+id);
    console.log([post]);

    if (!post) {
        return (
            <section className='container my-7 mx-auto flex justify-center'>
                <h2 className='font-thin'>Post not found!</h2>
            </section>
        )
    }

    return (
        <article className='container mx-auto'>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <p className="postCredit">
                <Link to={`/post/edit/${post.id}`}>Edit Post</Link>
                {/* <PostAuthor userId={post.userId} /> */}
                <TimeAgo timestamp={post.date} />
            </p>
            {/* <ReactionButtons post={post} /> */}
        </article>
    )
}

export default SinglePostPage