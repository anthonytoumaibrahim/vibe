"use client";

import { toCanvas } from "html-to-image";

// Next & React stuff
import { Fragment, useRef, useState, useEffect } from "react";
import { useAppDispatch } from "@/app/lib/store";
import { useAppSelector } from "@/app/lib/hooks";
import { saveCharacter } from "../../actions";
import { removeTransparentBg } from "@/app/lib/utils";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

// Headless UI
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

// Components
import Image from "next/image";
import Character, { PartsType } from "@/app/(user)/2d_components/Character";
import Button from "@/components/Button";
import Zoom from "./Zoom";
import PartTab from "./PartTab";
import BoardingModal from "./BoardingModal";
import AI from "./AI";
import TabBullet from "./svg/tab.svg";

interface CharacterEditorProps {
  data?: Record<PartsType, { id: number; fill?: string }> | undefined;
  parts: any;
  colors?: any;
  is_premium?: boolean;
  is_boarding?: boolean;
}

import { tabs } from "../../data";

const CharacterEditor = ({
  data,
  parts,
  colors = [],
  is_premium = false,
  is_boarding = false,
}: CharacterEditorProps) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const characterData = useAppSelector((state) => state.characterEditorSlice);
  const [zoom, setZoom] = useState(0.85);
  const [is2DLoading, setIs2DLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [boardingModal, showBoardingModal] = useState(false);

  const characterRef = useRef<any>(null);

  const save = async () => {
    setIsLoading(true);

    await toCanvas(characterRef.current, {
      // filter: (node: HTMLElement) => {
      //   return !node.classList?.contains("2d-body");
      // },
      height: 340,
    })
      .then(async (canvas) => {
        const url = removeTransparentBg(canvas);
        const response = await saveCharacter({
          data: characterData,
          avatar: url,
        });
      })
      .catch((error) => toast.error("Could not save. Please try again."));

    if (is_boarding) {
      router.push("/home");
    }
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
        hair: { id: data?.hair?.id ?? 1, fill: data?.hair?.fill ?? "#c73030" },
        beard: {
          id: data?.beard?.id ?? 0,
          fill: data?.beard?.fill ?? "#c73030",
        },
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

  const updateCharacterAI = (data) => {
    dispatch({
      type: "characterEditorSlice/initializeData",
      payload: data,
    });
  };

  return (
    <>
      {boardingModal && (
        <BoardingModal
          onAccept={() => save()}
          onCancel={() => showBoardingModal(false)}
          disabled={isLoading}
        />
      )}
      <div className="w-full h-screen min-h-[720px] max-h-[1024px] mt-4 rounded-2xl flex gap-8 relative overflow-hidden dark:after:w-full dark:after:h-full dark:after:absolute dark:after:bg-slate-900/20 dark:after:-z-10">
        <Image
          src="/images/boarding_bg.webp"
          alt=""
          className="object-cover object-left filter blur-sm -z-10"
          sizes="100%"
          priority={true}
          fill
        />
        <div className="flex flex-col gap-4 absolute top-4 left-4 z-10 items-center">
          <AI
            handleCharacterUpdate={(data) => updateCharacterAI(data)}
            isPremium={is_premium}
          />
          <Zoom handleZoom={(type: string) => handleZoom(type)} zoom={zoom} />
        </div>
        <div className="w-full h-full flex items-center justify-center pt-40">
          {!is2DLoading && (
            <Character data={characterData} scale={zoom} ref={characterRef} />
          )}
        </div>
        <div className="flex gap-10">
          <TabGroup as={Fragment} vertical>
            <TabPanels className="bg-white dark:bg-slate-900 relative rounded-lg md:w-[320px] xl:w-[540px] 2xl:w-[640px] my-6 2xl:my-20 shadow-lg">
              {tabs.map((tab, tabIndex) => {
                const { name, type, optional } = tab;
                return (
                  <TabPanel key={tabIndex} className="h-full">
                    <PartTab
                      colors={colors?.[type]}
                      type={type}
                      is_premium={is_premium}
                      optional={optional}
                    />
                  </TabPanel>
                );
              })}
            </TabPanels>
            <TabList className="flex relative z-0 flex-col p-8 2xl:p-10 gap-6 2xl:gap-8 bg-white/75 dark:bg-black/75 backdrop-blur-md xl:min-w-[240px]">
              {tabs.map((tab, tabIndex) => {
                const { name } = tab;
                return (
                  <Tab key={tabIndex} as={Fragment}>
                    {({ selected }) => (
                      <button
                        className={`${
                          selected
                            ? "text-primary-main dark:text-white scale-110"
                            : "text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white"
                        } text-lg md:text-xl 2xl:text-2xl font-bold flex gap-4 items-center outline-none transition-colors duration-200`}
                      >
                        <TabBullet className="shrink-0 hidden lg:block w-9 h-9 2xl:w-11 2xl:h-11" />
                        {name}
                      </button>
                    )}
                  </Tab>
                );
              })}
              <Button
                className="mt-auto"
                onClick={() => (is_boarding ? showBoardingModal(true) : save())}
                loading={isLoading}
              >
                Save
              </Button>
            </TabList>
          </TabGroup>
        </div>
      </div>
    </>
  );
};

export default CharacterEditor;
