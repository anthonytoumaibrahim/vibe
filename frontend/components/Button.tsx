type ButtonVariants = "filled" | "outlined";
type ButtonColors = "primary" | "secondary" | "error" | "success";
type ButtonSize = "small" | "regular" | "large";

interface ButtonProps {
  variant?: ButtonVariants;
  color?: ButtonColors;
  disabled?: boolean;
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
    class: "",
    colors: {
      primary: "bg-primary-main",
      secondary: "bg-secondary-main",
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
  onClick,
  children,
}: ButtonProps) => {
  return (
    <button
      className={`${buttonClass[variant].class} ${buttonClass[variant].colors[color]} px-10 py-3 rounded ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
