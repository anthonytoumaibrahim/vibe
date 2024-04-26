import Image from "next/image";
import { Tab } from "@headlessui/react";
import { useAppSelector, useAppDispatch } from "@/app/lib/hooks";

// Data
import { C2DParts } from "@/app/(user)/2d/2d_parts";

import PartCard from "../PartCard";

const HairTab = () => {
  const hairSelector = useAppSelector(
    (state) => state.characterEditorSlice.hair
  );
  const dispatch = useAppDispatch();
  return (
    <div>
      <Tab.Group>
        <Tab.List className="w-full grid grid-cols-3">
          <Tab className="py-4">Feminine</Tab>
          <Tab className="py-4">Masculine</Tab>
          <Tab className="py-4">Facial</Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <div className="grid grid-cols-3 gap-4 mt-4">
              {C2DParts.hair.female.map((hair) => {
                const { id } = hair;
                return (
                  <PartCard
                    key={id}
                    height={180}
                    selected={hairSelector.id === id}
                    onClick={() =>
                      dispatch({
                        type: "characterEditorSlice/updateData",
                        payload: {
                          type: "hair",
                          data: {
                            id: id,
                          },
                        },
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
                  </PartCard>
                );
              })}
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="grid grid-cols-3 gap-4 mt-4">
              {C2DParts.hair.male.map((hair) => {
                const { id } = hair;
                return (
                  <PartCard
                    key={id}
                    height={180}
                    selected={hairSelector.id === id}
                    onClick={() =>
                      dispatch({
                        type: "characterEditorSlice/updateData",
                        payload: {
                          type: "hair",
                          data: {
                            id: id,
                          },
                        },
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
                  </PartCard>
                );
              })}
            </div>
          </Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default HairTab;
