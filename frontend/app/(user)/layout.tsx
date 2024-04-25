import React from "react";
import UserHeader from "./components/UserHeader";

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <UserHeader />
      {children}
    </main>
  );
};

export default UserLayout;
