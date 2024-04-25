"use client";

import Part from "../../2d_components/Part";

const Character = ({ body = "male_body" }: { body: string }) => {
  return (
    <>
      <Part type="hair" center={true} id={2} />
      <Part type="face" id={1} center={true} />
      <Part type="eyebrow" id={5} center={true} />
      <Part type="eye" center={true} id={5} />
      <Part type="nose" center={true} id={3} />
      <Part type="mouth" center={true} id={6} />
      <Part type="body" name={body} id={1} />
    </>
  );
};

export default Character;
