import React from 'react';
const About = () => {
  return (
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
  );
};

export default About;
