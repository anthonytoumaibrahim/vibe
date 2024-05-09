"use client";

import { useState } from "react";
import { updateBackground } from "../../actions";
import Image from "next/image";
import Button from "@/components/Button";
import { FaImage, FaX } from "react-icons/fa6";

interface BackgroundPickerProps {
  backgrounds: Array<any>;
  isPremium?: boolean;
  handleBackgroundUpdate: (bgid) => void;
}

const BackgroundPicker = ({
  backgrounds,
  isPremium = false,
  handleBackgroundUpdate,
}: BackgroundPickerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBackground, setSelectedBackground] = useState<any>(null);

  const chooseNewBg = async (id) => {
    handleBackgroundUpdate(id);
    setIsOpen(false);
    await updateBackground(id);
  };

  return (
    <>
      <button
        className="text-white absolute z-10 top-4 left-4 hover:text-primary-500 hidden lg:block"
        onClick={() => setIsOpen(true)}
      >
        <FaImage size={24} />
      </button>
      {isOpen && (
        <div className="absolute inset-0 w-full h-full z-10 bg-white/70 dark:bg-black/70 backdrop-blur-md flex gap-6 p-10">
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
            <div className="w-1/3 shrink-0 text-center flex flex-col gap-2">
              <div className="h-48 rounded-lg overflow-hidden">
                <Image
                  src={`/images/2d_backgrounds/${selectedBackground?.image_url}`}
                  width={0}
                  height={0}
                  sizes="320px"
                  className="w-auto h-full object-cover"
                  alt={selectedBackground?.name}
                />
              </div>
              <h4>{selectedBackground?.name}</h4>
              <div className="mt-auto">
                {selectedBackground?.premium && !isPremium ? (
                  <div className="flex flex-col gap-2">
                    <p>This background is Premium only.</p>
                    <Button href="/premium" variant="gradient" color="premium">
                      Upgrade now
                    </Button>
                  </div>
                ) : (
                  <Button
                    className="mx-auto"
                    onClick={() => chooseNewBg(selectedBackground?.id)}
                  >
                    Choose Background
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default BackgroundPicker;
