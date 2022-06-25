import {
    createSelector,
    createEntityAdapter,
    createSlice
} from "@reduxjs/toolkit";
import { sub } from 'date-fns';
import { apiSlice } from "../../app/api/apiSlice";
import { postsApiSlice } from "./postApiSlice";

// import { store } from "../../app/store";

// const postsAdapter = createEntityAdapter({
//     sortComparer: (a, b) => b.date.localeCompare(a.date)
// })

// const initialState = postsAdapter.getInitialState()

const postSlice = createSlice({
    name: 'posts',
    initialState: { posts: null },
    reducers: {
      // setPosts: (state, action) => {
      //   const { posts } = action.payload
      //   state.posts = posts
      // },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
          postsApiSlice.endpoints.getPosts.matchFulfilled,
          (state, { payload }) => {
            state.posts = payload
          }
        )
      },
})

export const selectAllPosts = (state) => state.posts;

export const selectPostById = (state, userId) =>
    state.posts.find(post => post.id === userId)

export default postSlice.reducer

// returns the query result object
// export const selectPostsResult = postsApiSlice.endpoints.getPosts.select()

// // Creates memoized selector
// const selectPostsData = createSelector(
//     selectPostsResult,
//     postsResult => postsResult.data // normalized state object with ids & entities
// )

//getSelectors creates these selectors and we rename them with aliases using destructuring
// export const {
//     selectAll: selectAllPosts,
//     selectById: selectPostById,
//     selectIds: selectPostIds
//     // Pass in a selector that returns the posts slice of state
// } = postsAdapter.getSelectors(state => selectPostsData(state) ?? initialState)
