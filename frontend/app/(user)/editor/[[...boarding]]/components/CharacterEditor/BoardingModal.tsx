import Button from "@/components/Button";
import Modal from "@/components/Modal";

const BoardingModal = ({
  onAccept,
  onCancel,
  disabled = false,
}: {
  onAccept: () => void;
  onCancel: () => void;
  disabled?: boolean;
}) => {
  return (
    <Modal isOpen={true} handleClose={onCancel} className="text-center">
      <h1>Ready to jump in?</h1>
      <p>
        Ready to join Vibe? Remember: you can always change your character
        later.
      </p>
      <div className="flex gap-4 items-center justify-center mt-4">
        <Button onClick={onCancel} color="muted">
          Go back
        </Button>
        <Button onClick={onAccept} disabled={disabled}>
          Let&apos;s Go
        </Button>
      </div>
    </Modal>
  );
};

export default BoardingModal;
