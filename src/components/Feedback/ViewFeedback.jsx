// src/components/Feedback/ViewFeedback.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';

const ViewFeedback = () => {
    const [feedbackList, setFeedbackList] = useState([]);

    useEffect(() => {
        const fetchFeedback = async () => {
            try {
                const response = await axios.get('http://localhost:8000/feedback', {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                });
                setFeedbackList(response.data);
            } catch (error) {
                console.error('Error fetching feedback:', error);
            }
        };
        fetchFeedback();
    }, []);

    return (
        <div className="max-w-3xl mx-auto p-4 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-bold mb-4">Feedback</h1>
            <ul className="space-y-2">
                {feedbackList.map((feedback) => (
                    <li key={feedback.id} className="p-2 border border-gray-200 rounded">
                        <p>{feedback.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ViewFeedback;
