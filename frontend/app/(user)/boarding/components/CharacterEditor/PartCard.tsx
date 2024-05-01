import { Menu } from "@headlessui/react";
import { FaPalette, FaTrash } from "react-icons/fa6";

interface PartCardProps {
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
  height?: number;
  selected?: boolean;
  premium?: boolean;
  colors?: Array<string>;
  selectedColor?: string;
}

const PartCard = ({
  children,
  className = "",
  height = 240,
  onClick = () => {},
  selected = false,
  premium = false,
  colors,
  selectedColor,
}: PartCardProps) => {
  return (
    <Menu as="div" style={{ height }} className="relative group">
      {({ open }) => (
        <>
          <button
            className={`group focus:outline-2 w-full h-full z-0 rounded-lg relative overflow-hidden transition-colors duration-200 cursor-pointer before:w-1/2 before:h-1/2 before:absolute before:-right-6 before:-top-6 before:bg-primary-200 before:rounded-full before:filter before:blur-lg after:w-full after:h-full after:rounded-full after:absolute after:top-0 after:left-0 after:bg-primary-400 after:transition after:filter after:blur-xl before:-z-[1] after:-z-[2] ${
              selected
                ? "bg-primary-main ring-2 ring-offset-2 ring-primary-main"
                : "bg-slate-200 hover:bg-primary-main hover:before:opacity-100 hover:after:opacity-100 before:opacity-0 after:opacity-0 after:transition-opacity after:duration-200 before:transition-opacity before:duration-400"
            } ${
              premium
                ? "!bg-premium-500 hover:!bg-premium-700 before:!bg-premium-200 after:!bg-premium-400 before:opacity-100 after:opacity-100"
                : ""
            } ${className}`}
            onClick={() => onClick()}
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
                  selectedColor === color ? "ring-2 ring-primary-main" : ""
                }`}
                style={{ backgroundColor: color }}
                onClick={() => onClick({ fill: color })}
              ></Menu.Item>
            ))}
          </Menu.Items>
        </>
      )}
    </Menu>
  );
};

export default PartCard;
