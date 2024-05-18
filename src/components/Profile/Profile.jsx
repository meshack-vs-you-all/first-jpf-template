// src/components/Profile/Profile.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
    const [profile, setProfile] = useState({});
    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({});

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get('http://localhost:8000/users/me', {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                });
                setProfile(response.data);
                setFormData(response.data);
            } catch (error) {
                console.error('Error fetching profile:', error);
            }
        };
        fetchProfile();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSave = async () => {
        try {
            const response = await axios.put(`http://localhost:8000/users/${profile.user_id}`, formData, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            setProfile(response.data);
            setEditMode(false);
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-4 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-bold mb-4">Profile</h1>
            {editMode ? (
                <div className="space-y-4">
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Username"
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Email"
                    />
                    <div className="flex space-x-4">
                        <button
                            onClick={handleSave}
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                        >
                            Save
                        </button>
                        <button
                            onClick={() => setEditMode(false)}
                            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            ) : (
                <div className="space-y-4">
                    <p><strong>Username:</strong> {profile.username}</p>
                    <p><strong>Email:</strong> {profile.email}</p>
                    <button
                        onClick={() => setEditMode(true)}
                        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                    >
                        Edit
                    </button>
                </div>
            )}
        </div>
    );
};

export default Profile;
