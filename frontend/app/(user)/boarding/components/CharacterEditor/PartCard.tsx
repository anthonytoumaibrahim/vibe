import { Popover } from "@headlessui/react";

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
  colors = [],
}: PartCardProps) => {
  return (
    <div
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
      <div className="group-hover:scale-105 transition-transform duration-150 w-full h-full origin-bottom flex items-center justify-center relative">
        {children}
      </div>
      <div className="absolute bottom-0">
        {colors.map((color, colorIndex) => (
          <button
            key={colorIndex}
            className="w-8 h-8 rounded-full"
            style={{ backgroundColor: color }}
            onClick={() => onClick({ fill: color })}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default PartCard;
