import { Link, Route, Routes } from 'react-router-dom';
import UserBookings from './UserBookings';
import BookingPortal from './BookingPortal';
import UserPayments from './UserPayments';

const UserDashboard = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">User Dashboard</h1>
            <nav className="mb-4">
                <Link to="bookings" className="mr-4 text-blue-500 hover:underline">My Bookings</Link>
                <Link to="booking-portal" className="mr-4 text-blue-500 hover:underline">Make a Booking</Link>
                <Link to="payments" className="text-blue-500 hover:underline">Payments</Link>
            </nav>
            <Routes>
                <Route path="bookings" element={<UserBookings />} />
                <Route path="booking-portal" element={<BookingPortal />} />
                <Route path="payments" element={<UserPayments />} />
            </Routes>
        </div>
    );
};

export default UserDashboard;
