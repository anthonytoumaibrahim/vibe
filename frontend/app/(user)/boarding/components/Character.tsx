"use client";

import Part from "../../2d_components/Part";

const Character = ({ body = 1, hair = 1 }: { body: number; hair: number }) => {
  return (
    <>
      <Part type="hair" center={true} id={hair} fill="#b38b67" />
      <Part type="face" id={1} center={true} fill="#f0b8a0" />
      <Part type="eyebrow" id={5} center={true} />
      <Part type="eye" center={true} id={5} />
      <Part type="nose" center={true} id={3} />
      <Part type="mouth" center={true} id={6} />
      <Part type="body" id={body} fill="#f0b8a0" />
    </>
  );
};

export default Character;
