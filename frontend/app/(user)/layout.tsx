import React from "react";
import UserHeader from "./components/UserHeader";

// Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <UserHeader />
      <main className="container">{children}</main>
    </>
  );
};

export default UserLayout;
