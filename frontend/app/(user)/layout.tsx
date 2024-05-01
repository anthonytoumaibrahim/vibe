import React from "react";
import UserHeader from "./components/UserHeader";

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <UserHeader />
      <main className="container">{children}</main>
    </>
  );
};

export default UserLayout;
