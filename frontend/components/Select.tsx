import { Listbox } from "@headlessui/react";

interface SelectProps {
  data: Array<Record<"id" | "value" | "name", number | string>>;
  value?: string;
  onChange?: (value: string) => void;
}

const Select = ({ data, value, onChange }: SelectProps) => {
  return (
    <label className="flex flex-col gap-0.5">
      <Listbox value={value} onChange={onChange}>
        <Listbox.Button className="p-3 bg-gray-100 rounded-md placeholder:text-gray-400/80 outline-none focus:ring-2 focus:ring-primary-main">
          {value}
        </Listbox.Button>
        <Listbox.Options>
          {data.map((option) => (
            <Listbox.Option key={option.id} value={option.value}>
              {option.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </label>
  );
};

export default Select;
