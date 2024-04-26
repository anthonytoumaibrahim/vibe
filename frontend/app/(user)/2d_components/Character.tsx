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
      <Part type="face" id={data.face.id} center={true} fill={data.body.fill} />
      <Part type="eyebrow" id={data.eyebrow.id} center={true} />
      <Part type="eye" center={true} id={data.eye.id} fill={data.eye.fill} />
      <Part type="nose" center={true} id={data.nose.id} fill={data.body.fill} />
      <Part type="mouth" center={true} id={data.mouth.id} />
      <Part type="body" id={data.body.id} fill={data.body.fill} />
    </>
  );
};

export default Character;
