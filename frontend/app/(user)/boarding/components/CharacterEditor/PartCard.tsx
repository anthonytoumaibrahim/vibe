import { useState } from "react";
import { Menu } from "@headlessui/react";
import { FaPalette } from "react-icons/fa6";
import { useAppDispatch, useAppSelector } from "@/app/lib/store";
import Modal, { ModalSize } from "@/components/Modal";
import Image from "next/image";
import Button from "@/components/Button";

interface PartCardProps {
  className?: string;
  children: React.ReactNode;
  height?: number;
  premium?: boolean;
  is_premium?: boolean;
  colors?: Array<string>;
  id: number;
  type: string;
}

const PartCard = ({
  id,
  type,
  children,
  className = "",
  height = 240,
  premium = false,
  is_premium = false,
  colors,
}: PartCardProps) => {
  const dispatch = useAppDispatch();
  const selector = useAppSelector(
    (state: any) => state.characterEditorSlice?.[type]
  );

  const [premiumModal, showPremiumModal] = useState(false);
  const handleUpdate = (data: any) => {
    if (premium && !is_premium) {
      showPremiumModal(true);
    } else {
      dispatch({
        type: "characterEditorSlice/updateData",
        payload: {
          type: type,
          data: { ...data },
        },
      });
    }
  };

  return (
    <>
      {premiumModal && (
        <Modal
          isOpen={premiumModal}
          handleClose={() => showPremiumModal(false)}
          size={ModalSize.xxl}
          className="p-0 flex gap-6 items-center overflow-hidden"
        >
          <div className="relative z-0 w-72 h-72 overflow-hidden bg-premium-700 before:w-1/2 before:h-1/2 before:absolute before:-right-6 before:-top-6 before:bg-premium-200 before:rounded-full before:filter before:blur-lg after:w-full after:h-full after:rounded-full after:absolute after:top-0 after:left-0 after:bg-premium-400 after:filter after:blur-xl before:-z-[1] after:-z-[2] shrink-0">
            <Image
              src={`/images/2d_thumbs/${type}/${id}.svg`}
              fill
              sizes="100%"
              className="object-contain"
              alt=""
            />
          </div>

          <div className="text-center w-full flex flex-col items-center gap-3">
            <h1 className="bg-gradient-to-t from-premium-800 to-premium-400 text-transparent bg-clip-text uppercase">
              Premium Item
            </h1>
            <p>
              This item is only available to{" "}
              <strong className="bg-gradient-to-t from-premium-800 to-premium-400 text-transparent bg-clip-text">
                Premium
              </strong>{" "}
              users. Upgrade now to add it to your character.
            </p>
            <Button href="/upgrade" variant="gradient" color="premium">
              Upgrade now
            </Button>
            <Button
              size="small"
              variant="link"
              color="muted"
              className="font-normal text-sm"
              onClick={() => showPremiumModal(false)}
            >
              No thanks
            </Button>
          </div>
        </Modal>
      )}
      <Menu as="div" style={{ height }} className="relative group">
        {({ open }) => (
          <>
            <button
              className={`group focus:outline-2 w-full h-full z-0 rounded-lg relative overflow-hidden transition-colors duration-200 cursor-pointer before:w-1/2 before:h-1/2 before:absolute before:-right-6 before:-top-6 before:bg-primary-200 before:rounded-full before:filter before:blur-lg after:w-full after:h-full after:rounded-full after:absolute after:top-0 after:left-0 after:bg-primary-400 after:transition after:filter after:blur-xl before:-z-[1] after:-z-[2] ${
                selector?.id === id
                  ? "bg-primary-main ring-2 ring-offset-2 ring-primary-main"
                  : "bg-slate-200 hover:bg-primary-main hover:before:opacity-100 hover:after:opacity-100 before:opacity-0 after:opacity-0 after:transition-opacity after:duration-200 before:transition-opacity before:duration-400"
              } ${
                premium
                  ? "!bg-premium-500 hover:!bg-premium-700 before:!bg-premium-200 after:!bg-premium-400 before:opacity-100 after:opacity-100"
                  : ""
              } ${className}`}
              onClick={() =>
                handleUpdate({
                  id: id,
                })
              }
            >
              {children}
            </button>
            {colors && (
              <Menu.Button
                className={`absolute top-2 right-2 ${
                  open
                    ? "text-primary-main"
                    : "hover:text-primary-main opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity duration-100"
                } z-10`}
                tabIndex={0}
              >
                <FaPalette size={24} />
              </Menu.Button>
            )}
            <Menu.Items className="absolute left-0 top-full z-20 bg-white shadow-lg shadow-black/20 p-1 rounded w-full flex items-center justify-center flex-wrap gap-1 before:w-0 before:h-0 before:absolute before:bottom-full before:left-1/2 before:-translate-x-1/2 before:border-l-[8px] before:border-l-transparent before:border-b-[10px] before:border-b-white before:border-r-[8px] before:border-r-transparent">
              {colors?.map((color, colorIndex) => (
                <Menu.Item
                  as="button"
                  key={colorIndex}
                  className={`w-6 h-6 rounded-sm relative overflow-hidden before:w-6 before:h-6 before:absolute before:-top-3 before:-right-3 before:bg-white before:rounded-full before:blur-sm before:opacity-0 hover:before:opacity-100 before:mix-blend-overlay ${
                    selector?.fill === color ? "ring-2 ring-primary-main" : ""
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => handleUpdate({ id: id, fill: color })}
                ></Menu.Item>
              ))}
            </Menu.Items>
          </>
        )}
      </Menu>
    </>
  );
};

export default PartCard;
