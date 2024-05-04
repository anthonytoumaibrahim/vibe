// Next stuff
import Link from "next/link";
import { sendRequest } from "@/app/actions";

// Components
import Logo from "@/components/Logo";
import NavLink from "./NavLink";
import HeaderAvatar from "./HeaderAvatar";
import MessagesPopover from "./MessagesPopover";
import MobileMenu from "./MobileMenu";
import Nav from "./Nav";
import VC from "./VC";

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
      className={`${className} bg-slate-50 dark:bg-slate-900 border-b-2 dark:border-black px-8 py-2 w-full flex items-center justify-between md:justify-around mb-4`}
    >
      <Link href="/" className="unstyled-link">
        <Logo width={88} className="dark:fill-white" />
      </Link>

      <Nav />

      <div className="hidden md:flex items-center gap-6">
        <MessagesPopover />
        <VC balance={user?.balance} />
        <HeaderAvatar avatar={user?.avatar_full} />
      </div>

      <MobileMenu />
    </header>
  );
};

export default UserHeader;
