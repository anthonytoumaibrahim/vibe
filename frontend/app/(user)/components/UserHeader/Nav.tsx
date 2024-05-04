import NavLink from "./NavLink";

interface NavProps {
  className?: string;
  mobile?: boolean;
}

const Nav = ({ className = "", mobile = false }: NavProps) => {
  return (
    <nav
      className={`${
        mobile ? "flex flex-col" : "hidden md:flex"
      } items-center gap-6`}
    >
      <NavLink href="/home">Home</NavLink>
      <NavLink href="/profile">My Profile</NavLink>
      <NavLink href="/editor">Editor</NavLink>
      <NavLink href="/chatrooms">Chat Rooms</NavLink>
    </nav>
  );
};

export default Nav;
