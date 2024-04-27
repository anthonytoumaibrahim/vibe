import Image from "next/image";
import { Tab } from "@headlessui/react";
import { useAppSelector, useAppDispatch } from "@/app/lib/hooks";
import { C2DParts } from "@/app/(user)/2d/2d_parts";
import PartCard from "./PartCard";

interface PaginatorProps {
  parts: Array<object>;
  type: string;
  selector: number;
  className?: string;
}

const Paginator = ({
  parts,
  type,
  selector,
  className = "",
}: PaginatorProps) => {
  const dispatch = useAppDispatch();
  return (
    <div className={`grid grid-cols-3 gap-4 mt-4 ${className}`}>
      {parts.map((part) => {
        const { id, premium } = part;
        return (
          <PartCard
            key={id}
            height={180}
            selected={selector === id}
            premium={premium}
            onClick={() =>
              dispatch({
                type: "characterEditorSlice/updateData",
                payload: {
                  type: type,
                  data: {
                    id: id,
                  },
                },
              })
            }
          >
            <Image
              src={`/images/2d_thumbs/${type}/${id}.svg`}
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

export default Paginator;
