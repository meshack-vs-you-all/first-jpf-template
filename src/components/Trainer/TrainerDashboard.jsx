import { useState, useEffect } from 'react';
import axios from 'axios';
import LoadingTrainers from '../Shared/LoadingTrainers';

const TrainerDashboard = () => {
    const [clients, setClients] = useState([]);
    const [bookings, setBookings] = useState([]);
    const [feedbacks, setFeedbacks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTrainerData = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                setLoading(false);
                return;
            }
            try {
                // Fetch assigned clients
                const clientsResponse = await axios.get('http://localhost:8000/api/trainers/assigned-clients', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setClients(clientsResponse.data);

                // Fetch bookings
                const bookingsResponse = await axios.get('http://localhost:8000/api/trainers/bookings', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setBookings(bookingsResponse.data);

                // Fetch feedbacks
                const feedbacksResponse = await axios.get('http://localhost:8000/api/trainers/feedbacks', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setFeedbacks(feedbacksResponse.data);
            } catch (error) {
                console.error('Error fetching trainer data:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchTrainerData();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <p><LoadingTrainers/>...</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Trainer Dashboard</h1>
            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Assigned Clients</h2>
                {clients.length === 0 ? (
                    <p>No assigned clients.</p>
                ) : (
                    <ul className="space-y-2">
                        {clients.map(client => (
                            <li key={client.user_id} className="p-2 border border-gray-300 rounded">
                                <p>Name: {client.username}</p>
                                <p>Email: {client.email}</p>
                                <p>Phone: {client.phone_number}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </section>
            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Upcoming Bookings</h2>
                {bookings.length === 0 ? (
                    <p>No upcoming bookings.</p>
                ) : (
                    <ul className="space-y-2">
                        {bookings.map(booking => (
                            <li key={booking.booking_id} className="p-2 border border-gray-300 rounded">
                                <p>Client: {booking.user.username}</p>
                                <p>Date: {new Date(booking.start_time).toLocaleDateString()}</p>
                                <p>Time: {new Date(booking.start_time).toLocaleTimeString()} - {new Date(booking.end_time).toLocaleTimeString()}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </section>
            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Feedback</h2>
                {feedbacks.length === 0 ? (
                    <p>No feedback available.</p>
                ) : (
                    <ul className="space-y-2">
                        {feedbacks.map(feedback => (
                            <li key={feedback.feedback_id} className="p-2 border border-gray-300 rounded">
                                <p>Client: {feedback.user.username}</p>
                                <p>Comment: {feedback.feedback_text}</p>
                                <p>Rating: {feedback.rating}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </div>
    );
};

export default TrainerDashboard;
