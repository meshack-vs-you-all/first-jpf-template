import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [isRegister, setIsRegister] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleAuth = async (e) => {
        e.preventDefault();
        if (isRegister && password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            // eslint-disable-next-line no-undef
            const endpoint = isRegister ? `${process.env.REACT_APP_API_URL}/users/register` : `${process.env.REACT_APP_API_URL}/users/login`;
            const data = { username: email, password };
            const response = await axios.post(endpoint, data);
            console.log('Response:', response);

            if (response.status === 201 || response.status === 200) {
                const { access_token } = response.data;
                localStorage.setItem('token', access_token);

                if (!isRegister) {
                    // eslint-disable-next-line no-undef
                    const userResponse = await axios.get(`${process.env.REACT_APP_API_URL}/users/me`, {
                        headers: { Authorization: `Bearer ${access_token}` }
                    });
                    console.log('User Response:', userResponse);
                    const { role } = userResponse.data;

                    if (role === 'admin') {
                        navigate('/admin');
                    } else {
                        navigate('/user');
                    }
                } else {
                    setIsRegister(false);
                }
            } else {
                setError('Failed to authenticate or register');
            }
        } catch (err) {
            console.error('Error:', err);
            console.error('Error Response:', err.response);
            setError(err.response ? err.response.data.detail : 'Invalid credentials or registration error');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen p-5 bg-light">
            <div className={`auth-box relative bg-white p-5 rounded-lg shadow-lg overflow-hidden w-full max-w-4xl ${isRegister ? 'flex-row-reverse' : ''} flex flex-col md:flex-row`}>
                <div className="form-container w-full md:w-1/2 p-8">
                    <form onSubmit={handleAuth} className="space-y-6">
                        <h1 className="text-2xl font-bold">{isRegister ? 'Create Account' : 'Sign In'}</h1>
                        {error && <p className="text-red">{error}</p>}

                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-2 border rounded-md"
                            autoComplete="email"
                        />
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                name="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full px-4 py-2 border rounded-md"
                                autoComplete={isRegister ? "new-password" : "current-password"}
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? 'Hide' : 'Show'}
                            </button>
                        </div>
                        {isRegister && (
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                className="w-full px-4 py-2 border rounded-md"
                                autoComplete="new-password"
                            />
                        )}
                        {!isRegister && <a href="#" className="text-sm text-black hover:underline">Forgot Your Password?</a>}
                        <button type="submit" className="w-full bg-brand-primary text-white py-2 rounded-md">
                            {isRegister ? 'Sign Up' : 'Sign In'}
                        </button>
                    </form>
                </div>
                <div className="md:flex w-full md:w-1/2 bg-brand-primary text-white items-center justify-center p-8 rounded-xl">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold">{isRegister ? 'Welcome Back!' : 'New User?'}</h2>
                        <p className="mt-4">{isRegister ? 'Already have an account?' : 'Claim your First Timers 50-minute Intro Stretch starting at $27 (Ksh. 3,516) per session'}</p>
                        <button
                            className="mt-6 px-6 py-2 bg-white text-brand-primary font-bold rounded-md"
                            onClick={() => setIsRegister(!isRegister)}
                        >
                            {isRegister ? 'Sign In' : 'Sign Up'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auth;
