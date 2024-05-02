import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import characterEditorSlice from "./features/characterEditor/characterEditorSlice";
import aboutMeEditorSlice from "./features/aboutMeEditor/aboutMeEditorSlice";
import characterPartsSlice from "./features/characterParts/characterPartsSlice";

export const store = configureStore({
  reducer: {
    characterEditorSlice: characterEditorSlice,
    aboutMeEditorSlice: aboutMeEditorSlice,
    characterPartsSlice: characterPartsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
