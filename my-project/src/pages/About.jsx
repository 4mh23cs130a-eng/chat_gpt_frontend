import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] pt-32 pb-20 px-4 md:px-8 flex flex-col items-center">
      <div className="max-w-4xl w-full space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">

        {/* Hero Section */}
        <section className="text-center space-y-6">
          <h1 className="text-6xl font-black text-white tracking-tight">
            The Future of <span className="text-gradient">Intelligence.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            We are building a world where AI doesn't just answer questions, but partners with you to create the extraordinary.
          </p>
        </section>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Universal", desc: "Available anywhere, anytime, on any device.", icon: "🌐" },
            { title: "Powerful", desc: "Built on state-of-the-art inference engines.", icon: "⚡" },
            { title: "Secure", desc: "Your data is yours. Privacy is our priority.", icon: "🔒" }
          ].map((item, i) => (
            <div key={i} className="glass-card p-8 rounded-3xl hover:border-sky-500/50 transition-all group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">{item.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Mission Section */}
        <div className="glass-card p-12 rounded-[3rem] relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-indigo-500/5 -z-10 group-hover:opacity-100 opacity-0 transition-opacity"></div>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Our goal is to democratize access to advanced artificial intelligence. Whether you're a developer writing code, a student studying complex topics, or a creative drafting your next masterpiece, our platform is designed to be your most reliable ally.
            </p>
            <div className="flex gap-4">
              <div className="h-1 w-12 bg-sky-500 rounded-full"></div>
              <div className="h-1 w-12 bg-indigo-500 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Team / Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center pt-10">
          <div>
            <p className="text-4xl font-black text-white mb-1">10M+</p>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Users</p>
          </div>
          <div>
            <p className="text-4xl font-black text-white mb-1">99.9%</p>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Uptime</p>
          </div>
          <div>
            <p className="text-4xl font-black text-white mb-1">50ms</p>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Latency</p>
          </div>
          <div>
            <p className="text-4xl font-black text-white mb-1">Open</p>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Source</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;