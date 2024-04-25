"use client";
import { Tab } from "@headlessui/react";
import { C2DParts } from "../../2d/2d_parts";

import Image from "next/image";

const Tabs = ({ updateCharacter }) => {
  return (
    <Tab.Group>
      <Tab.Panels className="bg-white my-20 rounded-lg min-w-[640px] shadow-lg">
        <Tab.Panel className="p-6">
          <h1 className="text-center">Body</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            {C2DParts.body.map((body) => {
              const { id, name } = body;

              return (
                <div
                  key={id}
                  className="bg-slate-200 rounded-lg h-[240px] relative"
                  onClick={() =>
                    updateCharacter("body", {
                      id: id,
                    })
                  }
                >
                  <Image
                    src={`/images/2d_thumbs/body/${id}.png`}
                    fill
                    sizes="100%"
                    className="object-contain"
                    quality={100}
                    alt=""
                  />
                </div>
              );
            })}
          </div>
        </Tab.Panel>

        <Tab.Panel className="p-6">
          <h1 className="text-center">Hair</h1>

          <div className="grid grid-cols-3 gap-6 mt-4">
            {C2DParts.hair.map((body) => {
              const { id, name } = body;

              return (
                <div
                  key={id}
                  className="bg-slate-200 rounded-lg h-[159px] relative"
                  onClick={() =>
                    updateCharacter("hair", {
                      id: id,
                    })
                  }
                >
                  <Image
                    src={`/images/2d_thumbs/hair/${id}.png`}
                    fill
                    sizes="100%"
                    className="object-contain"
                    quality={100}
                    alt=""
                  />
                </div>
              );
            })}
          </div>
        </Tab.Panel>
      </Tab.Panels>
      <Tab.List className="flex flex-col justify-center gap-6 bg-white min-w-[280px]">
        <Tab>Body</Tab>
        <Tab>Hair</Tab>
        <Tab>Face</Tab>
      </Tab.List>
    </Tab.Group>
  );
};

export default Tabs;
