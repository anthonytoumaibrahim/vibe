import { Menu } from "@headlessui/react";
import { FaPalette } from "react-icons/fa6";

interface PartCardProps {
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
  height?: number;
  selected?: boolean;
  premium?: boolean;
  colors?: Array<string>;
}

const PartCard = ({
  children,
  className = "",
  height = 240,
  onClick = () => {},
  selected = false,
  premium = false,
  colors,
}: PartCardProps) => {
  return (
    <Menu
      as="div"
      style={{ height }}
      className={`group z-0 rounded-lg relative overflow-hidden transition-colors duration-200 cursor-pointer before:w-1/2 before:h-1/2 before:absolute before:-right-6 before:-top-6 before:bg-primary-200 before:rounded-full before:filter before:blur-lg after:w-full after:h-full after:rounded-full after:absolute after:top-0 after:left-0 after:bg-primary-400 after:transition after:filter after:blur-xl before:-z-[1] after:-z-[2] ${
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
      {({ open }) => (
        <>
          {colors && (
            <Menu.Button
              className={`absolute top-2 right-2 ${
                open
                  ? "text-primary-main"
                  : "hover:text-primary-main opacity-0 group-hover:opacity-100 transition-opacity duration-100"
              } z-10`}
            >
              <FaPalette size={24} />
            </Menu.Button>
          )}
          <div className="group-hover:scale-105 transition-transform duration-150 w-full h-full relative origin-bottom">
            {children}
          </div>

          <Menu.Items className="absolute left-0 bottom-2 bg-white shadow-lg p-1 rounded-sm w-full flex items-center justify-center flex-wrap gap-1">
            {colors?.map((color, colorIndex) => (
              <Menu.Item
                as="button"
                key={colorIndex}
                className="w-6 h-6 rounded-sm relative overflow-hidden before:w-6 before:h-6 before:absolute before:-top-3 before:-right-3 before:bg-white/65 before:rounded-full before:blur-sm before:opacity-0 hover:before:opacity-100"
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
