"use client";

import { toCanvas } from "html-to-image";

// Next & React stuff
import { Fragment, useRef, useState, useEffect } from "react";
import { useAppDispatch } from "@/app/lib/store";
import { useAppSelector } from "@/app/lib/hooks";
import { saveCharacter } from "../../actions";
import { removeTransparentBg } from "@/app/lib/utils";
import { toast } from "react-hot-toast";

// Headless UI
import { Tab } from "@headlessui/react";

// Components
import Image from "next/image";
import Character, { PartsType } from "@/app/(user)/2d_components/Character";
import Button from "@/components/Button";
import Zoom from "./Zoom";
import PartTab from "./PartTab";

const tabs = [
  {
    name: "Body",
    type: "body",
  },
  {
    name: "Face",
    type: "face",
  },
  {
    name: "Hair",
    type: "hair",
    optional: true,
  },
  {
    name: "Eyebrows",
    type: "eyebrow",
    optional: true,
  },
  {
    name: "Eyes",
    type: "eye",
  },
  {
    name: "Nose",
    type: "nose",
  },
  {
    name: "Mouth",
    type: "mouth",
  },
  {
    name: "Eyeglasses",
    type: "eyeglasses",
    optional: true,
  },
];

const CharacterEditor = ({
  data,
  parts,
  colors = [],
  is_premium = false,
}: {
  data?: Record<PartsType, { id: number; fill?: string }> | undefined;
  parts: any;
  colors?: any;
  is_premium?: boolean;
}) => {
  const dispatch = useAppDispatch();
  const characterData = useAppSelector((state) => state.characterEditorSlice);
  const [zoom, setZoom] = useState(0.85);
  const [is2DLoading, setIs2DLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const characterRef = useRef<any>(null);

  const save = async () => {
    setIsLoading(true);

    await toCanvas(characterRef.current, {
      filter: (node: HTMLElement) => {
        return !node.classList?.contains("2d-body");
      },
    })
      .then(async (canvas) => {
        const url = removeTransparentBg(canvas);
        const response = await saveCharacter({
          data: characterData,
          avatar: url,
        });
      })
      .catch((error) => toast.error("Could not save. Please try again."));

    setIsLoading(false);
  };

  const handleZoom = (type: string) => {
    setZoom((prev) => {
      let val = type === "+" ? prev + 0.15 : prev - 0.15;
      localStorage.setItem("editor_zoom", val.toString());
      return val;
    });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const lsZoom = localStorage.getItem("editor_zoom");
      if (lsZoom) {
        setZoom(parseFloat(lsZoom));
      }
    }
    dispatch({
      type: "characterEditorSlice/initializeData",
      payload: {
        body: { id: data?.body?.id ?? 3, fill: data?.body?.fill ?? "#df9777" },
        face: { id: data?.face?.id ?? 1 },
        hair: { id: data?.hair?.id ?? 3, fill: data?.hair?.fill ?? "#c73030" },
        eye: { id: data?.eye?.id ?? 5, fill: data?.eye?.fill ?? "#72A0C1" },
        eyebrow: {
          id: data?.eyebrow?.id ?? 5,
          fill: data?.eyebrow?.fill ?? "#c73030",
        },
        nose: { id: data?.nose?.id ?? 4 },
        mouth: {
          id: data?.mouth?.id ?? 6,
          fill: data?.mouth?.fill ?? "#ed7172",
        },
        eyeglasses: {
          id: data?.eyeglasses?.id ?? 0,
          fill: data?.eyeglasses?.fill,
        },
      },
    });
    dispatch({
      type: "characterPartsSlice/initializeData",
      payload: parts,
    });
    setIs2DLoading(false);
  }, []);

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

      <Zoom handleZoom={(type: string) => handleZoom(type)} zoom={zoom} />

      <div className="w-full h-full flex items-center justify-center pt-40">
        {!is2DLoading && (
          <Character data={characterData} scale={zoom} ref={characterRef} />
        )}
      </div>

      <div className="flex gap-10">
        <Tab.Group vertical>
          <Tab.Panels className="bg-white dark:bg-slate-950 relative rounded-lg md:min-w-[320px] xl:min-w-[640px] my-20 shadow-lg p-6">
            {tabs.map((tab, tabIndex) => {
              const { name, type, optional } = tab;
              return (
                <Tab.Panel key={tabIndex}>
                  <h1 className="text-center">{name}</h1>
                  <PartTab
                    colors={colors?.[type]}
                    type={type}
                    is_premium={is_premium}
                    optional={optional}
                  />
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
