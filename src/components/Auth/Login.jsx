// src/components/Auth/Login.jsx
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { jwtDecode } from 'jwt-decode';
import useRoleBasedRedirect from '../../utils/useRoleBasedRedirect';

const Login = ({ setAuthState }) => {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const roleBasedRedirect = useRoleBasedRedirect();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // eslint-disable-next-line no-undef
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/users/login`, formData);
            const token = response.data.access_token;
            localStorage.setItem('token', token);

            const decodedToken = jwtDecode(token);
            const userRole = decodedToken.role;
            const profileComplete = decodedToken.profile_complete;

            // Update state and log for debugging
            console.log("Decoded Token:", decodedToken);
            setAuthState(true, userRole, profileComplete);
            roleBasedRedirect(userRole, profileComplete); // Redirect based on role and profile completion
        } catch (error) {
            console.error('Login error:', error);
            setError('Invalid username or password');
        }
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className="flex items-center justify-center min-h-screen mt-20 bg-white p-5">
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-xl">
                <h2 className="text-2xl font-bold mb-4">Sign In</h2>
                {error && <p className="text-red mb-4">{error}</p>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="username" className="block text-gray-700">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            autoComplete="username"
                            placeholder="Enter your username"
                            value={formData.username}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="relative">
                        <label htmlFor="password" className="block text-gray-700">Password</label>
                        <input
                            type={passwordVisible ? 'text' : 'password'}
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded pr-10"
                        />
                        <div className="absolute inset-y-0 right-1 pt-5 pr-3 flex items-center text-lg leading-5">
                            <button type="button" onClick={togglePasswordVisibility} className="focus:outline-none">
                                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                    </div>
                    <div>
                        <a href="#" className="text-sm text-black hover:underline">Forgot Your Password?</a>
                    </div>
                    <button type="submit" className="w-full px-4 py-2 bg-brand-primary text-white rounded hover:bg-[#61c6dd] active:text-gray-dark">
                        Sign in
                    </button>
                    <p className="mt-4">New User? <br/><a href="/signup">Sign Up</a> and Claim your <span className="text-brand-primary">First Timers 50-minute Intro Stretch</span> starting at $27 (Ksh. 3,516) per session</p>
                </form>
            </div>
        </div>
    );
};

export default Login;
