"use client";

import Part from "../../2d_components/Part";

const Character = ({ body = 1, hair = 1 }: { body: number; hair: number }) => {
  return (
    <>
      <Part type="hair" center={true} id={hair} />
      <Part type="face" id={1} center={true} />
      <Part type="eyebrow" id={5} center={true} />
      <Part type="eye" center={true} id={5} />
      <Part type="nose" center={true} id={3} />
      <Part type="mouth" center={true} id={6} />
      <Part type="body" id={body} />
    </>
  );
};

export default Character;
