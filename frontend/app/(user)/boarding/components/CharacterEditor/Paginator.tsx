"use client";
import { useState } from "react";
import Image from "next/image";
import { useAppDispatch } from "@/app/lib/hooks";
import PartCard from "./PartCard";
import ReactPaginate from "react-paginate";

interface PaginatorProps {
  parts: Array<{ id: number; premium?: boolean }>;
  type: string;
  selector: number;
  className?: string;
}

const itemsPerPage = 9;

const Paginator = ({
  parts,
  type,
  selector,
  className = "",
}: PaginatorProps) => {
  const dispatch = useAppDispatch();

  const [itemOffset, setItemOffset] = useState(0);
  const pageCount = Math.ceil(parts.length / itemsPerPage);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = parts.slice(itemOffset, endOffset);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % parts.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="flex flex-col h-full gap-4">
      <div className={`grid grid-cols-3 gap-4 mt-4 ${className}`}>
        {currentItems.map((part) => {
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
      <ReactPaginate
        breakLabel="..."
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        pageLabelBuilder={(page) => ""}
        previousLabel=""
        renderOnZeroPageCount={null}
        className="flex items-center justify-center gap-2"
        pageLinkClassName="w-3 h-3 flex bg-slate-300 rounded-full cursor-pointer hover:bg-slate-400 unstyled-link"
        activeLinkClassName="bg-slate-400"
      />
    </div>
  );
};

export default Paginator;
