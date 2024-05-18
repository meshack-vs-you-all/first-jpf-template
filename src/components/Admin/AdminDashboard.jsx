// src/components/Admin/AdminDashboard.jsx

import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    return (
        <div className="max-w-7xl mx-auto p-6 bg-black shadow-md rounded-lg">
            <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link to="/service-management" className="p-6 bg-blue-100 rounded-lg shadow hover:bg-blue-200">
                    <h2 className="text-2xl font-bold mb-2">Manage Services</h2>
                    <p>View and manage all services.</p>
                </Link>
                <Link to="/booking-management" className="p-6 bg-green-100 rounded-lg shadow hover:bg-green-200">
                    <h2 className="text-2xl font-bold mb-2">Manage Bookings</h2>
                    <p>View and manage all bookings.</p>
                </Link>
                <Link to="/payment-management" className="p-6 bg-yellow-100 rounded-lg shadow hover:bg-yellow-200">
                    <h2 className="text-2xl font-bold mb-2">Manage Payments</h2>
                    <p>View and manage all payments.</p>
                </Link>
                <Link to="/view-feedback" className="p-6 bg-red-100 rounded-lg shadow hover:bg-red-200">
                    <h2 className="text-2xl font-bold mb-2">View Feedback</h2>
                    <p>View all user feedback.</p>
                </Link>
                <Link to="/view-queries" className="p-6 bg-purple-100 rounded-lg shadow hover:bg-purple-200">
                    <h2 className="text-2xl font-bold mb-2">Manage Queries</h2>
                    <p>View and manage user queries.</p>
                </Link>
            </div>
        </div>
    );
};

export default AdminDashboard;
