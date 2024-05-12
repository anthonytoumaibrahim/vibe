import NavLink from "./NavLink";

interface NavProps {
  className?: string;
  mobile?: boolean;
  isAdmin?: boolean;
}

const Nav = ({ className = "", mobile = false, isAdmin = false }: NavProps) => {
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
      {isAdmin && <NavLink href="/admin">Admin Panel</NavLink>}
    </nav>
  );
};

export default Nav;
