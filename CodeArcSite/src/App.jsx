import { useState, useEffect } from 'react';

function App() {
  const [isDarkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  // Scroll Animation Handler
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    
    const handleScroll = () => {
      revealElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0) {
          element.classList.add('revealed');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-gray-100 relative overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900"></div>
      
      {/* Animated Lines Layer */}
      <div className="absolute inset-0 bg-lines bg-[length:100px_100%] animate-background-shift opacity-10"></div>
      
      {/* Glowing Lines Layer */}
      <div className="absolute inset-0 bg-lines-glow bg-[length:100px_100%] animate-background-shift animate-glow blur-[0.5px]"></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50 backdrop-blur-xs"></div>
      
      {/* Content Container */}
      <div className="relative z-10">
        {/* Navbar */}
        <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-gray-800"> 
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 flex items-center justify-between h-20">
            <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 tracking-wide hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-cyan-400/20">CodeArc</span>
            <div className="hidden md:flex space-x-10">
              <a href="#about" className="relative text-lg text-gray-300 hover:text-white font-medium transition duration-300 group">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                <span className="absolute -inset-1 bg-gradient-to-r from-cyan-400/0 to-purple-600/0 group-hover:from-cyan-400/10 group-hover:to-purple-600/10 rounded-lg transition-all duration-300"></span>
              </a>
              <a href="#programmes" className="relative text-lg text-gray-300 hover:text-white font-medium transition duration-300 group">
                Program
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                <span className="absolute -inset-1 bg-gradient-to-r from-cyan-400/0 to-purple-600/0 group-hover:from-cyan-400/10 group-hover:to-purple-600/10 rounded-lg transition-all duration-300"></span>
              </a>
              <a href="#team" className="relative text-lg text-gray-300 hover:text-white font-medium transition duration-300 group">
                Team
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                <span className="absolute -inset-1 bg-gradient-to-r from-cyan-400/0 to-purple-600/0 group-hover:from-cyan-400/10 group-hover:to-purple-600/10 rounded-lg transition-all duration-300"></span>
              </a>
              <a href="#contact" className="relative text-lg text-gray-300 hover:text-white font-medium transition duration-300 group">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                <span className="absolute -inset-1 bg-gradient-to-r from-cyan-400/0 to-purple-600/0 group-hover:from-cyan-400/10 group-hover:to-purple-600/10 rounded-lg transition-all duration-300"></span>
              </a>
            </div>
            <button className="md:hidden text-gray-300 hover:text-white focus:outline-none transition-colors duration-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-black/90 border-t border-gray-800 px-6 py-4">
              <a href="#about" className="block py-3 text-lg text-gray-300 hover:text-white font-medium transition duration-300 hover:translate-x-2">About</a>
              <a href="#programmes" className="block py-3 text-lg text-gray-300 hover:text-white font-medium transition duration-300 hover:translate-x-2">Program</a>
              <a href="#team" className="block py-3 text-lg text-gray-300 hover:text-white font-medium transition duration-300 hover:translate-x-2">Team</a>
              <a href="#contact" className="block py-3 text-lg text-gray-300 hover:text-white font-medium transition duration-300 hover:translate-x-2">Contact</a>
            </div>
          )}
        </nav>

        {/* Home Section */}
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

        {/* About Us Section */}
        <section id="about" className="py-24 px-6 bg-black">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
              {/* Left Side: Why Join */}
              <div className="space-y-8">
                <div className="relative">
                  <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 reveal">
                    Why Join?
                  </h2>
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r from-cyan-400/20 to-purple-600/20 rounded-full blur-2xl"></div>
                </div>
                <p className="text-xl text-gray-300 leading-relaxed reveal">
                  We're a team of passionate learners committed to growing together. We believe in taking responsibility, sharing knowledge, and supporting each other in our journey.
                </p>
                <div className="flex items-center space-x-4 reveal">
                  <div className="relative">
                    
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400/10 to-purple-600/10 blur-md"></div>
                  </div>
                  <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600"></span>
                </div>
              </div>

              {/* Right Side: What Awaits You */}
              <div className="space-y-8">
                <h3 className="text-4xl font-bold text-white reveal">Our Values</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2 flex items-start space-x-4 border border-gray-800 reveal">
                    <div className="p-3 rounded-lg bg-cyan-400/10">
                      <svg className="w-8 h-8 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-2xl font-semibold text-cyan-400 reveal">Collaborative Growth</h4>
                      <p className="text-lg text-gray-400 reveal">Learn and grow together as a community.</p>
                    </div>
                  </div>
                  <div className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2 flex items-start space-x-4 border border-gray-800 reveal">
                    <div className="p-3 rounded-lg bg-purple-400/10">
                      <svg className="w-8 h-8 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-2xl font-semibold text-purple-400 reveal">Responsibility</h4>
                      <p className="text-lg text-gray-400 reveal">Take ownership of your learning journey.</p>
                    </div>
                  </div>
                  <div className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2 flex items-start space-x-4 border border-gray-800 reveal">
                    <div className="p-3 rounded-lg bg-green-400/10">
                      <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-2xl font-semibold text-green-400 reveal">Continuous Learning</h4>
                      <p className="text-lg text-gray-400 reveal">Never stop growing and improving.</p>
                    </div>
                  </div>
                  <div className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2 flex items-start space-x-4 border border-gray-800 reveal">
                    <div className="p-3 rounded-lg bg-yellow-400/10">
                      <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 5h-2V3H7v2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2zm-8 14H7v-4h4v4zm0-6H7V9h4v4zm6 6h-4v-4h4v4zm0-6h-4V9h4v4z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-2xl font-semibold text-yellow-400 reveal">Community Support</h4>
                      <p className="text-lg text-gray-400 reveal">Help and be helped by fellow learners.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-24 px-6 bg-black">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 text-center mb-16 reveal">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Team Member 1: Abdulhakim Fedlu */}
              <div className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} p-8 rounded-xl shadow-lg border ${isDarkMode ? 'border-gray-800' : 'border-gray-200'} transition-all duration-300 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-cyan-400/30 reveal team-card`}>
                <div className="relative w-40 h-40 mx-auto mb-6">
                  {/* Outer Circle: Moving Light Animation */}
                  <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-cyan-400/50 to-purple-600/50 animate-light-ring"></div>
                  {/* Inner Circle: Profile Photo */}
                  <div className="absolute inset-2 rounded-full border-4 border-gradient-to-r from-cyan-400 to-purple-600">
                    <img
                      src="src/assets/Abdulhakim Fedlu.jpg"
                      alt="Abdulhakim Fedlu"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 reveal">
                  Abdulhakim Fedlu
                </h3>
                <p className="text-md text-center italic text-cyan-400 reveal">
                  CEO and Cofounder of CodeArc
                </p>
                <p className={`text-lg text-center mt-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} reveal`}>
                  Visionary leader driving CodeArc's mission to empower developers worldwide.
                </p>
                <div className="mt-6 flex justify-center space-x-4">
                  <a href="https://www.linkedin.com/in/abdulhakim-fedlu-abdu-87a03b294/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="https://github.com/abdulhakimfedlu" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Team Member 2: Jabez Shiferaw */}
              <div className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} p-8 rounded-xl shadow-lg border ${isDarkMode ? 'border-gray-800' : 'border-gray-200'} transition-all duration-300 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-purple-400/30 reveal team-card`}>
                <div className="relative w-40 h-40 mx-auto mb-6">
                  {/* Outer Circle: Moving Light Animation */}
                  <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-purple-600/50 to-pink-500/50 animate-light-ring"></div>
                  {/* Inner Circle: Profile Photo */}
                  <div className="absolute inset-2 rounded-full border-4 border-gradient-to-r from-purple-600 to-pink-500">
                    <img
                      src="src/assets/Jabez Shiferaw.jpg"
                      alt="Jabez Shiferaw"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 reveal">
                  Jabez Shiferaw
                </h3>
                <p className="text-md text-center italic text-purple-400 reveal">
                  COO and Cofounder of CodeArc
                </p>
                <p className={`text-lg text-center mt-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} reveal`}>
                  Operations expert shaping CodeArc's growth and community engagement.
                </p>
                <div className="mt-6 flex justify-center space-x-4">
                  <a href="https://www.linkedin.com/in/jabez-shiferaw-0b919321b/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="https://github.com/jabezinu" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Programmes Section */}
        <section id="programmes" className="py-24 px-6 bg-black">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 text-center reveal">
                What We Offer
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Front-End */}
              <div className="group bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-800 flex flex-col items-start hover:shadow-2xl hover:shadow-cyan-400/20 hover:-translate-y-2 transition-all duration-300 reveal">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 rounded-lg bg-cyan-400/10 group-hover:bg-cyan-400/20 transition-colors duration-300">
                    <svg className="w-8 h-8 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300 reveal">Front-End</h4>
                </div>
                <p className="text-lg text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300 reveal">
                  Master HTML, CSS, JavaScript, and React to build stunning user interfaces that captivate and engage users.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="px-3 py-1 rounded-full bg-[#E34F26]/10 text-[#E34F26] text-sm flex items-center group-hover:bg-[#E34F26]/20 transition-colors duration-300">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="w-4 h-4 mr-1" />
                    HTML5
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#1572B6]/10 text-[#1572B6] text-sm flex items-center group-hover:bg-[#1572B6]/20 transition-colors duration-300">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="w-4 h-4 mr-1" />
                    CSS3
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#F7DF1E]/10 text-[#F7DF1E] text-sm flex items-center group-hover:bg-[#F7DF1E]/20 transition-colors duration-300">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="w-4 h-4 mr-1" />
                    JavaScript
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#61DAFB]/10 text-[#61DAFB] text-sm flex items-center group-hover:bg-[#61DAFB]/20 transition-colors duration-300">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-4 h-4 mr-1" />
                    React
                  </span>
                </div>
              </div>

              {/* Back-End */}
              <div className="group bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-800 flex flex-col items-start hover:shadow-2xl hover:shadow-purple-400/20 hover:-translate-y-2 transition-all duration-300 reveal">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 rounded-lg bg-purple-400/10 group-hover:bg-purple-400/20 transition-colors duration-300">
                    <svg className="w-8 h-8 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-semibold text-purple-400 group-hover:text-purple-300 transition-colors duration-300 reveal">Back-End</h4>
                </div>
                <p className="text-lg text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300 reveal">
                  Learn Node.js, Express, and databases to power robust server-side applications with seamless functionality.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="px-3 py-1 rounded-full bg-[#339933]/10 text-[#339933] text-sm flex items-center group-hover:bg-[#339933]/20 transition-colors duration-300">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="w-4 h-4 mr-1" />
                    Node.js
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#000000]/10 text-[#000000] text-sm flex items-center group-hover:bg-[#000000]/20 transition-colors duration-300">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" className="w-4 h-4 mr-1" />
                    Express
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#47A248]/10 text-[#47A248] text-sm flex items-center group-hover:bg-[#47A248]/20 transition-colors duration-300">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" className="w-4 h-4 mr-1" />
                    MongoDB
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#4479A1]/10 text-[#4479A1] text-sm flex items-center group-hover:bg-[#4479A1]/20 transition-colors duration-300">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" className="w-4 h-4 mr-1" />
                    PostgreSQL
                  </span>
                </div>
              </div>

              {/* Community-Driven Involvement */}
              <div className="group bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-800 flex flex-col items-start hover:shadow-2xl hover:shadow-pink-400/20 hover:-translate-y-2 transition-all duration-300 reveal">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 rounded-lg bg-pink-400/10 group-hover:bg-pink-400/20 transition-colors duration-300">
                    <svg className="w-8 h-8 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-semibold text-pink-400 group-hover:text-pink-300 transition-colors duration-300 reveal">Community-Driven</h4>
                </div>
                <p className="text-lg text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300 reveal">
                  We've built a strong, collaborative community of learners and developers who grow together.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="px-3 py-1 rounded-full bg-pink-400/10 text-pink-400 text-sm group-hover:bg-pink-400/20 transition-colors duration-300">Collaboration</span>
                  <span className="px-3 py-1 rounded-full bg-pink-400/10 text-pink-400 text-sm group-hover:bg-pink-400/20 transition-colors duration-300">Support</span>
                  <span className="px-3 py-1 rounded-full bg-pink-400/10 text-pink-400 text-sm group-hover:bg-pink-400/20 transition-colors duration-300">Growth</span>
                  <span className="px-3 py-1 rounded-full bg-pink-400/10 text-pink-400 text-sm group-hover:bg-pink-400/20 transition-colors duration-300">Learning</span>
                </div>
              </div>

              {/* Live Project Collaboration */}
              <div className="group bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-800 flex flex-col items-start hover:shadow-2xl hover:shadow-green-400/20 hover:-translate-y-2 transition-all duration-300 reveal">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 rounded-lg bg-green-400/10 group-hover:bg-green-400/20 transition-colors duration-300">
                    <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-semibold text-green-400 group-hover:text-green-300 transition-colors duration-300 reveal">Live Projects</h4>
                </div>
                <p className="text-lg text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300 reveal">
                  Work on real-world projects with a supportive dev community. Build your portfolio while learning.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="px-3 py-1 rounded-full bg-green-400/10 text-green-400 text-sm group-hover:bg-green-400/20 transition-colors duration-300">Real Projects</span>
                  <span className="px-3 py-1 rounded-full bg-green-400/10 text-green-400 text-sm group-hover:bg-green-400/20 transition-colors duration-300">Team Work</span>
                  <span className="px-3 py-1 rounded-full bg-green-400/10 text-green-400 text-sm group-hover:bg-green-400/20 transition-colors duration-300">Portfolio</span>
                  <span className="px-3 py-1 rounded-full bg-green-400/10 text-green-400 text-sm group-hover:bg-green-400/20 transition-colors duration-300">Mentorship</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6 bg-black">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 reveal">
                Get in Touch
              </h2>
              <p className="mt-4 text-xl text-gray-400 reveal">
                Have questions? We'd love to hear from you.
              </p>
            </div>
            
            <form className="space-y-8 bg-gray-900/50 p-8 rounded-2xl shadow-2xl border border-gray-800 backdrop-blur-sm reveal">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 reveal">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-gray-100 placeholder-gray-500 transition duration-300 hover:bg-gray-800/70"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 reveal">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-gray-100 placeholder-gray-500 transition duration-300 hover:bg-gray-800/70"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 reveal">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-gray-100 placeholder-gray-500 transition duration-300 hover:bg-gray-800/70 resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-cyan-400/20 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900 reveal"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Brand and Description */}
              <div className="col-span-1 md:col-span-2">
                <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 reveal">CodeArc</span>
                <p className="mt-4 text-gray-400 max-w-md reveal">
                  Empowering the next generation of developers through collaborative learning and real-world projects.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 reveal">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#about" className="text-gray-400 hover:text-cyan-400 transition duration-300 reveal">About</a>
                  </li>
                  <li>
                    <a href="#programmes" className="text-gray-400 hover:text-cyan-400 transition duration-300 reveal">Program</a>
                  </li>
                  <li>
                    <a href="#team" className="text-gray-400 hover:text-cyan-400 transition duration-300 reveal">Team</a>
                  </li>
                  <li>
                    <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition duration-300 reveal">Contact</a>
                  </li>
                </ul>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 reveal">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="https://www.instagram.com/codearc1/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#E4405F] transition duration-300 transform hover:scale-110 reveal">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.301.975.975 1.24 2.242 1.301 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.326 2.633-1.301 3.608-.975.975-2.242 1.24-3.608 1.301-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.326-3.608-1.301-.975-.975-1.24-2.242-1.301-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.326-2.633 1.301-3.608.975-.975 2.242-1.24 3.608-1.301 1.266-.058 1.646-.07 4.85-.07m0-2.163c-3.259 0-3.667.014-4.947.072-1.542.07-2.968.385-4.112 1.529-1.144 1.144-1.459 2.57-1.529 4.112-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.07 1.542.385 2.968 1.529 4.112 1.144 1.144 2.57 1.459 4.112 1.529 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.542-.07 2.968-.385 4.112-1.529 1.144-1.144 1.459-2.57 1.529-4.112.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.07-1.542-.385-2.968-1.529-4.112-1.144-1.144-2.57-1.459-4.112-1.529-1.28-.058-1.688-.072-4.947-.072zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </a>
                  <a href="https://tiktok.com/@codearc1" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00F2EA] transition duration-300 transform hover:scale-110 reveal">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                    </svg>
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300 transform hover:scale-110 reveal">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a href="https://linkedin.com/company/joincodearc/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0A66C2] transition duration-300 transform hover:scale-110 reveal">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-12 pt-8 border-t border-gray-800">
              <p className="text-center text-gray-400 reveal">
                © {new Date().getFullYear()} CodeArc. All rights reserved.
              </p>
            </div>
          </div>
        </footer>

        {/* Custom Styles for Animations */}
        <style>
          {`
            /* Scroll Reveal Animation */
            .reveal {
              opacity: 0;
              transform: translateY(20px);
              transition: opacity 0.8s ease-out, transform 0.8s ease-out;
            }
            .revealed {
              opacity: 1;
              transform: translateY(0);
            }

            /* Moving Light Ring Animation with Pulsating Glow */
            @keyframes lightRing {
              0% {
                background: linear-gradient(90deg, rgba(6, 182, 212, 0.5), rgba(147, 51, 234, 0.5));
                transform: rotate(0deg);
                box-shadow: 0 0 10px rgba(6, 182, 212, 0.3), 0 0 20px rgba(147, 51, 234, 0.3);
              }
              50% {
                box-shadow: 0 0 20px rgba(6, 182, 212, 0.5), 0 0 30px rgba(147, 51, 234, 0.5);
              }
              100% {
                background: linear-gradient(90deg, rgba(6, 182, 212, 0.5), rgba(147, 51, 234, 0.5));
                transform: rotate(360deg);
                box-shadow: 0 0 10px rgba(6, 182, 212, 0.3), 0 0 20px rgba(147, 51, 234, 0.3);
              }
            }
            .animate-light-ring {
              animation: lightRing 6s linear infinite;
            }

            /* Team Card Hover Animation */
            .team-card:hover {
              transform: translateY(-12px);
              transition: transform 0.5s ease, box-shadow 0.5s ease;
            }

            /* Pulsating Logo Animation */
            @keyframes pulseLogo {
              0% {
                box-shadow: 0 0 5px rgba(6, 182, 212, 0.3), 0 0 10px rgba(147, 51, 234, 0.3);
              }
              50% {
                box-shadow: 0 0 15px rgba(6, 182, 212, 0.5), 0 0 20px rgba(147, 51, 234, 0.5);
              }
              100% {
                box-shadow: 0 0 5px rgba(6, 182, 212, 0.3), 0 0 10px rgba(147, 51, 234, 0.3);
              }
            }
            .animate-pulse-logo {
              animation: pulseLogo 3s ease-in-out infinite;
            }

            /* Ensure responsiveness */
            @media (max-width: 640px) {
              .grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-4 {
                grid-template-columns: 1fr;
              }
              .w-40.h-40 {
                width: 30vw;
                height: 30vw;
              }
            }
          `}
        </style>
      </div>
    </div>
  );
}

export default App;