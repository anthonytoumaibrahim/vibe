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
      className={`${isActive ? "text-primary-main" : "hover:text-primary-400"}`}
    >
      <Icon size={20} />
    </button>
  );
};

export default EditorButton;
