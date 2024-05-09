"use client";

import VibeLoading from "./components/VibeLoading";

const UserLoading = () => {
  return (
    <div className="flex flex-col items-center gap-20 text-center">
      <VibeLoading size={320} />
      <h1>Please wait, loading...</h1>
    </div>
  );
};

export default UserLoading;
