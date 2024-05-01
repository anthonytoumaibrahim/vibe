interface EditorButtonProps {
  icon: any;
  onClick: () => void;
  isActive?: boolean;
}

const EditorButton = ({
  icon: Icon,
  onClick = () => {},
  isActive = false,
}: EditorButtonProps) => {
  return (
    <button
      onClick={() => onClick()}
      className={`${isActive ? "text-primary-main" : "hover:text-primary-500"}`}
    >
      <Icon size={24} />
    </button>
  );
};

export default EditorButton;
