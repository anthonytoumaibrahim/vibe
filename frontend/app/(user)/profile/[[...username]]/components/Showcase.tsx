"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/lib/store";

import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import Draggable from "react-draggable";
import Character from "@/app/(user)/2d_components/Character";
import Button from "@/components/Button";
import AboutMeEditor from "./AboutMeEditor";
import { MdEdit } from "react-icons/md";
import { Transition } from "@headlessui/react";

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
  const dispatch = useAppDispatch();
  const bioSelector: any = useAppSelector((state) => state.aboutMeEditorSlice);

  const [isEditingBio, setIsEditingBio] = useState(false);

  const characterRef = useRef(null);

  useEffect(() => {
    dispatch({
      type: "aboutMeEditorSlice/updateData",
      payload: bio,
    });
  }, []);

  return (
    <div className="w-full relative z-0 h-[640px] rounded-lg overflow-hidden flex p-12">
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

      <div className="p-6 py-10 bg-black/45 backdrop-blur-lg rounded-lg w-full max-w-lg z-0 ml-auto relative overflow-y-auto">
        {isOwner && (
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
        )}
        {isEditingBio ? (
          <AboutMeEditor />
        ) : !bioSelector.content ? (
          <div className="text-white h-full flex flex-col gap-4 items-center justify-center text-center">
            {isOwner ? (
              <>
                <h3>Your biography is empty!</h3>
                <p>
                  Write something cool here to introduce yourself to others.
                </p>
                <Button
                  icon={MdEdit}
                  variant="filled"
                  color="primary"
                  size="regular"
                  onClick={() => setIsEditingBio(!isEditingBio)}
                >
                  Start editing now
                </Button>
              </>
            ) : (
              <>
                <h3>This user hasn&apos;t written their biography yet.</h3>
              </>
            )}
          </div>
        ) : (
          <Transition
            appear={true}
            show={true}
            enter="transition-transform transition-opacity duration-700"
            enterFrom="opacity-0 -translate-x-1/2"
            enterTo="opacity-100 translate-x-none"
            as={Fragment}
          >
            <div
              dangerouslySetInnerHTML={{ __html: bioSelector.content }}
              className="prose prose-invert prose-base p-5 focus:outline-none max-w-none"
            ></div>
          </Transition>
        )}
      </div>
    </div>
  );
};

export default Showcase;
