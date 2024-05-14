import { useEffect, useState } from 'react';
import axios from 'axios';

const UserPayments = () => {
    const [payments, setPayments] = useState([]);

    useEffect(() => {
        const fetchPayments = async () => {
            try {
                const response = await axios.get('http://localhost:8000/payments');
                setPayments(response.data);
            } catch (error) {
                console.error('Error fetching payments:', error);
            }
        };

        fetchPayments();
    }, []);

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">My Payments</h2>
            {payments.length === 0 ? (
                <p>You have no payments.</p>
            ) : (
                <ul>
                    {payments.map((payment) => (
                        <li key={payment.id} className="mb-2 p-2 border rounded">
                            <p>Amount: ${payment.amount}</p>
                            <p>Status: {payment.status}</p>
                            <p>Date: {new Date(payment.created_at).toLocaleDateString()}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default UserPayments;
