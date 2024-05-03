import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

interface ModalProps {
  isOpen: boolean;
  handleClose: () => void;
  title?: string;
  description?: string;
  className?: string;
  size?: ModalSize;
  children: React.ReactNode;
}

export enum ModalSize {
  "medium" = "max-w-md",
  "large" = "max-w-lg",
  "small" = "max-w-sm",
  "xl" = "max-w-xl",
  "xxl" = "max-w-2xl",
  "xxxl" = "max-w-3xl",
}

const Modal = ({
  isOpen = false,
  handleClose = () => {},
  title,
  description,
  className = "",
  size = ModalSize.large,
  children,
}: ModalProps) => {
  return (
    <Transition
      show={isOpen}
      enter="ease-out duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      appear
      as={Fragment}
    >
      <Dialog onClose={handleClose} className="relative z-50">
        <div
          className="fixed inset-0 bg-black/30"
          aria-hidden="true"
          onClick={handleClose}
        />

        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <Dialog.Panel
            className={`bg-white ${size} w-full p-6 rounded-xl shadow-2xl ${className}`}
          >
            {title && <Dialog.Title>{title}</Dialog.Title>}
            {description && (
              <Dialog.Description>{description}</Dialog.Description>
            )}
            {children}
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
