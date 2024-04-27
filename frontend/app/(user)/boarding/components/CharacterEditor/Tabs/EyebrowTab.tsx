import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks";

// Data
import { C2DParts } from "@/app/(user)/2d/2d_parts";

import PartCard from "../PartCard";

const EyebrowTab = () => {
  const eyebrowSelector = useAppSelector(
    (state) => state.characterEditorSlice.eyebrow
  );
  const dispatch = useAppDispatch();
  return (
    <div className="grid grid-cols-3 gap-4 mt-4">
      {C2DParts.eyebrow.map((eyebrow) => {
        const { id } = eyebrow;

        return (
          <PartCard
            key={id}
            selected={eyebrowSelector.id === id}
            onClick={() =>
              dispatch({
                type: "characterEditorSlice/updateData",
                payload: {
                  type: "eyebrow",
                  data: {
                    id: id,
                  },
                },
              })
            }
          >
            <Image
              src={`/images/2d_thumbs/eyebrow/${id}.svg`}
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
  );
};

export default EyebrowTab;
