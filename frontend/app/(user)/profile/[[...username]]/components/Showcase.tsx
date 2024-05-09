"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/lib/store";

import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import Draggable from "react-draggable";
import Character from "@/app/(user)/2d_components/Character";
import Button from "@/components/Button";
import AboutMeEditor from "./AboutMeEditor";
import BackgroundPicker from "./BackgroundPicker";
import { MdEdit } from "react-icons/md";
import { Transition } from "@headlessui/react";

interface ShowcaseProps {
  characterData: object;
  isOwner: boolean;
  isPremium?: boolean;
  bio?: string;
  backgrounds: Array<any>;
  backgroundId?: number;
}

const Showcase = ({
  characterData,
  isOwner = false,
  isPremium = false,
  bio = "",
  backgrounds,
  backgroundId,
}: ShowcaseProps) => {
  const dispatch = useAppDispatch();
  const bioSelector: any = useAppSelector((state) => state.aboutMeEditorSlice);
  const [bioShowing, setBioShowing] = useState(
    bio !== "<p></p>" && bio ? true : false
  );
  const [isEditingBio, setIsEditingBio] = useState(false);

  const characterRef = useRef(null);

  const [background, setBackground] = useState(backgroundId ?? 1);
  const backgroundObject = backgrounds?.filter(
    (bg) => bg.id === background
  )?.[0];

  useEffect(() => {
    dispatch({
      type: "aboutMeEditorSlice/updateData",
      payload: bio,
    });
  }, []);

  return (
    <div className="w-full relative z-0 h-[640px] rounded-lg overflow-hidden flex p-12">
      {isOwner && (
        <BackgroundPicker
          backgrounds={backgrounds}
          handleBackgroundUpdate={(id) => setBackground(id)}
          isPremium={isPremium}
        />
      )}
      <Image
        src={`/images/2d_backgrounds/${backgroundObject?.image_url}`}
        fill
        alt=""
        className="object-cover"
        sizes="100%"
      />
      <Character data={characterData} ref={characterRef} />

      {bioShowing ? (
        <div className="hidden lg:block p-6 pt-14 bg-black/45 backdrop-blur-lg rounded-lg w-full max-w-lg z-0 ml-auto relative overflow-y-auto">
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
      ) : (
        <>
          {isOwner && (
            <Button
              icon={MdEdit}
              variant="link"
              color="white"
              size="small"
              className="text-sm !absolute top-2 right-2"
              onClick={() => {
                setBioShowing(true);
                setIsEditingBio(!isEditingBio);
              }}
            >
              Add About Me Section
            </Button>
          )}
        </>
      )}
    </div>
  );
};

export default Showcase;
