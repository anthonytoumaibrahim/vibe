"use client";

import Part from "./Part";

interface CharacterProps {
  data: Record<
    "body" | "hair" | "face" | "eyebrow" | "eye" | "nose" | "mouth",
    { id: number; fill: string }
  >;
}

const Character = ({ data }: CharacterProps) => {
  return (
    <>
      <Part type="hair" center={true} id={data.hair.id} fill={data.hair.fill} />
      <Part type="face" id={1} center={true} fill={data.body.fill} />
      <Part type="eyebrow" id={5} center={true} />
      <Part type="eye" center={true} id={data.eye.id} fill={data.eye.fill} />
      <Part type="nose" center={true} id={3} />
      <Part type="mouth" center={true} id={6} />
      <Part type="body" id={data.body.id} fill={data.body.fill} />
    </>
  );
};

export default Character;
