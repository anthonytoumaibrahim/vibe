// Next stuff
import Link from "next/link";
import { sendRequest } from "@/app/actions";

// Components
import Logo from "@/components/Logo";
import NavLink from "./NavLink";

// Images
import { FaBell, FaMessage } from "react-icons/fa6";
import HeaderAvatar from "./HeaderAvatar";

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
        <NavLink href="/home">Home</NavLink>
        <NavLink href="/profile">My Profile</NavLink>
        <NavLink href="/boarding">Editor</NavLink>
        <NavLink href="/chatrooms">Chat Rooms</NavLink>
        <NavLink href="/">Communities</NavLink>
      </nav>

      <div className="flex items-center gap-6">
        <FaBell size={24} />
        <FaMessage size={24} />
        {user?.balance}
        <HeaderAvatar avatar={user?.avatar_full} />
      </div>
    </header>
  );
};

export default UserHeader;
