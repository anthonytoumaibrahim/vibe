import Logo from "./Logo";
import Link from "next/link";
import NavLink from "./NavLink";

interface HeaderProps {
  className?: string;
  logoColor?: string;
  navLinkClass?: string;
}

const Header = ({
  className = "",
  logoColor,
  navLinkClass = "",
}: HeaderProps) => {
  return (
    <header
      className={`${className} px-8 h-20 w-full flex items-center justify-between`}
    >
      <Link href="/" className="unstyled-link">
        <Logo width={128} fill={logoColor} />
      </Link>

      {/* <nav className="flex items-center gap-4">
        <NavLink href="/" className={navLinkClass}>
          Home
        </NavLink>
        <NavLink href="/about" className={navLinkClass}>
          About
        </NavLink>
        <NavLink href="/communities" className={navLinkClass}>
          Communities
        </NavLink>
      </nav> */}
    </header>
  );
};

export default Header;
