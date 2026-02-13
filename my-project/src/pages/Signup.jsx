import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [status, setStatus] = useState({ loading: false, message: '', error: false });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, message: 'Creating account...', error: false });

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/signup`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus({ loading: false, message: 'Signup successful!', error: false });
            } else {
                setStatus({ loading: false, message: data.detail || 'Signup failed', error: true });
            }
        } catch (err) {
            setStatus({ loading: false, message: 'Server connection failed', error: true });
        }
    };

    return (
        <div className="min-h-screen bg-[#0f172a] flex items-center justify-center p-4 pt-24">
            <div className="w-full max-w-md">
                <div className="bg-[#1e293b] border border-slate-800 rounded-3xl shadow-2xl overflow-hidden">
                    <div className="px-8 pt-10 pb-6 text-center">
                        <h1 className="text-3xl font-bold text-white mb-2">Create Account</h1>
                        <p className="text-slate-400 text-sm">Join our AI community today</p>
                    </div>

                    <div className="px-8 pb-10">
                        {status.message && (
                            <div className={`mb-6 p-4 border rounded-xl text-sm ${status.error ? 'bg-red-500/10 border-red-500/20 text-red-400' : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                                }`}>
                                {status.message}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="block text-slate-300 text-sm font-medium mb-1.5 ml-1">Username</label>
                                <input
                                    type="text"
                                    name="username"
                                    required
                                    value={formData.username}
                                    onChange={handleChange}
                                    className="w-full bg-[#0f172a] border border-slate-700 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 transition-all placeholder-slate-600"
                                    placeholder="johndoe"
                                />
                            </div>

                            <div>
                                <label className="block text-slate-300 text-sm font-medium mb-1.5 ml-1">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-[#0f172a] border border-slate-700 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 transition-all placeholder-slate-600"
                                    placeholder="name@example.com"
                                />
                            </div>

                            <div>
                                <label className="block text-slate-300 text-sm font-medium mb-1.5 ml-1">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    required
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full bg-[#0f172a] border border-slate-700 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 transition-all placeholder-slate-600"
                                    placeholder="••••••••"
                                />
                            </div>

                            <div className="pt-2">
                                <button
                                    type="submit"
                                    disabled={status.loading}
                                    className={`w-full bg-sky-500 hover:bg-sky-400 text-[#0f172a] font-bold py-3 px-4 rounded-xl shadow-lg shadow-sky-500/20 transform transition-all active:scale-[0.98] ${status.loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                                >
                                    {status.loading ? (
                                        <span className="flex items-center justify-center">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#0f172a]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Creating account...
                                        </span>
                                    ) : 'Sign Up'}
                                </button>
                            </div>
                        </form>

                        <div className="mt-8 text-center">
                            <p className="text-slate-400 text-sm">
                                Already have an account?{' '}
                                <Link to="/login" className="text-sky-400 font-semibold hover:underline">Sign In</Link>
                            </p>
                        </div>
                    </div>
                </div>

                <p className="mt-6 text-center text-slate-500 text-xs px-4">
                    By signing up, you agree to our <a href="#" className="underline">Terms of Service</a> and <a href="#" className="underline">Privacy Policy</a>.
                </p>
            </div>
        </div>
    );
};

export default Signup;
