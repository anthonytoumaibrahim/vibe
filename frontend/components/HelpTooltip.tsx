import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { FaRegQuestionCircle } from "react-icons/fa";
import type { IconType } from "react-icons";

interface HelpTooltipProps {
  children: React.ReactNode;
  className?: string;
  icon?: IconType;
  size?: number;
}

const HelpTooltip = ({
  children,
  className = "",
  icon: TooltipIcon = FaRegQuestionCircle,
  size = 16,
}: HelpTooltipProps) => {
  return (
    <Popover className="relative">
      <PopoverButton
        className={`flex items-center justify-center hover:text-primary-main ${className}`}
      >
        <TooltipIcon size={size} />
      </PopoverButton>
      <PopoverPanel
        anchor="top"
        className="flex flex-col bg-black text-white p-4 !max-w-[320px] rounded-lg -translate-y-2"
      >
        {children}
      </PopoverPanel>
    </Popover>
  );
};

export default HelpTooltip;
