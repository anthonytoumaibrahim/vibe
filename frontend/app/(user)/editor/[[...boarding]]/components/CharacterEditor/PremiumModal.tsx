import Button from "@/components/Button";
import Modal, { ModalSize } from "@/components/Modal";
import Image from "next/image";

interface PremiumModalProps {
  type?: string;
  id?: number;
  show?: boolean;
  handleClose?: () => void;
}

const PremiumModal = ({
  type,
  id,
  show = false,
  handleClose = () => {},
}: PremiumModalProps) => {
  return (
    <Modal
      isOpen={show}
      handleClose={handleClose}
      size={ModalSize.xxl}
      className="!p-0 flex items-center overflow-hidden"
    >
      <div className="relative z-0 w-72 h-72 overflow-hidden bg-premium-700 before:w-1/2 before:h-1/2 before:absolute before:-right-6 before:-top-6 before:bg-premium-200 before:rounded-full before:filter before:blur-lg after:w-full after:h-full after:rounded-full after:absolute after:top-0 after:left-0 after:bg-premium-400 after:filter after:blur-xl before:-z-[1] after:-z-[2] shrink-0">
        <Image
          src={`/images/2d_thumbs/${type}/${id}.webp`}
          width={288}
          height={288}
          quality={100}
          className="object-contain h-full"
          alt=""
        />
      </div>

      <div className="text-center w-full flex flex-col items-center gap-3 px-6">
        <h1 className="bg-gradient-to-t from-premium-800 to-premium-400 text-transparent bg-clip-text uppercase">
          Premium Item
        </h1>
        <p>
          This item is only available to{" "}
          <strong className="bg-gradient-to-t from-premium-800 to-premium-400 text-transparent bg-clip-text">
            Premium
          </strong>{" "}
          users. Upgrade now to add it to your character.
        </p>
        <Button href="/premium" variant="gradient" color="premium">
          Upgrade now
        </Button>
        <Button
          size="small"
          variant="link"
          color="muted"
          className="font-normal text-sm"
          onClick={handleClose}
        >
          No thanks
        </Button>
      </div>
    </Modal>
  );
};

export default PremiumModal;
