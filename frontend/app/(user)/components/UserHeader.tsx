// Next stuff
import Link from "next/link";
import { sendRequest } from "@/app/actions";

// Components
import Logo from "@/components/Logo";
import NavLink from "@/components/NavLink";
import { cookies } from "next/headers";
import Image from "next/image";
import axios from "axios";

interface UserHeaderProps {
  className?: string;
}

const UserHeader = async ({ className = "" }: UserHeaderProps) => {
  const user = await sendRequest({
    method: "GET",
    url: "/user-info",
  });

  return (
    <header
      className={`${className} bg-slate-50 border-b-2 px-8 h-16 w-full flex items-center justify-between mb-4`}
    >
      <Link href="/" className="unstyled-link">
        <Logo width={88} />
      </Link>

      <nav className="flex items-center gap-6">
        <NavLink href="/home" className="!text-black">
          Home
        </NavLink>
        <NavLink href="/profile" className="!text-black">
          My Profile
        </NavLink>
        <NavLink href="/" className="!text-black">
          Chat Rooms
        </NavLink>
        <NavLink href="/" className="!text-black">
          Communities
        </NavLink>
      </nav>

      <Image src={user.avatar} width={44} height={44} alt="Profile" />
    </header>
  );
};

export default UserHeader;
