import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import { useAppSelector } from "@/app/lib/hooks";

import Paginator from "../Paginator";
import { TabProps } from "./BodyTab";

const tabs = ["Feminine", "Masculine", "Facial"];

const HairTab = ({ parts, colors }: TabProps) => {
  const hairSelector = useAppSelector(
    (state) => state.characterEditorSlice.hair
  );
  return (
    <Paginator
      parts={parts}
      selector={hairSelector}
      type="hair"
      colors={colors}
    />
    // <div>
    //   <Tab.Group>
    //     <Tab.List className="w-full grid grid-cols-3 relative">
    //       {tabs.map((tab, tabIndex) => (
    //         <Tab key={tabIndex} as={Fragment}>
    //           {({ selected }) => (
    //             <button
    //               className={`py-4 ${
    //                 selected
    //                   ? "border-b-4 border-primary-main font-bold text-primary-main"
    //                   : ""
    //               }`}
    //             >
    //               {tab}
    //             </button>
    //           )}
    //         </Tab>
    //       ))}
    //     </Tab.List>
    //     <Tab.Panels>
    //       <Tab.Panel>
    //         <Paginator
    //           parts={C2DParts.hair.parts.female}
    //           selector={hairSelector}
    //           type="hair"
    //           colors={C2DParts.hair.colors}
    //         />
    //       </Tab.Panel>
    //       <Tab.Panel>
    //         <Paginator
    //           parts={C2DParts.hair.parts.male}
    //           selector={hairSelector}
    //           type="hair"
    //           colors={C2DParts.hair.colors}
    //         />
    //       </Tab.Panel>
    //       <Tab.Panel>Content 3</Tab.Panel>
    //     </Tab.Panels>
    //   </Tab.Group>
    // </div>
  );
};

export default HairTab;
