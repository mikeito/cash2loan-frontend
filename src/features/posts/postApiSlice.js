import {
    createSelector,
    createEntityAdapter,
    createSlice
} from "@reduxjs/toolkit";
import { sub } from 'date-fns';
import { apiSlice } from "../../app/api/apiSlice";

export const postsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        //** GET POST LISTS */
        getPosts: builder.query({
            query: () => '/posts',
            keepUnusedDataFor: 180,
            providesTags: ['Post'],
        }),
        
        //** ADD or CREATE NEW POST */
        addNewPost: builder.mutation({
            query: initialPost => ({
                url: '/post',
                credentials: 'include',
                method: 'POST',
                // headers: {
                //     'content-type': 'multipart/form-data; charset=utf-8; boundary=' + Math.random().toString().substr(2),
                // },
                body: initialPost
            }),
            invalidatesTags: ['Post'],
        }),
        //** UPDATE POST */
        updatePost: builder.mutation({
            query: initialPost => ({
                url: `/post/${initialPost.id}`,
                method: 'PUT',
                body: initialPost
            }),
            invalidatesTags: ['Post'],
        }),
        //** DELETE POST */
        deletePost: builder.mutation({
            query: ({ id }) => ({
                url: `/post/${id}`,
                method: 'DELETE',
                body: { id }
            }),
            invalidatesTags: ['Post'],
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