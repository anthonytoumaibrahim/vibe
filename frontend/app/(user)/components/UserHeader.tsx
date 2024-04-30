// Next stuff
import Link from "next/link";
import { sendRequest } from "@/app/actions";

// Components
import Logo from "@/components/Logo";
import NavLink from "@/components/NavLink";
import Image from "next/image";

// Images
import { FaBell, FaMessage } from "react-icons/fa6";

interface UserHeaderProps {
  className?: string;
}

const UserHeader = async ({ className = "" }: UserHeaderProps) => {
  const user: any = await sendRequest({
    method: "GET",
    url: "/user/info",
  });

  return (
    <header
      className={`${className} bg-slate-50 dark:bg-slate-900 border-b-2 dark:border-black px-8 h-16 w-full flex items-center justify-around mb-4`}
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
        <NavLink href="/boarding" className="!text-black dark:!text-white">
          Editor
        </NavLink>
        <NavLink href="/chatrooms" className="!text-black dark:!text-white">
          Chat Rooms
        </NavLink>
        <NavLink href="/" className="!text-black dark:!text-white">
          Communities
        </NavLink>
      </nav>

      <div className="flex items-center gap-6">
        <FaBell size={24} />
        <FaMessage size={24} />
        {user?.balance}
        {user?.avatar_full && (
          <div className="w-14 h-14 rounded-full bg-slate-100 overflow-hidden">
            <Image
              src={user?.avatar_full}
              width={56}
              height={56}
              alt="Profile"
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default UserHeader;
