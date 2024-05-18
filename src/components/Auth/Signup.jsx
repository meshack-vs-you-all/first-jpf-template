import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { decode } from 'jwt-decode';

const Signup = () => {
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/users/register', formData);
            localStorage.setItem('token', response.data.access_token);
            const decodedToken = decode(response.data.access_token);
            const userRole = decodedToken.role;

            switch (userRole) {
                case 'admin':
                    navigate('/admin-dashboard');
                    break;
                case 'trainer':
                    navigate('/trainer-dashboard');
                    break;
                default:
                    navigate('/user-dashboard');
                    break;
            }
        } catch (error) {
            setError('Error during registration');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-white p-5">
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-xl">
                <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="username" className="block text-gray-700">Username</label>
                        <input
                            type="text"
                            name="username"
                            placeholder="Enter your username"
                            value={formData.username}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <button type="submit" className="w-full px-4 py-2 bg-brand-primary text-white rounded hover:bg-[#61c6dd] active:text-gray-dark">
                        Sign Up
                    </button>
                    <p className="text-center">Already have an account? <a className="text-brand-primary active:underline" href="/login">Login</a></p>
                </form>
            </div>
        </div>
    );
};

export default Signup;
