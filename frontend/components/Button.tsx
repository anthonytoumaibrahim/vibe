import Link from "next/link";

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
}

interface VariantClass {
  class: string;
  colors: Record<ButtonColors, string>;
}

const buttonSizeClass = {
  small: "",
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
      error: "",
      success: "",
      white: "text-white",
      premium:
        "bg-premium-600 hover:bg-premium-700 active:bg-gradient-to-t active:from-premium-400 active:to-premium-600 text-white",
      muted: "",
    },
  },
  gradient: {
    class: "active:shadow-inner",
    colors: {
      primary:
        "bg-gradient-to-t from-primary-main to-primary-500 hover:from-primary-600 hover:to-primary-400 active:from-primary-500 active:to-primary-main text-white",
      secondary: "",
      error: "",
      success: "",
      white: "",
      muted: "",
      premium:
        "bg-gradient-to-t from-premium-600 to-premium-400 hover:from-premium-500 hover:to-premium-300 active:from-premium-400 active:to-premium-600 text-white",
    },
  },
  outlined: {
    class: "border-2",
    colors: {
      primary: "bg-primary-main",
      secondary: "bg-secondary-main",
      error: "",
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
      error: "",
      success: "",
      white: "!text-white",
      muted: "!text-slate-400",
      premium: "",
    },
  },
};

const Button = ({
  variant = "filled",
  color = "primary",
  disabled = false,
  loading = false,
  className = "",
  href = undefined,
  onClick,
  icon: ButtonIcon,
  size = "regular",
  children,
}: ButtonProps) => {
  return href ? (
    <Link
      href={href}
      className={`unstyled-link font-bold text-center ${buttonClass[variant].class} ${buttonClass[variant].colors[color]} px-10 py-3 rounded ${className}`}
    >
      {children}
    </Link>
  ) : (
    <button
      className={`disabled:cursor-not-allowed disabled:opacity-50 font-bold text-center ${buttonClass[variant].class} ${buttonClass[variant].colors[color]} ${buttonSizeClass[size]} rounded flex items-center justify-center gap-2 ${className}`}
      disabled={loading ? true : disabled}
      onClick={onClick}
    >
      {ButtonIcon && <ButtonIcon size={24} />}
      {children}
    </button>
  );
};

export default Button;
