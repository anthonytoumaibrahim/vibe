import Logo from "@/components/Logo";
import Nav from "./Nav";

const Sidebar = () => {
  return (
    <aside className="w-full min-h-screen max-w-[280px] border-r-2 bg-white shadow-lg p-6 flex flex-col items-center gap-10">
      <Logo width={88} />
      <Nav />
    </aside>
  );
};

export default Sidebar;
