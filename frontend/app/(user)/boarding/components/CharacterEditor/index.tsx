"use client";

// Next & React stuff
import { useAppSelector } from "@/app/lib/hooks";
import Image from "next/image";

// Headless UI
import { Tab } from "@headlessui/react";

// Components
import Character from "@/app/(user)/2d_components/Character";

// Tabs
import BodyTab from "./Tabs/BodyTab";
import HairTab from "./Tabs/HairTab";
import FaceTab from "./Tabs/FaceTab";
import EyeTab from "./Tabs/EyeTab";

const CharacterEditor = () => {
  const characterData = useAppSelector((state) => state.characterEditorSlice);

  const tabClass = "p-6";

  return (
    <div className="w-full h-[1024px] mt-4 rounded-2xl flex gap-8 relative overflow-hidden">
      <Image
        src="/images/boarding_bg.webp"
        alt=""
        className="object-cover object-left filter blur-sm -z-10"
        sizes="100%"
        priority={true}
        fill
      />

      <div className="relative z-0 scale-75 mx-auto">
        <Character data={characterData} />
      </div>

      <div className="flex gap-10">
        <Tab.Group>
          <Tab.Panels className="bg-white my-20 rounded-lg min-w-[640px] shadow-lg">
            <Tab.Panel className={tabClass}>
              <h1 className="text-center">Body</h1>
              <BodyTab />
            </Tab.Panel>
            <Tab.Panel className={tabClass}>
              <h1 className="text-center">Face</h1>
              <FaceTab />
            </Tab.Panel>
            <Tab.Panel className={tabClass}>
              <h1 className="text-center">Hair</h1>
              <HairTab />
            </Tab.Panel>
            <Tab.Panel className={tabClass}>
              <h1 className="text-center">Eyebrow</h1>
            </Tab.Panel>
            <Tab.Panel className={tabClass}>
              <h1 className="text-center">Eyes</h1>
              <EyeTab />
            </Tab.Panel>
          </Tab.Panels>
          <Tab.List className="flex flex-col justify-center gap-6 bg-white min-w-[280px]">
            <Tab>Body</Tab>
            <Tab>Face</Tab>
            <Tab>Hair</Tab>
            <Tab>Eyebrows</Tab>
            <Tab>Eyes</Tab>
            <Tab>Nose</Tab>
            <Tab>Mouth</Tab>
          </Tab.List>
        </Tab.Group>
      </div>
    </div>
  );
};

export default CharacterEditor;
