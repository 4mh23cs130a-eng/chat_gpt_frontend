import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            const response = await fetch('http://127.0.0.1:8000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('access_token', data.access_token);
                localStorage.setItem('refresh_token', data.refresh_token);
                localStorage.setItem('token_type', data.token_type);
                console.log('Login successful!');
                navigate('/dashboard');
            } else {
                setError(data.detail?.[0]?.msg || data.detail || 'Login failed');
            }
        } catch (err) {
            setError('Could not connect to the server. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#0f172a] flex items-center justify-center p-4 pt-24">
            <div className="w-full max-w-md">
                <div className="bg-[#1e293b] border border-slate-800 rounded-3xl shadow-2xl overflow-hidden">
                    <div className="px-8 pt-10 pb-6 text-center">
                        <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
                        <p className="text-slate-400 text-sm">Please enter your details to sign in</p>
                    </div>

                    <div className="px-8 pb-10">
                        {error && (
                            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="block text-slate-300 text-sm font-medium mb-1.5 ml-1">Email Address</label>
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-[#0f172a] border border-slate-700 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 transition-all placeholder-slate-600"
                                    placeholder="name@example.com"
                                />
                            </div>

                            <div>
                                <div className="flex justify-between mb-1.5 ml-1">
                                    <label className="text-slate-300 text-sm font-medium">Password</label>
                                    <a href="#" className="text-sky-400 text-sm hover:underline">Forgot?</a>
                                </div>
                                <input
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-[#0f172a] border border-slate-700 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 transition-all placeholder-slate-600"
                                    placeholder="••••••••"
                                />
                            </div>

                            <div className="flex items-center space-x-2 ml-1">
                                <input type="checkbox" id="remember" className="w-4 h-4 rounded border-slate-700 bg-slate-900 text-sky-500 focus:ring-sky-500/20 focus:ring-offset-0" />
                                <label htmlFor="remember" className="text-slate-400 text-sm cursor-pointer select-none">Remember for 30 days</label>
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className={`w-full bg-sky-500 hover:bg-sky-400 text-[#0f172a] font-bold py-3 px-4 rounded-xl shadow-lg shadow-sky-500/20 transform transition-all active:scale-[0.98] ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {isLoading ? (
                                    <span className="flex items-center justify-center">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#0f172a]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Signing in...
                                    </span>
                                ) : 'Sign In'}
                            </button>
                        </form>

                        <div className="mt-8 text-center">
                            <p className="text-slate-400 text-sm">
                                Don't have an account?{' '}
                                <Link to="/signup" className="text-sky-400 font-semibold hover:underline">Sign up for free</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
