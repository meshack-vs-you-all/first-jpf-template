// src/components/Auth/CompleteProfile.jsx
import { useState } from 'react';
import axios from 'axios';

const CompleteProfile = () => {
    const [formData, setFormData] = useState({ phone: '', address: '', dateOfBirth: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSave = async () => {
        try {
            const response = await axios.put(`http://localhost:8000/users/complete-profile`, formData, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            console.log('Profile updated:', response.data);
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-4 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-bold mb-4">Complete Your Profile</h1>
            <div className="space-y-4">
                <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Phone"
                />
                <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Address"
                />
                <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <button
                    onClick={handleSave}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    Save
                </button>
            </div>
        </div>
    );
};

export default CompleteProfile;
