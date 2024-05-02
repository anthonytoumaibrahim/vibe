import { useState } from "react";
import ReactPaginate from "react-paginate";
import Image from "next/image";
import PartCard from "./PartCard";

interface PartTabProps {
  type: string;
  parts: Array<any>;
  colors: Array<string>;
  is_premium?: boolean;
}

const itemsPerPage = 9;

const PartTab = ({ type, parts, colors, is_premium = false }: PartTabProps) => {
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
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 mt-4">
        {currentItems.map((part) => {
          const { id, premium } = part;
          return (
            <PartCard
              key={id}
              id={id}
              type={type}
              height={180}
              premium={premium}
              is_premium={is_premium}
              colors={colors}
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

export default PartTab;
