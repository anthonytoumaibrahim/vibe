import VibeLoading from "@/app/(user)/components/VibeLoading";
import Link from "next/link";
import { LegacyRef, forwardRef } from "react";

type ButtonVariants = "filled" | "outlined" | "link" | "gradient";
type ButtonColors =
  | "primary"
  | "secondary"
  | "error"
  | "success"
  | "white"
  | "muted"
  | "premium";
type ButtonSize = "small" | "regular" | "large";

import type { IconType } from "react-icons";

interface ButtonProps {
  variant?: ButtonVariants;
  color?: ButtonColors;
  disabled?: boolean;
  href?: string;
  className?: string;
  onClick?: () => void;
  loading?: boolean;
  icon?: IconType;
  size?: ButtonSize;
  readonly children?: any;
  type?: "button" | "submit";
}

interface VariantClass {
  class: string;
  colors: Record<ButtonColors, string>;
}

const buttonSizeClass = {
  small: "px-5 py-2",
  regular: "px-10 py-3",
  large: "",
};

const buttonClass: Record<ButtonVariants, VariantClass> = {
  filled: {
    class: "active:shadow-inner",
    colors: {
      primary:
        "bg-primary-main hover:bg-primary-700 active:bg-gradient-to-t active:from-primary-600 active:to-primary-main text-white",
      secondary:
        "bg-secondary-main hover:bg-secondary-500 active:bg-gradient-to-t active:from-secondary-400 active:to-secondary-main text-white",
      error: "bg-red-600 hover:bg-red-500 text-white",
      success:
        "bg-emerald-600 hover:bg-emerald-700 active:bg-gradient-to-t active:from-emerald-400 active:to-emerald-600 text-white",
      white: "text-white",
      premium:
        "bg-premium-600 hover:bg-premium-700 active:bg-gradient-to-t active:from-premium-400 active:to-premium-600 text-white",
      muted: "bg-slate-400 hover:bg-slate-300 text-white",
    },
  },
  gradient: {
    class: "active:shadow-inner",
    colors: {
      primary:
        "bg-gradient-to-t from-primary-main to-primary-500 hover:from-primary-600 hover:to-primary-400 active:from-primary-500 active:to-primary-main text-white",
      secondary: "",
      error:
        "bg-gradient-to-t from-red-600 to-red-400 hover:from-red-500 hover:to-red-300 active:from-red-400 active:to-red-600 text-white",
      success:
        "bg-gradient-to-t from-green-600 to-green-400 hover:from-green-500 hover:to-green-300 active:from-green-400 active:to-green-600 text-white",
      white: "",
      muted: "",
      premium:
        "bg-gradient-to-t from-premium-600 to-premium-400 hover:from-premium-500 hover:to-premium-300 active:from-premium-400 active:to-premium-600 text-white",
    },
  },
  outlined: {
    class: "border-2",
    colors: {
      primary:
        "border-primary-main text-primary-main hover:bg-primary-main hover:text-white",
      secondary: "",
      error: "border-red-600 text-red-600 hover:bg-red-600 hover:text-white",
      success: "",
      white: "text-white",
      muted: "",
      premium: "",
    },
  },
  link: {
    class: "styled-link",
    colors: {
      primary: "text-primary-main",
      secondary: "",
      error: "!text-red-600",
      success: "",
      white: "!text-white",
      muted: "!text-slate-400",
      premium: "",
    },
  },
};

const Button = forwardRef(
  (
    {
      variant = "filled",
      color = "primary",
      disabled = false,
      loading = false,
      className = "",
      href = undefined,
      onClick,
      icon: ButtonIcon,
      size = "regular",
      type,
      children,
    }: ButtonProps,
    ref?: LegacyRef<any>
  ) => {
    return href ? (
      <Link
        href={href}
        className={`unstyled-link font-bold text-center ${buttonSizeClass[size]} ${buttonClass[variant].class} ${buttonClass[variant].colors[color]} px-10 py-3 rounded flex items-center justify-center gap-2 ${className}`}
        ref={ref}
      >
        {ButtonIcon && <ButtonIcon size={24} />}
        {children}
      </Link>
    ) : (
      <button
        className={`disabled:cursor-not-allowed ${
          loading ? "!bg-transparent" : "disabled:opacity-50"
        } font-bold text-center ${buttonClass[variant].class} ${
          buttonClass[variant].colors[color]
        } ${
          buttonSizeClass[size]
        } rounded flex items-center justify-center gap-2 ${className}`}
        disabled={loading ? true : disabled}
        onClick={onClick}
        ref={ref}
        type={type}
      >
        {loading ? (
          <VibeLoading size={30} rendererClassName="scale-125" />
        ) : (
          <>
            {ButtonIcon && <ButtonIcon size={24} />}
            {children}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
