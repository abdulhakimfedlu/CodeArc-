


import React from 'react';

const Footer = () => {
  return (
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
        
          {/* Quick Links just like the navbar*/}
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

          {/* Social media Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 reveal">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/codearc1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#E4405F] transition duration-300 transform hover:scale-110 reveal"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.301.975.975 1.24 2.242 1.301 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.326 2.633-1.301 3.608-.975.975-2.242 1.24-3.608 1.301-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.326-3.608-1.301-.975-.975-1.24-2.242-1.301-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.326-2.633 1.301-3.608.975-.975 2.242-1.24 3.608-1.301 1.266-.058 1.646-.07 4.85-.07m0-2.163c-3.259 0-3.667.014-4.947.072-1.542.07-2.968.385-4.112 1.529-1.144 1.144-1.459 2.57-1.529 4.112-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.07 1.542.385 2.968 1.529 4.112 1.144 1.144 2.57 1.459 4.112 1.529 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.542-.07 2.968-.385 4.112-1.529 1.144-1.144 1.459-2.57 1.529-4.112.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.07-1.542-.385-2.968-1.529-4.112-1.144-1.144-2.57-1.459-4.112-1.529-1.28-.058-1.688-.072-4.947-.072zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://tiktok.com/@codearc1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00F2EA] transition duration-300 transform hover:scale-110 reveal"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300 transform hover:scale-110 reveal"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/joincodearc/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#0A66C2] transition duration-300 transform hover:scale-110 reveal"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
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
  );
};

export default Footer;
