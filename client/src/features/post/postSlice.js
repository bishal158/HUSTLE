import { createSlice } from "@reduxjs/toolkit";




const postSlice = createSlice({
    name: 'posts',
    initialState: [],
    reducers: {
        addPost: (state, action) => {
            state.push(action.payload);
        },
        removePost: (state, action) => {
            state = state.filter(post => post.id!== action.payload);
        },
        updatePost: (state, action) => {
            state = state.map(post => post.id === action.payload.id? action.payload : post);
        }
    }
})


export default postSlice.reducer;