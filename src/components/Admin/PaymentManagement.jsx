// src/components/Admin/PaymentManagement.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';

const PaymentManagement = () => {
    const [payments, setPayments] = useState([]);
    const [newPayment, setNewPayment] = useState({ user_id: '', amount: '', status: '' });

    useEffect(() => {
        const fetchPayments = async () => {
            try {
                const response = await axios.get('http://localhost:8000/payments', {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                });
                setPayments(response.data);
            } catch (error) {
                console.error('Error fetching payments:', error);
            }
        };
        fetchPayments();
    }, []);

    const handleAddPayment = async () => {
        try {
            const response = await axios.post('http://localhost:8000/payments', newPayment, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            setPayments([...payments, response.data]);
            setNewPayment({ user_id: '', amount: '', status: '' });
        } catch (error) {
            console.error('Error adding payment:', error);
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-4 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-bold mb-4">Payment Management</h1>
            <div className="space-y-4 mb-4">
                <input
                    type="text"
                    name="user_id"
                    placeholder="User ID"
                    value={newPayment.user_id}
                    onChange={(e) => setNewPayment({ ...newPayment, user_id: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                    type="number"
                    name="amount"
                    placeholder="Amount"
                    value={newPayment.amount}
                    onChange={(e) => setNewPayment({ ...newPayment, amount: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <select
                    name="status"
                    value={newPayment.status}
                    onChange={(e) => setNewPayment({ ...newPayment, status: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded"
                >
                    <option value="Pending">Pending</option>
                    <option value="Completed">Completed</option>
                    <option value="Cancelled">Cancelled</option>
                </select>
                <button
                    onClick={handleAddPayment}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    Add Payment
                </button>
            </div>
            <ul className="space-y-2">
                {payments.map((payment) => (
                    <li key={payment.id} className="p-2 border border-gray-200 rounded">
                        <p>User ID: {payment.user_id}</p>
                        <p>Amount: {payment.amount}</p>
                        <p>Status: {payment.status}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PaymentManagement;
