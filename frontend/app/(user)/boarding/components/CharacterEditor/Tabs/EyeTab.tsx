import Image from "next/image";
import { useAppDispatch } from "@/app/lib/hooks";

// Data
import { C2DParts } from "@/app/(user)/2d/2d_parts";

import PartCard from "../PartCard";

const EyeTab = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="grid grid-cols-3 gap-4 mt-4">
      {C2DParts.eye.map((eye) => {
        const { id } = eye;

        return (
          <PartCard
            key={id}
            onClick={() =>
              dispatch({
                type: "characterEditorSlice/updateData",
                payload: {
                  type: "eye",
                  data: {
                    id: id,
                  },
                },
              })
            }
          >
            <Image
              src={`/images/2d_thumbs/eye/${id}.png`}
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

export default EyeTab;