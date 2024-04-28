"use client";
import { useRef } from "react";

// Redux
import { Provider } from "react-redux";
import { makeStore, AppStore } from "@/app/lib/store";
import { initializeData } from "@/app/lib/features/characterEditor/characterEditorSlice";
import type { PartsType } from "../2d_components/Character";

export default function StoreProvider({
  data,
  children,
}: {
  children: React.ReactNode;
  data?: Record<PartsType, { id: number; fill?: string }> | undefined;
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = makeStore();
    storeRef.current.dispatch(
      initializeData({
        body: { id: data?.body?.id ?? 3, fill: data?.body?.fill ?? "#df9777" },
        face: { id: data?.face?.id ?? 1 },
        hair: { id: data?.hair?.id ?? 3, fill: data?.hair?.fill ?? "#c73030" },
        eye: { id: data?.eye?.id ?? 5, fill: data?.eye?.fill ?? "#72A0C1" },
        eyebrow: {
          id: data?.eyebrow?.id ?? 5,
          fill: data?.eyebrow?.fill ?? "#c73030",
        },
        nose: { id: data?.nose?.id ?? 4 },
        mouth: {
          id: data?.mouth?.id ?? 6,
          fill: data?.mouth?.fill ?? "#ed7172",
        },
        eyeglasses: { id: data?.eyeglasses?.id ?? 1 },
      })
    );
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
