interface ButtonProps {
  disabled?: boolean;
  className?: string;
  readonly children?: any;
}

const Button = ({
  disabled = false,
  className = "",
  children,
}: ButtonProps) => {
  return (
    <button
      className={`bg-primary-main px-10 py-4 rounded ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
