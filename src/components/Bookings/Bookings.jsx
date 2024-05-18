// src/pages/Bookings.jsx

import  { useState, useEffect } from 'react';
import axios from 'axios';

const Bookings = () => {
    const [bookings, setBookings] = useState([]);
    const [newBooking, setNewBooking] = useState({ name: '', date: '', time: '' });
    const [editingBooking, setEditingBooking] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchBookings();
    }, []);

    const fetchBookings = async () => {
        try {
            const response = await axios.get('http://localhost:8000/bookings');
            setBookings(response.data);
        } catch (error) {
            console.error('Error fetching bookings:', error);
            setError('Error fetching bookings.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleCreateBooking = async () => {
        try {
            const response = await axios.post('http://localhost:8000/bookings', newBooking);
            setBookings([...bookings, response.data]);
            setNewBooking({ name: '', date: '', time: '' });
        } catch (error) {
            console.error('Error creating booking:', error);
            setError('Error creating booking.');
        }
    };

    const handleUpdateBooking = async () => {
        try {
            const response = await axios.put(`http://localhost:8000/bookings/${editingBooking.id}`, editingBooking);
            setBookings(bookings.map(booking => booking.id === editingBooking.id ? response.data : booking));
            setEditingBooking(null);
        } catch (error) {
            console.error('Error updating booking:', error);
            setError('Error updating booking.');
        }
    };

    const handleDeleteBooking = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/bookings/${id}`);
            setBookings(bookings.filter(booking => booking.id !== id));
        } catch (error) {
            console.error('Error deleting booking:', error);
            setError('Error deleting booking.');
        }
    };

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="bookings p-5">
            <h1 className="text-3xl font-bold mb-5">Bookings</h1>

            {error && <p className="text-red-500">{error}</p>}

            <div className="mb-5">
                <h2 className="text-2xl font-bold mb-3">Create Booking</h2>
                <input
                    type="text"
                    placeholder="Name"
                    value={newBooking.name}
                    onChange={(e) => setNewBooking({ ...newBooking, name: e.target.value })}
                    className="border p-2 mr-2"
                />
                <input
                    type="date"
                    placeholder="Date"
                    value={newBooking.date}
                    onChange={(e) => setNewBooking({ ...newBooking, date: e.target.value })}
                    className="border p-2 mr-2"
                />
                <input
                    type="time"
                    placeholder="Time"
                    value={newBooking.time}
                    onChange={(e) => setNewBooking({ ...newBooking, time: e.target.value })}
                    className="border p-2 mr-2"
                />
                <button onClick={handleCreateBooking} className="bg-blue-500 text-white px-3 py-1 rounded">
                    Create
                </button>
            </div>

            <div>
                <h2 className="text-2xl font-bold mb-3">All Bookings</h2>
                <ul>
                    {bookings.map(booking => (
                        <li key={booking.id} className="mb-2 border p-2 flex justify-between items-center">
                            {editingBooking && editingBooking.id === booking.id ? (
                                <>
                                    <input
                                        type="text"
                                        value={editingBooking.name}
                                        onChange={(e) => setEditingBooking({ ...editingBooking, name: e.target.value })}
                                        className="border p-2 mr-2"
                                    />
                                    <input
                                        type="date"
                                        value={editingBooking.date}
                                        onChange={(e) => setEditingBooking({ ...editingBooking, date: e.target.value })}
                                        className="border p-2 mr-2"
                                    />
                                    <input
                                        type="time"
                                        value={editingBooking.time}
                                        onChange={(e) => setEditingBooking({ ...editingBooking, time: e.target.value })}
                                        className="border p-2 mr-2"
                                    />
                                    <button onClick={handleUpdateBooking} className="bg-green-500 text-white px-3 py-1 rounded">
                                        Save
                                    </button>
                                    <button onClick={() => setEditingBooking(null)} className="bg-gray-500 text-white px-3 py-1 rounded ml-2">
                                        Cancel
                                    </button>
                                </>
                            ) : (
                                <>
                                    <span>{booking.name} - {booking.date} - {booking.time}</span>
                                    <div>
                                        <button onClick={() => setEditingBooking(booking)} className="bg-yellow-500 text-white px-3 py-1 rounded mr-2">
                                            Edit
                                        </button>
                                        <button onClick={() => handleDeleteBooking(booking.id)} className="bg-red-500 text-white px-3 py-1 rounded">
                                            Delete
                                        </button>
                                    </div>
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Bookings;
