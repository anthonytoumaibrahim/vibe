"use client";

import Part from "./Part";

interface CharacterProps {
  data: Record<
    | "body"
    | "hair"
    | "face"
    | "eyebrow"
    | "eye"
    | "eyeglasses"
    | "nose"
    | "mouth",
    { id: number; fill: string }
  >;
  className?: string;
  scale?: number;
}

const Character = ({ data, scale = 1, className = "" }: CharacterProps) => {
  return (
    <div className={`relative z-0 ${className}`} style={{ scale }}>
      <Part type="hair" center={true} id={data.hair.id} fill={data.hair.fill} />
      <Part type="face" id={data.face.id} center={true} fill={data.body.fill} />
      <Part
        type="eyebrow"
        id={data.eyebrow.id}
        fill={data.eyebrow.fill}
        center={true}
      />
      <Part type="eye" center={true} id={data.eye.id} fill={data.eye.fill} />
      {data.eyeglasses?.id && (
        <Part
          type="eyeglasses"
          id={data.eyeglasses?.id}
          fill={data.eyeglasses?.fill}
          center={true}
        />
      )}
      <Part type="nose" center={true} id={data.nose.id} fill={data.body.fill} />
      <Part
        type="mouth"
        center={true}
        id={data.mouth.id}
        fill={data.mouth.fill}
      />
      <Part type="body" center={true} id={data.body.id} fill={data.body.fill} />
    </div>
  );
};

export default Character;
