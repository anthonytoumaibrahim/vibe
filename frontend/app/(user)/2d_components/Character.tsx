"use client";

import { ForwardedRef, forwardRef } from "react";

import Part from "./Part";

export type PartsType =
  | "body"
  | "hair"
  | "beard"
  | "face"
  | "eyebrow"
  | "eye"
  | "eyeglasses"
  | "nose"
  | "mouth";

interface CharacterProps {
  data: Record<PartsType, { id: number; fill: string }> | any;
  className?: string;
  scale?: number;
}

const Character = forwardRef(
  (
    { data, scale = 1, className = "" }: CharacterProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => (
    <div
      className={`relative z-0 ${className} w-[380px] h-[820px] 2xl:h-[1100px] origin-top`}
      style={{ scale }}
      ref={ref}
    >
      <Part
        type="hair"
        center={true}
        id={data?.hair?.id ?? 1}
        fill={data?.hair?.fill ?? "#c73030"}
      />
      {data?.beard?.id ? (
        <Part
          type="beard"
          id={data?.beard?.id}
          fill={data?.beard?.fill}
          color={data?.beard?.fill}
          center={true}
        />
      ) : (
        ""
      )}
      <Part
        type="face"
        id={data?.face?.id ?? 1}
        center={true}
        fill={data?.body?.fill ?? "#df9777"}
      />
      <Part
        type="eyebrow"
        id={data?.eyebrow?.id ?? 5}
        fill={data?.eyebrow?.fill ?? "#c73030"}
        center={true}
      />
      <Part
        type="eye"
        center={true}
        id={data?.eye?.id ?? 5}
        fill={data?.eye?.fill ?? "#72A0C1"}
        color={data?.body?.fill ?? "#df9777"}
      />
      {data?.eyeglasses?.id ? (
        <Part
          type="eyeglasses"
          id={data?.eyeglasses?.id}
          fill={data?.eyeglasses?.fill}
          color={data?.eyeglasses?.fill}
          center={true}
        />
      ) : (
        ""
      )}
      <Part
        type="nose"
        center={true}
        id={data?.nose?.id ?? 4}
        fill={data?.body?.fill ?? "#df9777"}
      />
      <Part
        type="mouth"
        center={true}
        id={data?.mouth?.id ?? 6}
        fill={data?.mouth?.fill ?? "#ed7172"}
      />
      <Part
        type="body"
        center={true}
        id={data?.body?.id ?? 3}
        fill={data?.body?.fill ?? "#df9777"}
        className="2d-body"
      />
    </div>
  )
);

Character.displayName = "Character";

export default Character;
