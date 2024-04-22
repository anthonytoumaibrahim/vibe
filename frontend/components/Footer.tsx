import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 mt-auto">
      <div className="container">
        <Logo fill="#ffffff" width={88} />
        <p className="mt-2">&copy; 2024 - Vibe</p>
      </div>
    </footer>
  );
};

export default Footer;
