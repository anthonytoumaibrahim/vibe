/* eslint-disable react/display-name */
import { forwardRef } from "react";

interface InputProps {
  type?: string;
  placeholder?: string;
  className?: string;
  label?: string;
  onChange?: () => void;
  onBlur?: () => void;
  name?: string;
  error?: boolean | undefined;
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
      error = false,
    },
    ref
  ) => (
    <div className="flex flex-col gap-0.5">
      <label>{label}</label>
      <input
        type={type}
        className={`p-3 bg-gray-100 rounded-md placeholder:text-gray-400/80 outline-none focus:ring-2 focus:ring-primary-main ${className} ${
          error ? "bg-red-50 placeholder:text-red-400 focus:ring-red-600" : ""
        }`}
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
