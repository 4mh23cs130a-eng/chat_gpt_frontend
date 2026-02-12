import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#0f172a] pt-32 pb-20 px-4 md:px-8 flex flex-col items-center">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 bg-[#1e293b]/50 backdrop-blur-2xl rounded-[3rem] border border-slate-800/50 p-8 md:p-16 animate-in zoom-in-95 duration-700">

        {/* Left Side: Info */}
        <div className="space-y-10">
          <div>
            <h1 className="text-5xl font-black text-white tracking-tight mb-4">
              Get in <span className="text-gradient">Touch.</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Have questions or feedback? We'd love to hear from you. Our team typically responds within 24 hours.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeWidth="2" /></svg>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email Us</p>
                <p className="text-white font-medium">support@aichat.io</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeWidth="2" /><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth="2" /></svg>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Office</p>
                <p className="text-white font-medium">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="glass-card p-8 md:p-10 rounded-[2.5rem] relative">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in scale-95 duration-500">
              <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
              <p className="text-slate-400 text-sm">Thank you for reaching out. We'll get back to you soon.</p>
              <button onClick={() => setSubmitted(false)} className="text-sky-400 font-bold hover:underline">Send another message</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-300 ml-1">Full Name</label>
                <input required type="text" className="w-full bg-[#0f172a] border border-slate-700 rounded-2xl px-5 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition-all" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-300 ml-1">Email Address</label>
                <input required type="email" className="w-full bg-[#0f172a] border border-slate-700 rounded-2xl px-5 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition-all" placeholder="email@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-300 ml-1">Your Message</label>
                <textarea required className="w-full bg-[#0f172a] border border-slate-700 rounded-2xl px-5 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition-all resize-none" rows="4" placeholder="How can we help?"></textarea>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-sky-500 to-indigo-500 hover:scale-[1.02] active:scale-95 text-white font-bold py-4 rounded-2xl shadow-xl shadow-sky-500/10 transition-all">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;