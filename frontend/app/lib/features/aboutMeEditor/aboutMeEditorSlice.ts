"use client";
import { createSlice } from "@reduxjs/toolkit";

const initState = {
  content: "",
};

const aboutMeEditorSlice = createSlice({
  name: "aboutMeEditorSlice",
  initialState: initState,
  reducers: {
    updateData: (state, action) => {
      state.content = action.payload;
    },
  },
});

export const { updateData } = aboutMeEditorSlice.actions;
export default aboutMeEditorSlice.reducer;
