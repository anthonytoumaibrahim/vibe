import Image from "next/image";
import { useAppDispatch } from "@/app/lib/hooks";

// Data
import { C2DParts } from "@/app/(user)/2d/2d_parts";

import PartCard from "../PartCard";

const FaceTab = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="grid grid-cols-3 gap-4 mt-4">
      {C2DParts.face.map((face) => {
        const { id, name } = face;

        return (
          <PartCard
            key={id}
            onClick={() =>
              dispatch({
                type: "characterEditorSlice/updateData",
                payload: {
                  type: "face",
                  data: {
                    id: id,
                  },
                },
              })
            }
          >
            <Image
              src={`/images/2d_thumbs/face/${id}.png`}
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

export default FaceTab;