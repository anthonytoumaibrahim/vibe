// Next stuff
import Link from "next/link";
import { sendRequest } from "@/app/actions";

// Components
import Logo from "@/components/Logo";
import HeaderAvatar from "./HeaderAvatar";
import MobileMenu from "./MobileMenu";
import Nav from "./Nav";
import VC from "../VC";
import FriendRequests from "./FriendRequests";
import Button from "@/components/Button";

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
      className={`${className} bg-slate-50 dark:bg-slate-900 border-b-2 dark:border-black px-8 py-2 w-full flex justify-between lg:grid grid-cols-3 mb-4`}
    >
      <div className="flex items-center 2xl:justify-center">
        <Link href="/" className="unstyled-link">
          <Logo width={88} className="dark:fill-white" />
        </Link>
      </div>

      <Nav isAdmin={user?.is_admin} className="justify-center" />

      <div className="hidden md:flex items-center justify-end 2xl:justify-center gap-4 xl:gap-6">
        <FriendRequests requests={user?.friend_requests} />
        <VC balance={user?.balance} />
        {!user?.is_premium && (
          <Button
            href="/premium"
            variant="link"
            size="small"
            className="premium-text !p-0"
          >
            Premium
          </Button>
        )}
        <HeaderAvatar
          username={user?.username}
          avatar={user?.avatar_full}
          is_premium={user?.is_premium}
        />
      </div>

      <MobileMenu />
    </header>
  );
};

export default UserHeader;
