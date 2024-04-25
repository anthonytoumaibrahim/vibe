// Next stuff
import Link from "next/link";

// Components
import Logo from "@/components/Logo";
import NavLink from "@/components/NavLink";

interface UserHeaderProps {
  className?: string;
}

const UserHeader = ({ className = "" }: UserHeaderProps) => {
  return (
    <header
      className={`${className} bg-slate-50 border-b-2 px-8 h-16 w-full flex items-center justify-between mb-4`}
    >
      <Link href="/" className="unstyled-link">
        <Logo width={88} />
      </Link>

      <nav className="flex items-center gap-6">
        <NavLink href="/" className="!text-black">
          Home
        </NavLink>
        <NavLink href="/" className="!text-black">
          My Profile
        </NavLink>
        <NavLink href="/" className="!text-black">
          Chat Rooms
        </NavLink>
        <NavLink href="/" className="!text-black">
          Communities
        </NavLink>
      </nav>

      <div>hello</div>
    </header>
  );
};

export default UserHeader;
