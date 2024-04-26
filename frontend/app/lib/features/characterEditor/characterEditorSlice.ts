import { createSlice } from "@reduxjs/toolkit";

const initState = {
  part: false,
};

const characterEditorSlice = createSlice({
  name: "characterEditorSlice",
  initialState: initState,
  reducers: {
    changePart: (state, action) => {
      return (state.part = true);
    },
  },
});

export const { changePart } = characterEditorSlice.actions;
export default characterEditorSlice.reducer;
