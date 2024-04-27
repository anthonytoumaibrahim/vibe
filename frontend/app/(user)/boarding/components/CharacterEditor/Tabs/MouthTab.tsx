import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks";

// Data
import { C2DParts } from "@/app/(user)/2d/2d_parts";

import PartCard from "../PartCard";

const MouthTab = () => {
  const mouthSelector = useAppSelector(
    (state) => state.characterEditorSlice.mouth
  );
  const dispatch = useAppDispatch();
  return (
    <div className="grid grid-cols-3 gap-4 mt-4">
      {C2DParts.mouth.map((mouth) => {
        const { id } = mouth;

        return (
          <PartCard
            key={id}
            height={140}
            selected={mouthSelector.id === id}
            onClick={() =>
              dispatch({
                type: "characterEditorSlice/updateData",
                payload: {
                  type: "mouth",
                  data: {
                    id: id,
                  },
                },
              })
            }
          >
            <Image
              src={`/images/2d_thumbs/mouth/${id}.png`}
              width={66}
              height={66}
              quality={100}
              alt=""
            />
          </PartCard>
        );
      })}
    </div>
  );
};

export default MouthTab;
