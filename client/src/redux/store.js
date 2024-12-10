import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./features/slices/post/postSlice.js";
import { postsApi } from "./features/slices/post/postQuery.js";
import authSlice from './features/slices/auth/authSlice';

const store = configureStore({
  reducer: {
    posts: postSlice,
    auth: authSlice,
    [postsApi.reducerPath]: postsApi.reducer,
  },
  // Add middleware for API cache and revalidation
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
});

export default store;
