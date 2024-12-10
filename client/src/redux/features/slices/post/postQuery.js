import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = import.meta.env.VITE_API_URL;

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    // Fetch all posts (without filters)
    getAllPosts: builder.query({
      query: () => "/api/posts",
    }),

    // Fetch posts with dynamic filters
    getFilteredPosts: builder.query({
      query: (filters = {}) => {
        // Convert filters object into query parameters
        const queryParams = new URLSearchParams();

        // Add filters to the query string dynamically
        Object.entries(filters).forEach(([key, value]) => {
          if (typeof value === "object" && value.from && value.to) {
            // Handle date ranges or other complex filters
            queryParams.append(`${key}[from]`, value.from);
            queryParams.append(`${key}[to]`, value.to);
          } else {
            queryParams.append(key, value);
          }
        });

        // Return the query with the dynamically built query string
        return `/api/posts?${queryParams.toString()}`;
      },
    }),

    // Create or update a post
    updatePost: builder.mutation({
      query: ({ id, updatedPost }) => ({
        url: `/api/posts/${id}`,
        method: "PUT", // PUT for update
        body: updatedPost, // The post data to update
      }),
    }),

    // Delete a specific post
    deletePost: builder.mutation({
      query: (id) => ({
        url: `/api/posts/${id}`,
        method: "DELETE", // DELETE for removal
      }),
    }),
  }),
});

// Export the hooks for use in components
export const {
  useGetAllPostsQuery,
  useGetFilteredPostsQuery,
  useUpdatePostMutation,
  useDeletePostMutation,
} = postsApi;
