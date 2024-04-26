"use client";
import { createSlice } from "@reduxjs/toolkit";

const initState = {};

const characterEditorSlice = createSlice({
  name: "characterEditorSlice",
  initialState: initState,
  reducers: {
    initializeData: (state, action) => {
      if (typeof window !== "undefined") {
        const localData = JSON.parse(
          localStorage.getItem("vibe_2d_boarding") ?? "{}"
        );
        if (Object.keys(localData).length > 0) {
          return (state = localData);
        }
      }

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
