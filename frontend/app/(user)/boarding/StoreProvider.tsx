"use client";
import { useRef } from "react";

// Redux
import { Provider } from "react-redux";
import { makeStore, AppStore } from "@/app/lib/store";
import { initializeData } from "@/app/lib/features/characterEditor/characterEditorSlice";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = makeStore();
    if (typeof window !== "undefined") {
      const localData = JSON.parse(
        localStorage.getItem("vibe_2d_boarding") ?? "{}"
      );
      if (Object.keys(localData).length > 0) {
        storeRef.current.dispatch(initializeData(localData));
      } else {
        storeRef.current.dispatch(
          initializeData({
            body: {
              id: 1,
              fill: "#df9777",
            },
            face: {
              id: 1,
            },
            hair: {
              id: 1,
              fill: "#c73030",
            },
            eye: {
              id: 5,
              fill: "#72A0C1",
            },
            eyebrow: {
              id: 5,
              fill: "#c73030",
            },
            nose: {
              id: 3,
            },
            mouth: {
              id: 6,
              fill: "red",
            },
          })
        );
      }
    }
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
