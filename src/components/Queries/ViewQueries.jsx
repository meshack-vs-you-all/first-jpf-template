// src/components/Queries/ViewQueries.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';

const ViewQueries = () => {
    const [queryList, setQueryList] = useState([]);

    useEffect(() => {
        const fetchQueries = async () => {
            try {
                const response = await axios.get('http://localhost:8000/queries', {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                });
                setQueryList(response.data);
            } catch (error) {
                console.error('Error fetching queries:', error);
            }
        };
        fetchQueries();
    }, []);

    return (
        <div className="max-w-3xl mx-auto p-4 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-bold mb-4">Queries</h1>
            <ul className="space-y-2">
                {queryList.map((query) => (
                    <li key={query.id} className="p-2 border border-gray-200 rounded">
                        <p>{query.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ViewQueries;
