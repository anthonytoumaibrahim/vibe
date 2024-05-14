import { useState } from "react";
import ReactPaginate from "react-paginate";
import Image from "next/image";
import PartCard from "./PartCard";
import { useAppSelector } from "@/app/lib/store";

interface PartTabProps {
  type: string;
  colors: Array<string>;
  is_premium?: boolean;
  optional?: boolean;
}

const itemsPerPage = 12;

const PartTab = ({
  type,
  colors,
  is_premium = false,
  optional = false,
}: PartTabProps) => {
  const partsSelector = useAppSelector(
    (state: any) => state.characterPartsSlice?.[type]
  );

  const [itemOffset, setItemOffset] = useState(0);
  const pageCount = Math.ceil(partsSelector?.length / itemsPerPage);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = partsSelector?.slice(itemOffset, endOffset);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % partsSelector?.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="flex flex-col justify-between h-full gap-4">
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 mt-4">
        {currentItems?.map((part: any) => {
          const { id, premium, price, is_purchased, server_id } = part;
          return (
            <PartCard
              key={id}
              id={id}
              server_id={server_id}
              type={type}
              height={180}
              premium={premium}
              is_premium={is_premium}
              colors={colors}
              optional={optional}
              is_purchased={is_purchased}
              price={price}
            >
              <Image
                src={`/images/2d_thumbs/${type}/${id}.svg`}
                width={180}
                height={180}
                className="object-contain h-auto"
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
        pageCount={pageCount || 1}
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
