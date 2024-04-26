import Image from "next/image";
import { useAppDispatch } from "@/app/lib/hooks";

// Data
import { C2DParts } from "@/app/(user)/2d/2d_parts";

import PartCard from "../PartCard";

const HairTab = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="grid grid-cols-3 gap-4 mt-4">
      {C2DParts.hair.map((hair) => {
        const { id, name } = hair;

        return (
          <PartCard
            key={id}
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
  );
};

export default HairTab;
