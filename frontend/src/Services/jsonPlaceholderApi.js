import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";


export const jsonPlaceholderApi = createApi({
    reducerPath: 'jsonPlaceholderApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com/",
    }),
    endpoints: (builder) => ({
        //Query to fetch posts
        getPosts: builder.query({ query: () => 'posts' }),
        createPosts: builder.mutation({
            query: (newPost) => ({
                url: 'posts',
                method: 'POST',
                body: newPost,
            }),
        }),
    }),
});
export const { useGetPostsQuery, useCreatePostsMutation } = jsonPlaceholderApi;