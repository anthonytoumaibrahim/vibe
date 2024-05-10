import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { FaRegQuestionCircle } from "react-icons/fa";

const HelpTooltip = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <Popover className="relative">
      <PopoverButton
        className={`flex items-center justify-center hover:text-primary-main ${className}`}
      >
        <FaRegQuestionCircle size={16} />
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
