import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('chat');

    const handleSignOut = () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        localStorage.setItem('token_type', ''); // Or just remove it
        navigate('/login');
    };

    const sidebarItems = [
        {
            id: 'chat', label: 'New Chat', icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                </svg>
            )
        },
        {
            id: 'history', label: 'History', icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            id: 'profile', label: 'Profile', icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            )
        },
        {
            id: 'settings', label: 'Settings', icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            )
        },
    ];

    return (
        <div className="flex h-screen bg-[#0f172a] text-slate-200 overflow-hidden pt-20">
            {/* Sidebar */}
            <aside className="w-64 bg-[#1e293b] border-r border-slate-800 flex flex-col">
                <div className="p-6">
                    <button className="w-full bg-sky-500 hover:bg-sky-400 text-[#0f172a] font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-sky-500/20">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                        </svg>
                        New Chat
                    </button>
                </div>

                <nav className="flex-1 px-4 space-y-2">
                    {sidebarItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === item.id
                                ? 'bg-slate-800 text-sky-400 shadow-inner'
                                : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
                                }`}
                        >
                            {item.icon}
                            <span className="font-medium">{item.label}</span>
                        </button>
                    ))}
                </nav>

                <div className="p-6 border-t border-slate-800 space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-400 font-bold border border-sky-500/30">
                            JS
                        </div>
                        <div>
                            <p className="text-sm font-bold text-white">John Student</p>
                            <p className="text-xs text-slate-500">Pro Plan</p>
                        </div>
                    </div>
                    <button
                        onClick={handleSignOut}
                        className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-red-400 hover:bg-red-500/10 transition-all font-medium"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        Sign Out
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col relative overflow-hidden">
                {/* Chat Area Background Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-sky-500/5 blur-[120px] rounded-full -z-10"></div>

                <div className="flex-1 flex flex-col items-center justify-center p-8">
                    <div className="max-w-2xl w-full text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <div className="inline-block p-3 rounded-2xl bg-sky-500/10 border border-sky-500/20 mb-4">
                            <svg className="w-10 h-10 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h1 className="text-5xl font-extrabold text-white tracking-tight">
                            What can I help you <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">create today?</span>
                        </h1>
                        <p className="text-xl text-slate-400 max-w-lg mx-auto leading-relaxed">
                            Your intelligent companion for coding, writing, and creative problem solving.
                        </p>

                        {/* Quick Actions */}
                        <div className="grid grid-cols-2 gap-4 mt-12">
                            <button className="p-6 rounded-2xl bg-[#1e293b] border border-slate-800 hover:border-sky-500/50 transition-all text-left group">
                                <h3 className="font-bold text-white group-hover:text-sky-400 transition-colors">Generate Code</h3>
                                <p className="text-sm text-slate-500 mt-1">Create a React component with Tailwind</p>
                            </button>
                            <button className="p-6 rounded-2xl bg-[#1e293b] border border-slate-800 hover:border-sky-500/50 transition-all text-left group">
                                <h3 className="font-bold text-white group-hover:text-sky-400 transition-colors">Write Content</h3>
                                <p className="text-sm text-slate-500 mt-1">Draft a blog post or email</p>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Input Bar */}
                <div className="p-8">
                    <div className="max-w-3xl mx-auto relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-2xl blur opacity-20 group-focus-within:opacity-40 transition duration-500"></div>
                        <div className="relative flex items-center">
                            <input
                                type="text"
                                placeholder="Message AI Chat..."
                                className="w-full bg-[#1e293b] border border-slate-800 rounded-2xl px-6 py-4 focus:outline-none focus:ring-0 text-white placeholder-slate-600 shadow-2xl"
                            />
                            <button className="absolute right-3 p-2 bg-sky-500 text-[#0f172a] rounded-xl hover:bg-sky-400 transition-all active:scale-90">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                </svg>
                            </button>
                        </div>
                        <p className="text-center text-[10px] text-slate-600 mt-3 font-medium uppercase tracking-widest">
                            AI Chat may provide inaccurate information. Check important info.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
