"use client";

import Modal, { ModalSize } from "@/components/Modal";
import { useState } from "react";
import { FaBarsStaggered, FaX } from "react-icons/fa6";
import LogoutButton from "./LogoutButton";
import ThemeToggler from "./ThemeToggler";
import Nav from "./Nav";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="md:hidden">
        <FaBarsStaggered size={32} />
      </button>
      <Modal
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        className="fixed top-0 right-0 h-screen rounded-none max-w-xs flex flex-col gap-6 p-10"
        size={ModalSize.small}
        showX={true}
      >
        <Nav mobile={true} />
        <div className="mt-auto flex flex-col gap-4 w-full">
          <ThemeToggler />
          <LogoutButton />
        </div>
      </Modal>
    </>
  );
};

export default MobileMenu;
