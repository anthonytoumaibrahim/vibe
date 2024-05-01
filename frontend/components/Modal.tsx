import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

interface ModalProps {
  isOpen: boolean;
  handleClose: () => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
}

const Modal = ({
  isOpen = false,
  handleClose = () => {},
  title,
  description,
  children,
}: ModalProps) => {
  return (
    <Transition
      show={isOpen}
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
      as={Fragment}
    >
      <Dialog onClose={handleClose} className="relative z-50">
        <div
          className="fixed inset-0 bg-black/30"
          aria-hidden="true"
          onClick={handleClose}
        />

        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <Dialog.Panel className="bg-white max-w-lg w-full p-6 rounded-xl shadow-2xl">
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
