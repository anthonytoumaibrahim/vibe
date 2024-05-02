import Button from "@/components/Button";
import Modal, { ModalSize } from "@/components/Modal";
import Image from "next/image";

interface ShopModalProps {
  type?: string;
  id?: number;
  show?: boolean;
  price?: number;
  handleClose?: () => void;
}

const ShopModal = ({
  type,
  id,
  show = false,
  price = 0,
  handleClose = () => {},
}: ShopModalProps) => {
  return (
    <Modal
      isOpen={show}
      handleClose={handleClose}
      size={ModalSize.xxl}
      className="!p-0 flex items-center overflow-hidden"
    >
      <div className="relative z-0 w-72 h-72 overflow-hidden bg-primary-700 before:w-1/2 before:h-1/2 before:absolute before:-right-6 before:-top-6 before:bg-primary-200 before:rounded-full before:filter before:blur-lg after:w-full after:h-full after:rounded-full after:absolute after:top-0 after:left-0 after:bg-primary-400 after:filter after:blur-xl before:-z-[1] after:-z-[2] shrink-0">
        <Image
          src={`/images/2d_thumbs/${type}/${id}.svg`}
          fill
          sizes="100%"
          className="object-contain"
          alt=""
        />
      </div>

      <div className="text-center w-full flex flex-col items-center gap-3 px-6">
        <h1 className="bg-gradient-to-t from-primary-main to-primary-400 text-transparent bg-clip-text uppercase">
          Buy Item
        </h1>
        <p>
          This item costs{" "}
          <strong className="bg-gradient-to-t from-primary-main to-primary-400 text-transparent bg-clip-text">
            {price} VC
          </strong>
          . Do you want to purchase it?
        </p>
        <Button variant="gradient" color="primary">
          Purchase
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

export default ShopModal;
