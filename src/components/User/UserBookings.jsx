// src/components/User/UserBookings.jsx
import  { useState, useEffect } from 'react';
import axios from 'axios';

const UserBookings = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await axios.get('http://localhost:8000/bookings', {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                });
                setBookings(response.data);
            } catch (error) {
                console.error('Error fetching bookings:', error);
            }
        };
        fetchBookings();
    }, []);

    return (
        <div className="max-w-3xl mx-auto p-4 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-bold mb-4">My Bookings</h1>
            <ul className="space-y-2">
                {bookings.map((booking) => (
                    <li key={booking.id} className="p-2 border border-gray-200 rounded">
                        <p>Service ID: {booking.service_id}</p>
                        <p>Start Time: {booking.start_time}</p>
                        <p>End Time: {booking.end_time}</p>
                        <p>Status: {booking.status}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserBookings;
