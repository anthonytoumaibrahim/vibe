"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface AvatarProps {
  url: string;
  size?: number;
  username?: string;
  className?: string;
}

const Avatar = ({ url, size = 56, username, className = "" }: AvatarProps) => {
  const [src, setSrc] = useState(url);

  return (
    <div
      className="rounded-full bg-slate-100 overflow-hidden relative"
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        fill
        sizes={`${size}px`}
        className={`object-contain object-top ${className}`}
        onError={() => setSrc("/images/avatar.svg")}
        alt={username ? username : "Avatar"}
      />
    </div>
  );
};

export default Avatar;
