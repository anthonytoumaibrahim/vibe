import { createSlice } from "@reduxjs/toolkit";

const initState = {
  token: null,
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState: initState,
  reducers: {
    addUser: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { addUser } = userSlice.actions;
