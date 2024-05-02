"use client";
import { useState } from "react";
import Image from "next/image";
import { useAppDispatch } from "@/app/lib/hooks";
import PartCard from "./PartCard";
import ReactPaginate from "react-paginate";

// Icons
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

interface PaginatorProps {
  parts: Array<{ id: number; premium?: boolean }>;
  type: string;
  selector: { id: number; fill?: string };
  className?: string;
  colors?: Array<string>;
  selectedColor?: string;
  optional?: boolean;
  is_premium?: boolean;
}

const itemsPerPage = 9;

const Paginator = ({
  parts,
  type,
  selector,
  className = "",
  colors,
  optional = false,
  is_premium = false,
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
      <div
        className={`grid md:grid-cols-2 xl:grid-cols-3 gap-4 mt-4 ${className}`}
      >
        {currentItems.map((part) => {
          const { id, premium } = part;
          return (
            <PartCard
              key={id}
              height={180}
              selected={selector?.id === id}
              premium={premium}
              colors={colors}
              selectedColor={selector?.fill}
              onClick={(data?: { fill?: string; id?: number }) =>
                dispatch({
                  type: "characterEditorSlice/updateData",
                  payload: {
                    type: type,
                    data: data
                      ? data
                      : {
                          id: optional && selector?.id === id ? 0 : id,
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
                alt=""
              />
            </PartCard>
          );
        })}
      </div>
      <ReactPaginate
        breakLabel="..."
        // nextLabel={<FaChevronRight size={32} />}
        // nextLinkClassName="unstyled-link absolute top-6 right-6"
        // previousLabel={<FaChevronLeft size={32} />}
        nextLabel=""
        previousLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        pageLabelBuilder={(page) => ""}
        renderOnZeroPageCount={null}
        className="flex items-center justify-center gap-2"
        pageLinkClassName="w-3 h-3 flex bg-slate-300 rounded-full cursor-pointer hover:bg-slate-400 unstyled-link"
        activeLinkClassName="bg-slate-400"
      />
    </div>
  );
};

export default Paginator;
