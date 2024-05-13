import Logo from "./Logo";

interface FooterProps {
  className?: string;
}

const Footer = ({ className = "" }: FooterProps) => {
  return (
    <footer className={`bg-black text-white py-10 mt-10`}>
      <div className="container">
        <Logo fill="#ffffff" width={88} />
        <p className="mt-2">&copy; 2024 - Vibe</p>
      </div>
    </footer>
  );
};

export default Footer;
