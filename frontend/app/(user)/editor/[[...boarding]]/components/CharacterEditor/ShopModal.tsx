import { useState } from "react";
import { useAppDispatch } from "@/app/lib/store";
import Button from "@/components/Button";
import Modal, { ModalSize } from "@/components/Modal";
import Image from "next/image";
import { purchasePart } from "../../actions";
import { toast } from "react-hot-toast";
import VC from "@/app/(user)/components/VC";

interface ShopModalProps {
  type?: string;
  id?: number;
  server_id: number;
  show?: boolean;
  price?: number;
  handleClose?: () => void;
  equipItem?: () => void;
}

const ShopModal = ({
  type,
  id,
  server_id,
  show = false,
  price = 0,
  handleClose = () => {},
  equipItem = () => {},
}: ShopModalProps) => {
  const dispatch = useAppDispatch();

  const [noBalance, setNoBalance] = useState(false);
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleEquip = () => {
    equipItem();
    handleClose();
  };

  const handlePurchase = async () => {
    setIsLoading(true);
    const response: any = await purchasePart(server_id);
    if (response?.success) {
      setPurchaseSuccess(true);
      dispatch({
        type: "characterPartsSlice/purchase",
        payload: {
          type: type,
          id: server_id,
        },
      });
    } else {
      toast.error(response?.message ?? "Oops, couldn't purchase this part.");
      if (response?.balance_error) {
        setNoBalance(true);
      }
    }
    setIsLoading(false);
  };

  return (
    <Modal
      isOpen={show}
      handleClose={handleClose}
      size={ModalSize.xxl}
      className="!p-0 flex items-center overflow-hidden"
    >
      <div
        className={`relative z-0 w-72 h-72 overflow-hidden ${
          purchaseSuccess
            ? "bg-green-700 before:bg-green-200 after:bg-green-400"
            : noBalance
            ? "bg-red-700 before:bg-red-200 after:bg-red-400"
            : "bg-primary-700 before:bg-primary-200 after:bg-primary-400"
        } before:w-1/2 before:h-1/2 before:absolute before:-right-6 before:-top-6 before:rounded-full before:filter before:blur-lg after:w-full after:h-full after:rounded-full after:absolute after:top-0 after:left-0 after:filter after:blur-xl before:-z-[1] after:-z-[2] shrink-0`}
      >
        <Image
          src={`/images/2d_thumbs/${type}/${id}.svg`}
          fill
          sizes="100%"
          className="object-contain"
          alt=""
        />
      </div>

      <div className="text-center w-full flex flex-col items-center gap-3 px-6">
        <h1
          className={`bg-gradient-to-t ${
            purchaseSuccess
              ? "from-green-800 to-green-400"
              : noBalance
              ? "from-red-800 to-red-400"
              : "from-primary-main to-primary-400"
          } text-transparent bg-clip-text uppercase`}
        >
          {purchaseSuccess
            ? "Purchased!"
            : noBalance
            ? "Not enough VC"
            : "Buy Item"}
        </h1>
        {purchaseSuccess ? (
          <p>Item has been successfully purchased.</p>
        ) : noBalance ? (
          <p>You don&apos;t have enough VC balance.</p>
        ) : (
          <p>
            This item costs{" "}
            <strong className="text-primary-main">{price} VC</strong>. Do you
            want to purchase it?
          </p>
        )}
        {purchaseSuccess ? (
          <Button variant="gradient" color="success" onClick={handleEquip}>
            Equip your new item
          </Button>
        ) : noBalance ? (
          <Button variant="gradient" color="error" href="/premium">
            Buy VC
          </Button>
        ) : (
          <Button
            variant="gradient"
            color="primary"
            onClick={handlePurchase}
            loading={isLoading}
          >
            Purchase{" "}
            <VC
              balance={price}
              size={24}
              className="inline-flex"
              balanceClassName="text-white"
            />
          </Button>
        )}
        <Button
          size="small"
          variant="link"
          color="muted"
          className="font-normal text-sm"
          onClick={handleClose}
        >
          {purchaseSuccess ? "Close" : "No thanks"}
        </Button>
      </div>
    </Modal>
  );
};

export default ShopModal;
