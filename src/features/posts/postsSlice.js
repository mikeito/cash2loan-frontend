import {
    createSelector,
    createEntityAdapter
} from "@reduxjs/toolkit";
import { sub } from 'date-fns';
import { apiSlice } from "../../app/api/apiSlice";

// import { store } from "../../app/store";

const postsAdapter = createEntityAdapter({
    sortComparer: (a, b) => b.date.localeCompare(a.date)
})

const initialState = postsAdapter.getInitialState()

// const userid = getState().auth.user.id;
const userid = 1;

export const postsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        //** GET POST LISTS */
        getPosts: builder.query({
            query: () => '/posts',
            transformResponse: responseData => {
                let min = 1;
                const loadedPosts = responseData.map(post => {
                    if (!post?.createdAt) post.date = sub(new Date(), { minutes: min++ }).toISOString();
                    
                    return post;
                });
                return postsAdapter.setAll(initialState, loadedPosts)
            },
            providesTags: (result, error, arg) => [
                { type: 'Post', id: "LIST" },
                ...result.ids.map(id => ({ type: 'Post', id }))
            ]
        }),
        //** GET POST BY USER ID */

        // getPostsByUserId: builder.query({
        //     query: id => `/posts/?userId=${id}`,
        //     transformResponse: responseData => {
        //         let min = 1;
        //         const loadedPosts = responseData.map(post => {
        //             if (!post?.date) post.date = sub(new Date(), { minutes: min++ }).toISOString();
        //             if (!post?.reactions) post.reactions = {
        //                 thumbsUp: 0,
        //                 wow: 0,
        //                 heart: 0,
        //                 rocket: 0,
        //                 coffee: 0
        //             }
        //             return post;
        //         });
        //         return postsAdapter.setAll(initialState, loadedPosts)
        //     },
        //     providesTags: (result, error, arg) => [
        //         ...result.ids.map(id => ({ type: 'Post', id }))
        //     ]
        // }),
        
        //** ADD or CREATE NEW POST */
        addNewPost: builder.mutation({
            query: initialPost => ({
                url: '/posts',
                method: 'POST',
                body: {
                    ...initialPost,
                    userId: Number(userid),
                    created_at: new Date().toISOString(),
                }
            }),
            invalidatesTags: [
                { type: 'Post', id: "LIST" }
            ]
        }),
        //** UPDATE POST */
        updatePost: builder.mutation({
            query: initialPost => ({
                url: `/posts/${initialPost.id}`,
                method: 'PUT',
                body: {
                    ...initialPost,
                    updated_at: new Date().toISOString()
                }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Post', id: arg.id }
            ]
        }),
        //** DELETE POST */
        deletePost: builder.mutation({
            query: ({ id }) => ({
                url: `/posts/${id}`,
                method: 'DELETE',
                body: { id }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Post', id: arg.id }
            ]
        }),
        
    })
})

export const {
    useGetPostsQuery,
    // useGetPostsByUserIdQuery,
    useAddNewPostMutation,
    useUpdatePostMutation,
    useDeletePostMutation
} = postsApiSlice



// returns the query result object
export const selectPostsResult = postsApiSlice.endpoints.getPosts.select()

// Creates memoized selector
const selectPostsData = createSelector(
    selectPostsResult,
    postsResult => postsResult.data // normalized state object with ids & entities
)

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
    selectAll: selectAllPosts,
    selectById: selectPostById,
    selectIds: selectPostIds
    // Pass in a selector that returns the posts slice of state
} = postsAdapter.getSelectors(state => selectPostsData(state) ?? initialState)
