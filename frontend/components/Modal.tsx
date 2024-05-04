import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FaX } from "react-icons/fa6";

interface ModalProps {
  isOpen: boolean;
  handleClose: () => void;
  title?: string;
  description?: string;
  className?: string;
  size?: ModalSize;
  showX?: boolean;
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
  showX = false,
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
            className={`bg-white dark:bg-slate-900 ${size} w-full p-6 rounded-xl shadow-2xl ${className}`}
          >
            {showX && (
              <button
                onClick={handleClose}
                className="opacity-50 hover:opacity-100 absolute top-4 right-4"
              >
                <FaX size={20} />
              </button>
            )}
            {title && (
              <Dialog.Title className="mb-2 text-center">{title}</Dialog.Title>
            )}
            {description && (
              <Dialog.Description className="mb-2 text-center">
                {description}
              </Dialog.Description>
            )}
            {children}
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
