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
}

const Select = ({
  data,
  value,
  buttonClassName = "",
  optionClassName = "",
  placeholder = "",
  onChange,
}: SelectProps) => {
  return (
    <label className="flex flex-col gap-0.5 relative">
      <Listbox value={value} onChange={onChange}>
        <ListboxButton
          className={`p-3 bg-gray-100 dark:bg-black rounded-md outline-none focus:ring-2 focus:ring-primary-main flex items-center justify-between ${buttonClassName}`}
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
    </label>
  );
};

export default Select;
