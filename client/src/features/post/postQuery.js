import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"; // Ensure correct import

export const postsApi = createApi({
  reducerPath: "postsApi", // Ensure unique reducerPath
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: () => "/api/posts",
    }),
  }),
});

export const { useGetAllPostsQuery } = postsApi; // Ensure proper export
