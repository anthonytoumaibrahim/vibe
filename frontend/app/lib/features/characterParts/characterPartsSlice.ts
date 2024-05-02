"use client";
import { createSlice } from "@reduxjs/toolkit";

const initState = {};

const characterPartsSlice = createSlice({
  name: "characterPartsSlice",
  initialState: initState,
  reducers: {
    initializeData: (state, action) => {
      return (state = action.payload);
    },
    purchase: (state: any, action) => {
      const { type, id } = action.payload;
      state[type] = state?.[type]?.map((part: any) =>
        part.server_id === id
          ? {
              ...part,
              is_purchased: true,
            }
          : part
      );
    },
  },
});

export const { initializeData, purchase } = characterPartsSlice.actions;
export default characterPartsSlice.reducer;
