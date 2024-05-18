import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
                const clientsResponse = await axios.get('http://localhost:8000/trainers/clients', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setClients(clientsResponse.data);

                // Fetch bookings
                const bookingsResponse = await axios.get('http://localhost:8000/trainers/bookings', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setBookings(bookingsResponse.data);

                // Fetch feedbacks
                const feedbacksResponse = await axios.get('http://localhost:8000/trainers/feedbacks', {
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
        return <p>Loading...</p>;
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
                            <li key={client.id} className="p-2 border border-gray-300 rounded">
                                <p>Name: {client.name}</p>
                                <p>Email: {client.email}</p>
                                <p>Phone: {client.phone}</p>
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
                            <li key={booking.id} className="p-2 border border-gray-300 rounded">
                                <p>Client: {booking.clientName}</p>
                                <p>Date: {booking.date}</p>
                                <p>Time: {booking.time}</p>
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
                            <li key={feedback.id} className="p-2 border border-gray-300 rounded">
                                <p>Client: {feedback.clientName}</p>
                                <p>Comment: {feedback.comment}</p>
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
