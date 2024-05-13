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
      className={`${className} bg-slate-50 dark:bg-slate-900 border-b-2 dark:border-black px-8 py-2 w-full flex items-center justify-between md:justify-around mb-4`}
    >
      <Link href="/" className="unstyled-link">
        <Logo width={88} className="dark:fill-white" />
      </Link>

      <Nav isAdmin={user?.is_admin} />

      <div className="hidden md:flex items-center gap-6">
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
          avatar={user?.avatar_full}
          is_premium={user?.is_premium}
        />
      </div>

      <MobileMenu />
    </header>
  );
};

export default UserHeader;
