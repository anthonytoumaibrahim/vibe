import Logo from "./Logo";
import Link from "next/link";

interface HeaderProps {
  className?: string;
  logoColor?: string;
}

const Header = ({ className = "", logoColor }: HeaderProps) => {
  return (
    <header
      className={`${className} h-20 w-full flex items-center justify-between`}
    >
      <Link href="/">
        <Logo width={128} fill={logoColor} />
      </Link>

      <nav>
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">Communities</Link>
      </nav>
    </header>
  );
};

export default Header;
