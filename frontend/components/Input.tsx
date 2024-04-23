/* eslint-disable react/display-name */
import { forwardRef } from "react";
import { Path } from "react-hook-form";

interface InputProps {
  type?: string;
  placeholder?: string;
  className?: string;
  label?: string;
  onChange?: () => void;
  onBlur?: () => void;
  name?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = "text",
      className = "",
      placeholder,
      onChange,
      onBlur,
      name,
      label,
    },
    ref
  ) => (
    <div className="flex flex-col gap-0.5">
      <label>{label}</label>
      <input
        type={type}
        className={`p-3 bg-gray-100 rounded-md placeholder:text-gray-400/80 outline-none focus:ring-2 focus:ring-primary-main ${className}`}
        placeholder={placeholder}
        name={name}
        ref={ref}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  )
);

export default Input;
