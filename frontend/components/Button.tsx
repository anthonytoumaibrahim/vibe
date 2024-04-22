import Link from "next/link";

type ButtonVariants = "filled" | "outlined";
type ButtonColors = "primary" | "secondary" | "error" | "success";
type ButtonSize = "small" | "regular" | "large";

interface ButtonProps {
  variant?: ButtonVariants;
  color?: ButtonColors;
  disabled?: boolean;
  href?: string;
  className?: string;
  onClick?: () => void;
  readonly children?: any;
}

interface VariantClass {
  class: string;
  colors: Record<ButtonColors, string>;
}

const buttonClass: Record<ButtonVariants, VariantClass> = {
  filled: {
    class: "active:shadow-inner",
    colors: {
      primary:
        "bg-primary-main hover:bg-gradient-to-t hover:from-primary-main hover:to-primary-600 active:from-primary-600 active:to-primary-main",
      secondary:
        "bg-secondary-main hover:bg-gradient-to-t hover:from-secondary-main hover:to-secondary-400 active:from-secondary-400 active:to-secondary-main",
      error: "",
      success: "",
    },
  },
  outlined: {
    class: "border-2",
    colors: {
      primary: "bg-primary-main",
      secondary: "bg-secondary-main",
      error: "",
      success: "",
    },
  },
};

const Button = ({
  variant = "filled",
  color = "primary",
  disabled = false,
  className = "",
  href = undefined,
  onClick,
  children,
}: ButtonProps) => {
  return href ? (
    <Link
      href={href}
      className={`unstyled-link ${buttonClass[variant].class} ${buttonClass[variant].colors[color]} px-10 py-3 rounded ${className}`}
    >
      {children}
    </Link>
  ) : (
    <button
      className={`disabled:cursor-not-allowed ${buttonClass[variant].class} ${buttonClass[variant].colors[color]} px-10 py-3 rounded ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
