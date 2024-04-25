import { createSlice } from "@reduxjs/toolkit";

const initState = {
  body: 1,
};

export const boardingSlice = createSlice({
  name: "boarding",
  initialState: initState,
  reducers: {
    changeBodyPart: (state, action) => {},
  },
});

export const { changeBodyPart } = boardingSlice.actions;
