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
  },
});

export const { initializeData } = postsSlice.actions;
export default postsSlice.reducer;
