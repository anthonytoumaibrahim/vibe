"use client";

import { Tab } from "@headlessui/react";

const Tabs = () => {
  return (
    <Tab.Group>
      <Tab.Panels>
        <Tab.Panel>Content 1</Tab.Panel>
        <Tab.Panel>Content 2</Tab.Panel>
        <Tab.Panel>Content 3</Tab.Panel>
      </Tab.Panels>
      <Tab.List className="flex flex-col bg-black text-white">
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </Tab.List>
    </Tab.Group>
  );
};

export default Tabs;
