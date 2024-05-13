import React from "react";
import UserHeader from "./components/UserHeader";
import Footer from "@/components/Footer";

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <UserHeader />
      <main className="container mb-10">{children}</main>
      <Footer />
    </>
  );
};

export default UserLayout;
