interface PartCardProps {
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const PartCard = ({
  children,
  className = "",
  onClick = () => {},
}: PartCardProps) => {
  return (
    <div
      className={`bg-slate-200 rounded-lg h-[240px] relative ${className}`}
      onClick={() => onClick()}
    >
      {children}
    </div>
  );
};

export default PartCard;
