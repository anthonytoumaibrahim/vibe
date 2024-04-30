"use client";

import Character from "@/app/(user)/2d_components/Character";
import Image from "next/image";
import { useRef } from "react";
import Draggable from "react-draggable";

const Showcase = ({ character_data }: { character_data: object }) => {
  const characterRef = useRef(null);

  return (
    <section className="w-full relative h-[640px] rounded-lg overflow-hidden">
      <Image
        src="/images/profile_bg/1.webp"
        fill
        alt=""
        className="object-cover"
        sizes="100%"
      />
      <Draggable
        bounds="parent"
        nodeRef={characterRef}
        defaultPosition={{ x: 0, y: 0 }}
        onMouseDown={() => console.log("mousedown")}
      >
        <Character
          data={character_data}
          className="!absolute mt-10 handle"
          ref={characterRef}
        />
      </Draggable>
    </section>
  );
};

export default Showcase;
