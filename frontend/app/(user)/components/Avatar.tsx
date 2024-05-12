"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface AvatarProps {
  url?: string | null;
  size?: number;
  username?: string;
  className?: string;
  isPremium?: boolean;
}

const Avatar = ({
  url = null,
  size = 56,
  username,
  className = "",
  isPremium = false,
}: AvatarProps) => {
  const [src, setSrc] = useState(url);

  return (
    <div
      className={`rounded-full shrink-0 ${
        isPremium
          ? "bg-premium-700 before:w-1/2 before:h-1/2 before:absolute before:-right-2 before:-top-2 before:bg-premium-200 before:rounded-full before:filter before:blur-lg after:w-full after:h-full after:rounded-full after:absolute after:top-0 after:left-0 after:bg-premium-400 after:filter after:blur-xl before:-z-[1] after:-z-[2] shadow-md shadow-premium-600"
          : "bg-slate-100 dark:bg-black"
      } overflow-hidden relative z-0`}
      style={{ width: size, height: size }}
    >
      <Image
        src={src ? src : "/images/avatar.svg"}
        fill
        className={`object-cover object-top aspect-auto h-auto ${className}`}
        onError={() => setSrc("/images/avatar.svg")}
        alt={username ? username : "Avatar"}
      />
    </div>
  );
};

export default Avatar;
