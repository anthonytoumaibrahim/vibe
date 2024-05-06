"use client";

import { useState } from "react";
import Modal, { ModalSize } from "@/components/Modal";
import { FaImage, FaX } from "react-icons/fa6";
import Image from "next/image";

interface BackgroundPickerProps {
  backgrounds: Array<any>;
  isPremium?: boolean;
}

const BackgroundPicker = ({
  backgrounds,
  isPremium = false,
}: BackgroundPickerProps) => {
  const [selectedBackground, setSelectedBackground] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="text-white absolute z-10 top-4 left-4 hover:text-primary-500"
        onClick={() => setIsOpen(true)}
      >
        <FaImage size={24} />
      </button>
      {isOpen && (
        <div className="absolute inset-0 w-full h-full z-10 bg-white/70 dark:bg-black/70 backdrop-blur-md flex gap-4 p-6">
          <button
            className="absolute top-4 right-4 z-10 hover:text-primary-main"
            onClick={() => setIsOpen(false)}
          >
            <FaX size={20} />
          </button>
          <div className="flex flex-col gap-4 text-center">
            <h2>Select Background</h2>
            <p>
              Select a background that shows off your personality and Avatar!
            </p>
            <div className="grid grid-cols-3 gap-4 h-full">
              {backgrounds?.map((background) => {
                const { id, name, image_url, premium, price, is_owned } =
                  background;
                return (
                  <button
                    key={id}
                    className="h-32 relative rounded-lg overflow-hidden before:w-full before:h-full before:bg-primary-main/25 before:absolute before:inset-0 before:opacity-0 hover:before:opacity-100 after:w-full after:h-4 after:absolute after:top-1/2 after:-translate-y-1/2 after:left-0 after:bg-white after:blur-lg after:rotate-45 after:opacity-0 hover:after:opacity-100"
                    onClick={() => setSelectedBackground(background)}
                  >
                    <Image
                      src={`/images/2d_backgrounds/${image_url}`}
                      width="0"
                      height="0"
                      sizes="256px"
                      className="w-full h-full object-cover"
                      alt={name}
                    />
                  </button>
                );
              })}
            </div>
          </div>
          {selectedBackground && (
            <div className="w-1/3 shrink-0">
              <Image
                src={`/images/2d_backgrounds/${selectedBackground?.image_url}`}
                width={256}
                height={180}
                className="object-cover"
                alt={selectedBackground?.name}
              />
              <h4>{selectedBackground?.name}</h4>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default BackgroundPicker;
