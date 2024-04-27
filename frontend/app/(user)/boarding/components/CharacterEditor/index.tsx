"use client";

// Next & React stuff
import { useAppSelector } from "@/app/lib/hooks";
import { useState } from "react";
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
import NoseTab from "./Tabs/NoseTab";
import EyebrowTab from "./Tabs/EyebrowTab";

const CharacterEditor = () => {
  const characterData = useAppSelector((state) => state.characterEditorSlice);
  const [zoom, setZoom] = useState(2);

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

      <input
        type="range"
        step={0.01}
        max={2}
        value={zoom}
        onChange={(e) => setZoom(e.target.value)}
      />

      <Character
        data={characterData}
        className="mx-auto origin-top mt-10"
        scale={zoom}
      />

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
              <h1 className="text-center">Eyebrows</h1>
              <EyebrowTab />
            </Tab.Panel>
            <Tab.Panel className={tabClass}>
              <h1 className="text-center">Eyes</h1>
              <EyeTab />
            </Tab.Panel>
            <Tab.Panel className={tabClass}>
              <h1 className="text-center">Nose</h1>
              <NoseTab />
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
