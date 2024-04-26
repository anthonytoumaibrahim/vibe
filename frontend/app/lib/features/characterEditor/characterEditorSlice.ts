"use client";
import { createSlice } from "@reduxjs/toolkit";

const initState = {};

const characterEditorSlice = createSlice({
  name: "characterEditorSlice",
  initialState: initState,
  reducers: {
    initializeData: (state, action) => {
      return (state = action.payload);
    },
    updateData: (state, action) => {
      const { type, data } = action.payload;
      const newData = {
        ...state,
        [type]: {
          ...state[type],
          ...data,
        },
      };
      localStorage.setItem("vibe_2d_boarding", JSON.stringify(newData));
      return newData;
    },
  },
});

export const { initializeData, updateData } = characterEditorSlice.actions;
export default characterEditorSlice.reducer;
