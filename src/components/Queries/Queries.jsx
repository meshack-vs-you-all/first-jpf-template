// src/components/Queries/Queries.jsx
import { useState } from 'react';
import axios from 'axios';

const Queries = () => {
    const [query, setQuery] = useState({ user_id: '', content: '' });

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:8000/queries', query, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            setQuery({ user_id: '', content: '' });
            console.log('Query submitted:', response.data);
        } catch (error) {
            console.error('Error submitting query:', error);
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-4 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-bold mb-4">Submit Query</h1>
            <textarea
                name="content"
                placeholder="Write your query..."
                value={query.content}
                onChange={(e) => setQuery({ ...query, content: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
                Submit
            </button>
        </div>
    );
};

export default Queries;
