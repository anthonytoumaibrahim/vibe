import Logo from "./Logo";
import Link from "next/link";

interface HeaderProps {
  className?: string;
}

const Header = ({ className = "" }: HeaderProps) => {
  return (
    <header className={`${className}`}>
      <Link href="/">
        <Logo />
      </Link>
    </header>
  );
};

export default Header;
