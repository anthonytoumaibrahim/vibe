"use client";

import VibeLoading from "./components/VibeLoading";

const UserLoading = () => {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <VibeLoading />
      <h1>Please wait, loading...</h1>
    </div>
  );
};

export default UserLoading;
