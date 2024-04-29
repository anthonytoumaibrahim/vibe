"use client";

import { toPng } from "html-to-image";

// Next & React stuff
import { useAppSelector } from "@/app/lib/hooks";
import { Fragment, useRef, useState } from "react";
import Image from "next/image";
import { saveCharacter } from "../../actions";

// Headless UI
import { Tab } from "@headlessui/react";

// Components
import Character from "@/app/(user)/2d_components/Character";
import Button from "@/components/Button";

// Tabs
import BodyTab from "./Tabs/BodyTab";
import HairTab from "./Tabs/HairTab";
import FaceTab from "./Tabs/FaceTab";
import EyeTab from "./Tabs/EyeTab";
import NoseTab from "./Tabs/NoseTab";
import EyebrowTab from "./Tabs/EyebrowTab";
import MouthTab from "./Tabs/MouthTab";
import EyeglassesTab from "./Tabs/EyeglassesTab";

const tabs = [
  {
    name: "Body",
    tab: BodyTab,
  },
  {
    name: "Face",
    tab: FaceTab,
  },
  {
    name: "Hair",
    tab: HairTab,
  },
  {
    name: "Eyebrows",
    tab: EyebrowTab,
  },
  {
    name: "Eyes",
    tab: EyeTab,
  },
  {
    name: "Nose",
    tab: NoseTab,
  },
  {
    name: "Mouth",
    tab: MouthTab,
  },
  {
    name: "Accessories",
    tab: EyeglassesTab,
  },
];

const CharacterEditor = () => {
  const characterData = useAppSelector((state) => state.characterEditorSlice);
  const [zoom, setZoom] = useState(0.85);
  const [isLoading, setIsLoading] = useState(false);

  const characterRef = useRef<any>(null);

  const save = async () => {
    setIsLoading(true);

    await toPng(characterRef.current, {
      // filter: (node: HTMLElement) => {
      //   return !node.classList.contains("2d-body");
      // },
      width: 380 * zoom,
      height: 1100 * zoom,
      canvasWidth: 380 * zoom,
      canvasHeight: 1100 * zoom,
    })
      .then(async (url) => {
        const response = await saveCharacter({
          data: characterData,
          avatar: url,
        });
      })
      .catch((error) => alert(error));

    setIsLoading(false);
  };

  return (
    <div className="w-full h-[1024px] mt-4 rounded-2xl flex gap-8 relative overflow-hidden dark:after:w-full dark:after:h-full dark:after:absolute dark:after:bg-slate-900/20 dark:after:-z-10">
      <Image
        src="/images/boarding_bg.webp"
        alt=""
        className="object-cover object-left filter blur-sm -z-10"
        sizes="100%"
        priority={true}
        fill
      />

      {/* <input
        type="range"
        step={0.01}
        min={0.85}
        max={2}
        value={zoom}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setZoom(parseInt(e.target.value))
        }
      /> */}

      <div className="w-full h-full flex items-center justify-center pt-40">
        <Character data={characterData} scale={zoom} ref={characterRef} />
      </div>

      <div className="flex gap-10">
        <Tab.Group vertical>
          <Tab.Panels className="bg-white dark:bg-slate-950 relative rounded-lg md:min-w-[320px] xl:min-w-[640px] my-20 shadow-lg p-6">
            {tabs.map((tab, tabIndex) => {
              const { name, tab: PartTab } = tab;
              return (
                <Tab.Panel key={tabIndex}>
                  <h1 className="text-center">{name}</h1>
                  <PartTab />
                </Tab.Panel>
              );
            })}
          </Tab.Panels>
          <Tab.List className="flex relative z-0 flex-col p-10 gap-8 bg-white/75 backdrop-blur-md xl:min-w-[280px]">
            {tabs.map((tab, tabIndex) => {
              const { name } = tab;
              return (
                <Tab key={tabIndex} as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={`${
                        selected
                          ? "text-primary-main scale-110"
                          : "text-black/40 hover:text-black"
                      } text-lg md:text-xl xl:text-2xl font-bold flex gap-4 items-center outline-none transition-colors duration-200`}
                    >
                      <svg
                        width="40"
                        height="44"
                        viewBox="0 0 40 44"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        className="hidden xl:block"
                      >
                        <path d="M18.3828 0.333212C19.1625 -0.111075 20.1232 -0.111075 20.903 0.333237L38.0256 10.0896C38.8054 10.5339 39.2857 11.355 39.2857 12.2437V31.7565C39.2857 32.6449 38.8054 33.4659 38.0256 33.9104L20.903 43.6667C20.1232 44.1111 19.1625 44.1111 18.3828 43.6667L1.26009 33.9104C0.480347 33.4659 0 32.6449 0 31.7562V12.2435C0 11.355 0.480347 10.5339 1.26009 10.0896L18.3828 0.333212Z" />
                      </svg>
                      {name}
                    </button>
                  )}
                </Tab>
              );
            })}
            <Button
              className="mt-auto"
              onClick={() => save()}
              loading={isLoading}
            >
              Save
            </Button>
          </Tab.List>
        </Tab.Group>
      </div>
    </div>
  );
};

export default CharacterEditor;
