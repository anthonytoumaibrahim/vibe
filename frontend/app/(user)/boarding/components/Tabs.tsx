"use client";

import { Tab } from "@headlessui/react";

const Tabs = () => {
  return (
    <Tab.Group>
      <Tab.Panels className="bg-white my-20 rounded-lg min-w-[640px] shadow-lg">
        <Tab.Panel>Content 1</Tab.Panel>
        <Tab.Panel>Content 2</Tab.Panel>
        <Tab.Panel>Content 3</Tab.Panel>
      </Tab.Panels>
      <Tab.List className="flex flex-col justify-center gap-6 bg-black text-white min-w-[280px]">
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </Tab.List>
    </Tab.Group>
  );
};

export default Tabs;
