import Sidebar from "./components/Sidebar";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full min-h-screen flex bg-slate-100">
      <Sidebar />
    </div>
  );
};

export default AdminLayout;
