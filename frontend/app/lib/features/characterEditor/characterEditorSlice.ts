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
      return {
        ...state,
        [type]: {
          ...state[type],
          ...data,
        },
      };
    },
  },
});

export const { initializeData, updateData } = characterEditorSlice.actions;
export default characterEditorSlice.reducer;
