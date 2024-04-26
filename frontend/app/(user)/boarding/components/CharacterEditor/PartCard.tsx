interface PartCardProps {
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
  height?: number;
  selected?: boolean;
}

const PartCard = ({
  children,
  className = "",
  height = 240,
  onClick = () => {},
  selected = false,
}: PartCardProps) => {
  return (
    <div
      style={{ height }}
      className={`z-0 rounded-lg relative overflow-hidden cursor-pointer before:w-1/2 before:h-1/2 before:absolute before:-right-6 before:-top-6 before:bg-primary-200 before:rounded-full before:filter before:blur-lg after:w-full after:h-full after:rounded-full after:absolute after:top-0 after:left-0 after:bg-primary-400 after:filter after:blur-xl before:-z-[1] after:-z-[2] ${
        selected
          ? "bg-primary-main"
          : "bg-slate-200 hover:bg-primary-main hover:before:block hover:after:block before:hidden after:hidden"
      } ${className}`}
      onClick={() => onClick()}
    >
      {children}
    </div>
  );
};

export default PartCard;
