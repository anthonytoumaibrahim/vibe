"use client";
import { useState, useEffect } from "react";
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

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % parts.length;

    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
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
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        className="mt-auto flex items-center justify-center gap-2"
      />
    </div>
  );
};

export default Paginator;
