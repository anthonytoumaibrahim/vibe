import { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { FaPalette } from "react-icons/fa6";
import { useAppDispatch, useAppSelector } from "@/app/lib/store";

// Modals
import PremiumModal from "./PremiumModal";
import ShopModal from "./ShopModal";

interface PartCardProps {
  className?: string;
  children: React.ReactNode;
  height?: number;
  premium?: boolean;
  is_premium?: boolean;
  colors?: Array<string>;
  id: number;
  type: string;
  optional?: boolean;
  is_purchased?: boolean;
  price?: number;
  server_id?: number;
}

const PartCard = ({
  id,
  type,
  children,
  className = "",
  height = 240,
  premium = false,
  is_premium = false,
  optional = false,
  is_purchased = true,
  colors,
  price = 0,
  server_id = 1,
}: PartCardProps) => {
  const dispatch = useAppDispatch();
  const selector = useAppSelector(
    (state: any) => state.characterEditorSlice?.[type]
  );

  const [shopModal, showShopModal] = useState(false);
  const [premiumModal, showPremiumModal] = useState(false);
  const handleUpdate = (data: any) => {
    if (premium && !is_premium) {
      return showPremiumModal(true);
    }
    if (!is_purchased) {
      return showShopModal(true);
    }
    dispatch({
      type: "characterEditorSlice/updateData",
      payload: {
        type: type,
        data: { ...data },
      },
    });
  };

  return (
    <>
      {premiumModal && (
        <PremiumModal
          show={premiumModal}
          id={id}
          type={type}
          handleClose={() => showPremiumModal(false)}
        />
      )}
      {shopModal && (
        <ShopModal
          show={shopModal}
          id={id}
          server_id={server_id}
          type={type}
          price={price}
          handleClose={() => showShopModal(false)}
          equipItem={() =>
            handleUpdate({
              id: id,
            })
          }
        />
      )}
      <Menu as="div" style={{ height }} className="relative group">
        {({ open }) => (
          <>
            <button
              className={`group focus:outline-2 w-full h-full z-0 rounded-lg relative overflow-hidden transition-colors duration-200 cursor-pointer before:w-1/2 before:h-1/2 before:absolute before:-right-6 before:-top-6 before:bg-primary-200 before:rounded-full before:filter before:blur-lg after:w-full after:h-full after:rounded-full after:absolute after:top-0 after:left-0 after:bg-primary-400 after:transition after:filter after:blur-xl before:-z-[1] after:-z-[2] ${
                !is_purchased ? "opacity-50" : ""
              } ${
                selector?.id === id
                  ? "bg-primary-main ring-2 ring-offset-2 ring-primary-main"
                  : "bg-slate-200 dark:bg-slate-600 hover:bg-primary-main hover:before:opacity-100 hover:after:opacity-100 before:opacity-0 after:opacity-0 after:transition-opacity after:duration-200 before:transition-opacity before:duration-400"
              } ${
                premium
                  ? "!bg-premium-500 hover:!bg-premium-700 before:!bg-premium-200 after:!bg-premium-400 before:opacity-100 after:opacity-100"
                  : ""
              } ${className}`}
              onClick={() =>
                handleUpdate({
                  id: optional && selector?.id === id ? 0 : id,
                })
              }
            >
              {children}
            </button>
            {colors && (
              <MenuButton
                className={`absolute top-2 right-2 ${
                  open
                    ? "text-primary-main"
                    : "hover:text-primary-main opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity duration-100"
                } z-10`}
                tabIndex={0}
              >
                <FaPalette size={24} />
              </MenuButton>
            )}
            <MenuItems className="absolute left-0 top-full z-20 bg-white dark:bg-slate-700 shadow-lg shadow-black/20 p-2 rounded w-full flex items-center justify-center flex-wrap gap-1 before:w-0 before:h-0 before:absolute before:bottom-full before:left-1/2 before:-translate-x-1/2 before:border-l-[8px] before:border-l-transparent before:border-b-[10px] before:border-b-white dark:before:border-b-slate-700 before:border-r-[8px] before:border-r-transparent">
              {colors?.map((color, colorIndex) => (
                <MenuItem
                  as="button"
                  key={colorIndex}
                  className={`w-6 h-6 rounded-sm relative overflow-hidden before:w-6 before:h-6 before:absolute before:-top-3 before:-right-3 before:bg-white before:rounded-full before:blur-sm before:opacity-0 hover:before:opacity-100 before:mix-blend-overlay ${
                    selector?.fill === color ? "ring-2 ring-primary-main" : ""
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => handleUpdate({ id: id, fill: color })}
                ></MenuItem>
              ))}
            </MenuItems>
          </>
        )}
      </Menu>
    </>
  );
};

export default PartCard;
