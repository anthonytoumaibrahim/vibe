import Sidebar from "./components/Sidebar";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full min-h-screen flex">
      <Sidebar />
    </div>
  );
};

export default AdminLayout;
