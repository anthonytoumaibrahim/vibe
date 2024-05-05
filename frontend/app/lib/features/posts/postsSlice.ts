"use client";
import { createSlice } from "@reduxjs/toolkit";

const initState: any = [];

const postsSlice = createSlice({
  name: "postsSlice",
  initialState: initState,
  reducers: {
    initializeData: (state, action) => {
      return action.payload;
    },
    addPost: (state, action) => {
      return state.push(action.payload);
    },
    deletePost: (state, action) => {
      return state.filter((post) => post.id !== action.payload);
    },
    likePost: (state, action) => {
      return state.map((post) => {
        const { likes_count, liked_by_user } = post;
        return post.id === action.payload
          ? {
              ...post,
              liked_by_user: !liked_by_user,
              likes_count: liked_by_user ? likes_count - 1 : likes_count + 1,
            }
          : post;
      });
    },
  },
});

export const { initializeData, likePost } = postsSlice.actions;
export default postsSlice.reducer;
