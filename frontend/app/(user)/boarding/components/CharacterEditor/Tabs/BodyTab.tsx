import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks";

// Data
import { C2DParts } from "@/app/(user)/2d/2d_parts";

import PartCard from "../PartCard";

const BodyTab = () => {
  const bodySelector = useAppSelector(
    (state) => state.characterEditorSlice.body
  );
  const dispatch = useAppDispatch();
  return (
    <div className="grid grid-cols-3 gap-4 mt-4">
      {C2DParts.body.map((body) => {
        const { id, name } = body;

        return (
          <PartCard
            key={id}
            selected={bodySelector.id === id}
            onClick={() =>
              dispatch({
                type: "characterEditorSlice/updateData",
                payload: {
                  type: "body",
                  data: {
                    id: id,
                  },
                },
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
          </PartCard>
        );
      })}
    </div>
  );
};

export default BodyTab;
