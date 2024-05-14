import Sidebar from '../components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import UserBookings from './UserBookings';
import BookingPortal from './BookingPortal';
import UserPayments from './UserPayments';

const UserDashboard = () => {
  return (
    <div className="flex">
      <Sidebar role="user" />
      <div className="ml-64 p-4 w-full">
        <h1 className="text-3xl font-bold mb-4">User Dashboard</h1>
        <Routes>
          <Route path="bookings" element={<UserBookings />} />
          <Route path="booking-portal" element={<BookingPortal />} />
          <Route path="payments" element={<UserPayments />} />
        </Routes>
      </div>
    </div>
  );
};

export default UserDashboard;
