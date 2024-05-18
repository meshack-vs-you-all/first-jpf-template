// src/components/Auth/Signup.jsx
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [formData, setFormData] = useState({ username: '', email: '', password: '', confirmPassword: '' });
    const [error, setError] = useState('');
    const [passwordMatchError, setPasswordMatchError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setPasswordMatchError('Passwords do not match');
            return;
        }
        try {
            await axios.post('http://localhost:8000/users/register', formData);
            navigate('/auth');
        } catch (error) {
            setError('Error creating account');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-white p-5">
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
                
                {error && <p className="text-red mb-4">{error}</p>}
                {passwordMatchError && <p className="text-red mb-4">{passwordMatchError}</p>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="username" className="block text-black">Username</label>
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={formData.username}
                            onChange={handleChange}
                            className="w-full p-2 border border-black rounded"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-black">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your preferred email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 border border-black rounded"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-black">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="At least 8 characters"

                            value={formData.password}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div>
                        <label htmlFor="confirmPassword" className="block text-black">Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm your password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <button type="submit" className="w-content px-4 py-2 bg-brand-primary text-white rounded hover:bg-[#61c6dd]">
                        Sign up
                    </button>
                    <p>Your Fitness Journey starts here.</p>
                </form>
                
            </div>
        </div>
    );
};

export default Signup;
