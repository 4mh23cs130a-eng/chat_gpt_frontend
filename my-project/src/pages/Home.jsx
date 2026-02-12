import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] overflow-hidden flex flex-col items-center justify-center relative">

      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-sky-500/10 blur-[120px] rounded-full -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-500/5 blur-[100px] rounded-full -z-10"></div>

      <div className="max-w-5xl w-full px-4 text-center space-y-12 animate-in fade-in slide-in-from-bottom-12 duration-1000">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-widest leading-none">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
          </span>
          Next-Gen AI Platform
        </div>

        {/* Hero Title */}
        <h1 className="text-7xl md:text-8xl font-black text-white tracking-tighter leading-[0.9]">
          Intelligence <br />
          <span className="text-gradient">Redefined.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          The all-in-one AI workspace designed to supercharge your creativity, productivity, and innovation.
        </p>

        {/* CTA Section */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center pt-8">
          <Link to="/signup" className="px-10 py-5 bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-black rounded-2xl shadow-2xl shadow-sky-500/20 hover:scale-105 active:scale-95 transition-all text-lg">
            Get Started for Free
          </Link>
          <Link to="/about" className="px-10 py-5 glass-card text-white font-bold rounded-2xl hover:bg-white/5 transition-all text-lg">
            Learn More
          </Link>
        </div>

        {/* Floating Icons Display */}
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4 pt-20 pb-10 opacity-40">
          {["⚡", "🔒", "🧠", "🎨", "🚀", "💎", "🎯", "🌟"].map((emoji, i) => (
            <div key={i} className="text-3xl grayscale hover:grayscale-0 cursor-default transition-all duration-500 hover:scale-125">
              {emoji}
            </div>
          ))}
        </div>
      </div>

      {/* Footer Quote */}
      <footer className="absolute bottom-10 w-full text-center px-4">
        <p className="text-slate-600 text-sm font-medium tracking-wide">
          "The best way to predict the future is to invent it."
        </p>
      </footer>
    </div>
  );
};

export default Home;
