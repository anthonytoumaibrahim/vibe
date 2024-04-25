"use client";

import { Tab } from "@headlessui/react";
import TabPanel from "./TabPanel";

import MaleBody from "../../2d/body/body2.svg?url";
import FemaleBody from "../../2d/body/body1.svg?url";

import Hair1 from "../../2d/hair/hair1.svg?url";
import Hair2 from "../../2d/hair/hair2.svg?url";
import Hair3 from "../../2d/hair/hair3.svg?url";

import Image from "next/image";

const Tabs = ({ setBody, setHair }) => {
  return (
    <Tab.Group>
      <Tab.Panels className="bg-white my-20 rounded-lg min-w-[640px] shadow-lg">
        <Tab.Panel className="p-6">
          <h1 className="text-center">Body</h1>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div
              className="bg-slate-200 rounded-lg h-[620px] relative"
              onClick={() => setBody(2)}
            >
              <Image src={MaleBody} fill alt="Male Body" />
            </div>
            <div
              className="bg-slate-200 rounded-lg h-[620px] relative"
              onClick={() => setBody(1)}
            >
              <Image src={FemaleBody} fill alt="Female Body" />
            </div>
          </div>
        </Tab.Panel>

        <Tab.Panel>
          <h1 className="text-center">Hair</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <div
              className="bg-slate-200 rounded-lg h-[320px] relative"
              onClick={() => setHair(1)}
            >
              <Image src={Hair1} fill alt="Male Body" />
            </div>
            <div
              className="bg-slate-200 rounded-lg h-[320px] relative"
              onClick={() => setHair(2)}
            >
              <Image src={Hair2} fill alt="Female Body" />
            </div>
            <div
              className="bg-slate-200 rounded-lg h-[320px] relative"
              onClick={() => setHair(3)}
            >
              <Image src={Hair3} fill alt="Female Body" />
            </div>
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
