import React from 'react';

const Contact = () => {
  return (
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
  );
};

export default Contact;
