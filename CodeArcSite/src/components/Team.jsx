import React from 'react';

const Team = ({ isDarkMode }) => {
  return (
    <section id="team" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 text-center mb-16 reveal">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Team Member 1: Abdulhakim Fedlu */}
          <div
            className={`${
              isDarkMode ? 'bg-gray-900' : 'bg-white'
            } p-8 rounded-xl shadow-lg border ${
              isDarkMode ? 'border-gray-800' : 'border-gray-200'
            } transition-all duration-300 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-cyan-400/30 reveal team-card`}
          >
            <div className="relative w-40 h-40 mx-auto mb-6">
              <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-cyan-400/50 to-purple-600/50 animate-light-ring"></div>
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
            <p
              className={`text-lg text-center mt-4 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              } reveal`}
            >
              Visionary leader driving CodeArc's mission to empower developers worldwide.
            </p>
            <div className="mt-6 flex justify-center space-x-4">
              <a
                href="https://www.linkedin.com/in/abdulhakim-fedlu-abdu-87a03b294/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://github.com/abdulhakimfedlu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Team Member 2: Jabez Shiferaw */}
          <div
            className={`${
              isDarkMode ? 'bg-gray-900' : 'bg-white'
            } p-8 rounded-xl shadow-lg border ${
              isDarkMode ? 'border-gray-800' : 'border-gray-200'
            } transition-all duration-300 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-purple-400/30 reveal team-card`}
          >
            <div className="relative w-40 h-40 mx-auto mb-6">
              <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-purple-600/50 to-pink-500/50 animate-light-ring"></div>
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
            <p
              className={`text-lg text-center mt-4 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              } reveal`}
            >
              Operations expert shaping CodeArc's growth and community engagement.
            </p>
            <div className="mt-6 flex justify-center space-x-4">
              <a
                href="https://www.linkedin.com/in/jabez-shiferaw-0b919321b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://github.com/jabezinu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-pink-300 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;