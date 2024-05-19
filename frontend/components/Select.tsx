import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import React from "react";
import { FaChevronDown } from "react-icons/fa6";

interface SelectProps {
  data: Array<{
    id: number;
    value: string;
    name: string | React.ReactNode;
  }>;
  value?: string | number | undefined | null;
  buttonClassName?: string;
  optionClassName?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  className?: string;
}

const Select = ({
  data,
  value,
  buttonClassName = "",
  optionClassName = "",
  placeholder = "",
  className = "",
  onChange,
}: SelectProps) => {
  return (
    <div className={`relative w-full ${className}`}>
      <Listbox value={value} onChange={onChange}>
        <ListboxButton
          tabIndex={-1}
          className={`p-3 bg-gray-100 dark:bg-black rounded-md outline-none focus:ring-2 focus:ring-primary-main w-full flex items-center justify-between ${buttonClassName}`}
        >
          <p className="truncate">{value ? value : placeholder}</p>
          <FaChevronDown size={24} className="shrink-0" />
        </ListboxButton>
        <ListboxOptions className="absolute top-full left-0 bg-white dark:bg-slate-700 rounded-lg shadow-xl z-10 w-full flex flex-col overflow-hidden">
          {data.map((option) => (
            <ListboxOption
              key={option.id}
              value={option.value}
              className={`p-4 hover:bg-primary-main hover:text-white ${optionClassName}`}
            >
              {option.name}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  );
};

export default Select;
