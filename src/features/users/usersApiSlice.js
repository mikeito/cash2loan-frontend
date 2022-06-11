import { apiSlice } from "../../app/api/apiSlice"

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getUsers: builder.query({
            query: () => '/users',
            keepUnusedDataFor: 5,   // keeps data for 5s when out of component. redo query after 5s
        })
    })
})

export const {
    useGetUsersQuery
} = usersApiSlice 