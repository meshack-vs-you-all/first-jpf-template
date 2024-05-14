import Sidebar from '../components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import AdminComponent1 from './AdminComponents/AdminComponent1';
import AdminComponent2 from './AdminComponents/AdminComponent2';

const AdminDashboard = () => {
  return (
    <div className="flex">
      <Sidebar role="admin" />
      <div className="ml-64 p-4 w-full">
        <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
        <Routes>
          <Route path="admin-component-1" element={<AdminComponent1 />} />
          <Route path="admin-component-2" element={<AdminComponent2 />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;
