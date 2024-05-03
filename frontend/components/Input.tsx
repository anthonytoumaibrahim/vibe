/* eslint-disable react/display-name */
import { forwardRef } from "react";
import type {
  FieldError,
  Merge,
  FieldErrorsImpl,
  ChangeHandler,
} from "react-hook-form";

interface InputProps {
  type?: string;
  placeholder?: string;
  className?: string;
  label?: string;
  onChange?: ChangeHandler;
  onBlur?: ChangeHandler;
  name?: string;
  error?:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
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
      error = "",
    },
    ref
  ) => (
    <label className="flex flex-col gap-0.5">
      {label && (
        <p className={`${error ? "text-red-600 font-bold" : ""}`}>{label}</p>
      )}
      <input
        type={type}
        className={`p-3 bg-gray-100 dark:bg-black rounded-md placeholder:text-gray-400/80 outline-none focus:ring-2 focus:ring-primary-main ${className} ${
          error
            ? "bg-red-50 text-red-600 placeholder:text-red-400 focus:ring-red-600"
            : ""
        }`}
        placeholder={placeholder}
        name={name}
        ref={ref}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p className="text-sm text-red-600">{error.toString()}</p>}
    </label>
  )
);

export default Input;
