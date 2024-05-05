"use client";

import { useState } from "react";
import Modal, { ModalSize } from "@/components/Modal";
import { FaImage } from "react-icons/fa6";
import Image from "next/image";

interface BackgroundPickerProps {
  backgrounds: Array<any>;
}

const BackgroundPicker = ({ backgrounds }: BackgroundPickerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="text-white absolute z-10 top-4 left-4 hover:text-primary-500"
        onClick={() => setIsOpen(true)}
      >
        <FaImage size={24} />
      </button>
      <Modal
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        size={ModalSize.xxl}
        title="Select Background"
        description="Select a background that best shows off your personality and Avatar!"
      >
        <div className="grid grid-cols-3 gap-4">
          {backgrounds?.map((background) => {
            const { id, name, image_url, premium, price, is_owned } =
              background;
            return (
              <button
                key={id}
                className="h-32 relative rounded-lg overflow-hidden before:w-full before:h-full before:bg-primary-main/25 before:absolute before:inset-0 before:opacity-0 hover:before:opacity-100 after:w-full after:h-4 after:absolute after:top-1/2 after:-translate-y-1/2 after:left-0 after:bg-white after:blur-lg after:rotate-45 after:opacity-0 hover:after:opacity-100"
              >
                <Image
                  src={`/images/2d_backgrounds/${image_url}`}
                  width="0"
                  height="0"
                  sizes="256px"
                  className="w-auto h-full object-cover"
                  alt={name}
                />
                <h4>{name}</h4>
              </button>
            );
          })}
        </div>
      </Modal>
    </>
  );
};

export default BackgroundPicker;
