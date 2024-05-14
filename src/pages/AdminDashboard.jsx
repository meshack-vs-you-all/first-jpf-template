// src/pages/AdminDashboard.jsx

import { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
    const [users, setUsers] = useState([]);
    const [bookings, setBookings] = useState([]);
    const [payments, setPayments] = useState([]);

    useEffect(() => {
        // Fetch data for users, bookings, and payments
        const fetchData = async () => {
            try {
                const usersResponse = await axios.get('http://localhost:8000/admin/users');
                setUsers(usersResponse.data);

                const bookingsResponse = await axios.get('http://localhost:8000/bookings');
                setBookings(bookingsResponse.data);

                const paymentsResponse = await axios.get('http://localhost:8000/payments');
                setPayments(paymentsResponse.data);
            } catch (error) {
                console.error('Error fetching admin data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="admin-dashboard p-5">
            <h1 className="text-3xl font-bold mb-5">Admin Dashboard</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                <div className="bg-white p-5 rounded-lg shadow">
                    <h2 className="text-2xl font-bold mb-3">Manage Users</h2>
                    <ul>
                        {users.map(user => (
                            <li key={user.id} className="mb-2">
                                <div className="flex justify-between items-center">
                                    <span>{user.email}</span>
                                    <button className="bg-red-500 text-white px-3 py-1 rounded" onClick={() => handleDeleteUser(user.id)}>Delete</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-white p-5 rounded-lg shadow">
                    <h2 className="text-2xl font-bold mb-3">Manage Bookings</h2>
                    <ul>
                        {bookings.map(booking => (
                            <li key={booking.id} className="mb-2">
                                <div className="flex justify-between items-center">
                                    <span>{booking.name}</span>
                                    <button className="bg-red-500 text-white px-3 py-1 rounded" onClick={() => handleDeleteBooking(booking.id)}>Delete</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-white p-5 rounded-lg shadow">
                    <h2 className="text-2xl font-bold mb-3">Manage Payments</h2>
                    <ul>
                        {payments.map(payment => (
                            <li key={payment.id} className="mb-2">
                                <div className="flex justify-between items-center">
                                    <span>{payment.status}</span>
                                    <button className="bg-red-500 text-white px-3 py-1 rounded" onClick={() => handleDeletePayment(payment.id)}>Delete</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

// Placeholder functions for delete actions
const handleDeleteUser = (id) => {
    console.log('Delete user with id:', id);
};

const handleDeleteBooking = (id) => {
    console.log('Delete booking with id:', id);
};

const handleDeletePayment = (id) => {
    console.log('Delete payment with id:', id);
};

export default AdminDashboard;
