import AnalyticsDashboard from "./dashboard/AnalyticsDashboard";
import SidebarAdminDashboard from "./dashboard/SidebarAdminDashboard";

const AdminDashboard = () => {
  return (
    <div className="bg-white p-5">
      <SidebarAdminDashboard />
      <AnalyticsDashboard />
    </div>
  );
};

export default AdminDashboard;
