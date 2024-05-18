// src/components/Admin/BookingManagement.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';

const BookingManagement = () => {
    const [bookings, setBookings] = useState([]);
    const [newBooking, setNewBooking] = useState({ user_id: '', service_id: '', start_time: '', end_time: '', status: '' });

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

    const handleAddBooking = async () => {
        try {
            const response = await axios.post('http://localhost:8000/bookings', newBooking, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            setBookings([...bookings, response.data]);
            setNewBooking({ user_id: '', service_id: '', start_time: '', end_time: '', status: '' });
        } catch (error) {
            console.error('Error adding booking:', error);
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-4 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-bold mb-4">Booking Management</h1>
            <div className="space-y-4 mb-4">
                <input
                    type="text"
                    name="user_id"
                    placeholder="User ID"
                    value={newBooking.user_id}
                    onChange={(e) => setNewBooking({ ...newBooking, user_id: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                    type="text"
                    name="service_id"
                    placeholder="Service ID"
                    value={newBooking.service_id}
                    onChange={(e) => setNewBooking({ ...newBooking, service_id: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                    type="datetime-local"
                    name="start_time"
                    value={newBooking.start_time}
                    onChange={(e) => setNewBooking({ ...newBooking, start_time: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                    type="datetime-local"
                    name="end_time"
                    value={newBooking.end_time}
                    onChange={(e) => setNewBooking({ ...newBooking, end_time: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <select
                    name="status"
                    value={newBooking.status}
                    onChange={(e) => setNewBooking({ ...newBooking, status: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded"
                >
                    <option value="Pending">Pending</option>
                    <option value="Confirmed">Confirmed</option>
                    <option value="Cancelled">Cancelled</option>
                    <option value="Completed">Completed</option>
                </select>
                <button
                    onClick={handleAddBooking}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    Add Booking
                </button>
            </div>
            <ul className="space-y-2">
                {bookings.map((booking) => (
                    <li key={booking.id} className="p-2 border border-gray-200 rounded">
                        <p>User ID: {booking.user_id}</p>
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

export default BookingManagement;
