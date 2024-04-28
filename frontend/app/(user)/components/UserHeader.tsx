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
      className={`${className} bg-slate-50 dark:bg-slate-900 border-b-2 dark:border-black px-8 h-16 w-full flex items-center justify-between mb-4`}
    >
      <Link href="/" className="unstyled-link">
        <Logo width={88} className="dark:fill-white" />
      </Link>

      <nav className="flex items-center gap-6">
        <NavLink href="/home" className="!text-black dark:!text-white">
          Home
        </NavLink>
        <NavLink href="/profile" className="!text-black dark:!text-white">
          My Profile
        </NavLink>
        <NavLink href="/" className="!text-black dark:!text-white">
          Chat Rooms
        </NavLink>
        <NavLink href="/" className="!text-black dark:!text-white">
          Communities
        </NavLink>
      </nav>

      {user?.avatar && (
        <Image src={user?.avatar} width={44} height={44} alt="Profile" />
      )}
    </header>
  );
};

export default UserHeader;
