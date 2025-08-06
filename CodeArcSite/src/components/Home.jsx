import React from 'react';

const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-32 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl w-full">
        {/* Left Side: Text Content */}
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
          <h1 className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 leading-tight reveal">
            Together We Debug Life
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-white reveal">
            Learn by Building. Grow Together.
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-md mx-auto lg:mx-0 leading-relaxed reveal">
            A free community where coding becomes a journey of collaboration, growth, and real-world projects.
          </p>
          <div className="flex justify-center lg:justify-start">
            <a
              href="https://t.me/JoinCodeArc"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-cyan-400 to-pink-500 text-white px-8 py-4 rounded-full hover:shadow-lg hover:shadow-cyan-400/20 text-lg font-medium transition duration-300 transform hover:scale-105"
            >
              Join Telegram 
            </a>
          </div>
        </div>

        {/* Right Side: Custom SVG Design */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
          <svg
            width="400"
            height="400"
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="animate-pulse"
          >
            <circle cx="200" cy="200" r="180" fill="url(#grad1)" opacity="0.2" />
            <defs>
              <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" style={{ stopColor: '#06b6d4', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#9333ea', stopOpacity: 0.5 }} />
              </radialGradient>
            </defs>
            <circle cx="200" cy="100" r="30" fill="#22d3ee" opacity="0.8" />
            <circle cx="300" cy="200" r="30" fill="#a855f7" opacity="0.8" />
            <circle cx="100" cy="200" r="30" fill="#22d3ee" opacity="0.8" />
            <circle cx="200" cy="300" r="30" fill="#a855f7" opacity="0.8" />
            <line x1="200" y1="130" x2="280" y2="200" stroke="#22d3ee" strokeWidth="2" opacity="0.5" />
            <line x1="200" y1="130" x2="120" y2="200" stroke="#22d3ee" strokeWidth="2" opacity="0.5" />
            <line x1="200" y1="270" x2="280" y2="200" stroke="#a855f7" strokeWidth="2" opacity="0.5" />
            <line x1="200" y1="270" x2="120" y2="200" stroke="#a855f7" strokeWidth="2" opacity="0.5" />
            <line x1="100" y1="200" x2="300" y2="200" stroke="#22d3ee" strokeWidth="2" opacity="0.5" />
            <text
              x="200"
              y="220"
              fontSize="60"
              fontWeight="bold"
              fill="#22d3ee"
              textAnchor="middle"
              className="animate-pulse"
            >
              {'</>'}
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Home;
