import React from 'react';

const Programmes = () => {
  return (
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
  );
};

export default Programmes;
