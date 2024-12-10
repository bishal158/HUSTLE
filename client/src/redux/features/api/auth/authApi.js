import axiosInstance from "../../../../utils/axiosInstance";
import { createAsyncThunk } from "@reduxjs/toolkit";



//  sign up
export const signUp = createAsyncThunk(
  "auth/signUp",
  async (userDetails, thunkAPI) => {
    try {
      const response = await axiosInstance.post("/api/user/signup", userDetails);
      return response.data; // Payload for fulfilled
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to sign up"
      );
    }
  }
);

// sign in