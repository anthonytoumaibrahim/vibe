import Sidebar from "./components/Sidebar";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full min-h-screen flex bg-slate-100 dark:bg-slate-900">
      <Sidebar />
      <main className="p-10 w-full">{children}</main>
    </div>
  );
};

export default AdminLayout;
