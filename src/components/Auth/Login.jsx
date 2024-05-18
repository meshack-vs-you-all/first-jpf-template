// src/components/Auth/Login.jsx
import  { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/users/login', formData);
            localStorage.setItem('token', response.data.access_token);
            navigate('/user');
        } catch (error) {
            setError('Invalid username or password');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-white p-5">
            <div className=" max-w-md w-full bg-white p-8 rounded-lg shadow-xl">
                <h2 className="text-2xl font-bold mb-4">Sign In</h2>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="username" className="block text-gray-700">Username</label>
                        <input
                            type="text"
                            name="username"
                            placeholder='Enter your username'
                            value={formData.username}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder='Enter your password'
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div><a href="#" className="text-sm text-black hover:underline">Forgot Your Password?</a></div>
                    <button type="submit" className=" w-content px-4 py-2 bg-brand-primary text-white rounded hover:bg-[#61c6dd] active:text-gray-dark ">
                        Sign in
                    </button>
                    <p className="mt-4">New User? <br/>  <a href="/signup">Sign Up</a> and Claim your <span className="text-brand-primary">First Timers 50-minute Intro Stretch</span> starting at $27 (Ksh. 3,516) per session</p>
                </form>
            </div>
        </div>
    );
};

export default Login;
