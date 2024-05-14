// src/pages/Auth.jsx

import  { useState } from 'react';

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
        <div className="flex justify-center items-center h-screen p-5 bg-light">
            <div className={`auth-box relative bg-white p-5 rounded-lg shadow-lg overflow-hidden w-full max-w-4xl ${isRegister ? 'flex-row-reverse' : ''} flex flex-col md:flex-row`}>
                <div className="form-container w-full md:w-1/2 p-8">
                    <form onSubmit={handleAuth} className="space-y-6">
                        <h1 className="text-2xl font-bold">{isRegister ? 'Create Account' : 'Sign In'}</h1>
                        {error && <p className="text-red">{error}</p>}
                        
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
                        <button type="submit" className="w-full bg-brand-primary text-white py-2 rounded-md">
                            {isRegister ? 'Sign Up' : 'Sign In'}
                        </button>
                    </form>
                </div>
                <div className=" md:flex w-full md:w-1/2 bg-brand-primary text-white items-center justify-center p-8 rounded-xl">
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