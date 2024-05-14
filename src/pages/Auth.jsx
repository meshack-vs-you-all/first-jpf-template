// src/pages/Auth.jsx

import { useState } from 'react';

const Auth = () => {
    const [isRegister, setIsRegister] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleAuth = async (e) => {
        e.preventDefault();
        try {
            if (isRegister) {
                // Call your API to register the user
                console.log('Register user', { email, password });
            } else {
                // Call your API to log in the user
                console.log('Login user', { email, password });
            }
        } catch (error) {
            setError('Authentication failed. Please try again.');
            console.error('Error:', error);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className={`relative bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-4xl ${isRegister ? 'flex-row-reverse' : ''} flex`}>
                <div className="w-full md:w-1/2 p-8">
                    <form onSubmit={handleAuth} className="space-y-6">
                        <h1 className="text-2xl font-bold">{isRegister ? 'Create Account' : 'Sign In'}</h1>
                        {error && <p className="text-red-500">{error}</p>}
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-2 border rounded-md"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-4 py-2 border rounded-md"
                        />
                        {isRegister && (
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                className="w-full px-4 py-2 border rounded-md"
                            />
                        )}
                        {!isRegister && <a href="#" className="text-sm text-black hover:underline">Forgot Your Password?</a>}
                        <button type="submit" className="w-full bg-blue-500 text-black py-2 rounded-md">
                            {isRegister ? 'Sign Up' : 'Sign In'}
                        </button>
                    </form>
                </div>
                <div className=" md:flex w-1/2 bg-brand-primary text-black items-center justify-center p-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold">{isRegister ? 'Welcome Back!' : 'Hello, Friend!'}</h2>
                        <p className="mt-4">{isRegister ? 'To keep connected with us please login with your personal info' : 'Enter your personal details and start your journey with us'}</p>
                        <button
                            className="mt-6 px-6 py-2 bg-white text-black font-bold rounded-md"
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
