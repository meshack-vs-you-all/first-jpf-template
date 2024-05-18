// src/components/User/UserDashboard.jsx

import { Link } from 'react-router-dom';

const UserDashboard = () => {
    return (
        <div className="max-w-7xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-3xl font-bold mb-6">User Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link to="/profile" className="p-6 bg-blue-100 rounded-lg shadow hover:bg-blue-200">
                    <h2 className="text-2xl font-bold mb-2">Profile</h2>
                    <p>View and edit your profile.</p>
                </Link>
                <Link to="/user-bookings" className="p-6 bg-green-100 rounded-lg shadow hover:bg-green-200">
                    <h2 className="text-2xl font-bold mb-2">My Bookings</h2>
                    <p>View your bookings.</p>
                </Link>
                <Link to="/feedback" className="p-6 bg-red-100 rounded-lg shadow hover:bg-red-200">
                    <h2 className="text-2xl font-bold mb-2">Submit Feedback</h2>
                    <p>Submit feedback about our services.</p>
                </Link>
                <Link to="/queries" className="p-6 bg-purple-100 rounded-lg shadow hover:bg-purple-200">
                    <h2 className="text-2xl font-bold mb-2">Submit Query</h2>
                    <p>Submit a query or question.</p>
                </Link>
            </div>
        </div>
    );
};

export default UserDashboard;
