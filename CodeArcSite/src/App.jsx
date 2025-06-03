import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Team from './components/Team';
import Programmes from './components/Programmes';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-gray-100 relative overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900"></div>
      <div className="absolute inset-0 bg-lines bg-[length:100px_100%] animate-background-shift opacity-10"></div>
      <div className="absolute inset-0 bg-lines-glow bg-[length:100px_100%] animate-background-shift animate-glow blur-[0.5px]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50 backdrop-blur-xs"></div>
      
      {/* Content Container */}
      <div className="relative z-10">
        <Navbar isDarkMode={isDarkMode} setDarkMode={setDarkMode} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Home />
        <About />
        <Team isDarkMode={isDarkMode} />
        <Programmes />
        <Contact />
        <Footer />
      </div>

      {/* Custom Styles */}
      <style>
        {`
          .reveal {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.8s ease-out, transform 0.8s ease-out;
          }
          .revealed {
            opacity: 1;
            transform: translateY(0);
          }
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
          .team-card:hover {
            transform: translateY(-12px);
            transition: transform 0.5s ease, box-shadow 0.5s ease;
          }
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
  );
}

export default App;
