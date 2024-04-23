import { Popover } from "@headlessui/react";

const AuthFormTooltip = ({ children }: { children: React.ReactNode | string }) => {
  return (
    <Popover className="absolute bottom-0 -right-60 bg-white px-6 py-4 rounded-md w-56 shadow-xl text-red-600">
      {children}
    </Popover>
  );
};

export default AuthFormTooltip;
