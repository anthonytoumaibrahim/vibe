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
        axis="both"
        nodeRef={characterRef}
        defaultPosition={{ x: 0, y: 0 }}
      >
        <div ref={characterRef}>
          <Character data={character_data} />
        </div>
      </Draggable>
    </section>
  );
};

export default Showcase;
