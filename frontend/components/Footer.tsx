import Link from "next/link";
import Logo from "./Logo";

interface FooterProps {
  className?: string;
}

const Footer = ({ className = "" }: FooterProps) => {
  return (
    <footer className={`bg-black text-white py-10 mt-auto`}>
      <div className="container flex max-md:flex-col gap-4 justify-between">
        <div>
          <Logo fill="#ffffff" width={88} />
          <p className="mt-2">&copy; 2024 - Vibe</p>
        </div>
        <div className="md:ml-auto">
          <p className="text-sm">
            Illustrations by{" "}
            <Link
              href="https://www.freepik.com/author/upklyak"
              target="_blank"
              className="font-bold"
            >
              upklyak
            </Link>{" "}
            on{" "}
            <Link href="https://www.freepik.com/" target="_blank">
              Freepik
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
