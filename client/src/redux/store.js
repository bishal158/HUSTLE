import { configureStore } from "@reduxjs/toolkit";
import postSlice from "../features/post/postSlice.js";
import { postsApi } from "../features/post/postQuery.js";

const store = configureStore({
  reducer: {
    posts: postSlice,
    [postsApi.reducerPath]: postsApi.reducer,
  },
  // Add middleware for API cache and revalidation
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
});

export default store;
