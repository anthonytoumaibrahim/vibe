"use client";

import Character from "@/app/(user)/2d_components/Character";
import Button from "@/components/Button";
import Image from "next/image";
import { useRef, useState } from "react";
import Draggable from "react-draggable";
import { MdEdit } from "react-icons/md";
import AboutMeEditor from "./AboutMeEditor";

interface ShowcaseProps {
  characterData: object;
  isOwner: boolean;
  bio?: string;
}

const Showcase = ({
  characterData,
  isOwner = false,
  bio = "",
}: ShowcaseProps) => {
  const [isEditingBio, setIsEditingBio] = useState(false);

  const characterRef = useRef(null);

  return (
    <section className="w-full relative z-0 h-[640px] rounded-lg overflow-hidden flex p-12">
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
      >
        <Character data={characterData} ref={characterRef} />
      </Draggable>

      <div className="p-6 py-10 bg-white/35 backdrop-blur-sm rounded-lg w-full max-w-lg z-0 ml-auto relative overflow-y-auto">
        <Button
          icon={MdEdit}
          variant="link"
          color="white"
          size="small"
          className="text-sm !absolute top-2 right-2"
          onClick={() => setIsEditingBio(!isEditingBio)}
        >
          Edit
        </Button>
        {isEditingBio ? (
          <AboutMeEditor bio={bio} />
        ) : (
          <div
            dangerouslySetInnerHTML={{ __html: bio }}
            className="prose prose-invert prose-base p-5 focus:outline-none max-w-none"
          ></div>
        )}
      </div>
    </section>
  );
};

export default Showcase;
