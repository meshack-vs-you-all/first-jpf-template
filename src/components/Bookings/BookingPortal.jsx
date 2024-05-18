import { useState } from 'react';
import axios from 'axios';

const BookingPortal = () => {
    const [details, setDetails] = useState('');
    const [message, setMessage] = useState('');

    const handleBooking = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/bookings', { details });
            setMessage('Booking successful!');
            setDetails('');
        } catch (error) {
            console.error('Error making booking:', error);
            setMessage('Booking failed. Please try again.');
        }
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Make a Booking</h2>
            {message && <p>{message}</p>}
            <form onSubmit={handleBooking}>
                <textarea
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder="Enter booking details"
                    required
                    className="w-full p-2 border rounded mb-4"
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default BookingPortal;
