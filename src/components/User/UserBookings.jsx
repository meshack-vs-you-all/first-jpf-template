import { useEffect, useState } from 'react';
import axios from 'axios';

const UserBookings = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await axios.get('http://localhost:8000/bookings');
                setBookings(response.data);
            } catch (error) {
                console.error('Error fetching bookings:', error);
            }
        };

        fetchBookings();
    }, []);

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">My Bookings</h2>
            {bookings.length === 0 ? (
                <p>You have no bookings.</p>
            ) : (
                <ul>
                    {bookings.map((booking) => (
                        <li key={booking.id} className="mb-2 p-2 border rounded">
                            <p>Details: {booking.details}</p>
                            <p>Date: {new Date(booking.created_at).toLocaleDateString()}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default UserBookings;
