"use client";

import { Tab } from "@headlessui/react";
import TabPanel from "./TabPanel";

import MaleBody from "../../2d/body/male_body1.svg?url";
import FemaleBody from "../../2d/body/female_body1.svg?url";
import Image from "next/image";

const Tabs = ({ setBody }) => {
  return (
    <Tab.Group>
      <Tab.Panels className="bg-white my-20 rounded-lg min-w-[640px] shadow-lg">
        <Tab.Panel className="p-6">
          <h1 className="text-center">Body</h1>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div
              className="bg-slate-200 rounded-lg h-[620px] relative"
              onClick={() => setBody("male_body")}
            >
              <Image src={MaleBody} fill alt="Male Body" />
            </div>
            <div
              className="bg-slate-200 rounded-lg h-[620px] relative"
              onClick={() => setBody("female_body")}
            >
              <Image src={FemaleBody} fill alt="Female Body" />
            </div>
          </div>
        </Tab.Panel>
        <Tab.Panel>
          <TabPanel />
        </Tab.Panel>
        <Tab.Panel>
          <TabPanel />
        </Tab.Panel>
      </Tab.Panels>
      <Tab.List className="flex flex-col justify-center gap-6 bg-white min-w-[280px]">
        <Tab>Body</Tab>
        <Tab>Face</Tab>
        <Tab>Hair</Tab>
      </Tab.List>
    </Tab.Group>
  );
};

export default Tabs;
