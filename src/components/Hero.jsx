import React from 'react';
import { Github, Linkedin, Code, Mail, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="pt-20 pb-16 bg-gray-900 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <div className="hero-avatar w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
              PS
            </div>
            <h1 className="hero-name text-5xl md:text-6xl font-bold text-white mb-4">
              Premkishan Shrigopal
              <span className="block text-4xl md:text-5xl text-blue-400 mt-2">Suvarnkar</span>
            </h1>
            <p className="hero-tagline text-xl md:text-2xl text-gray-300 mb-6 font-light">
              Computer Science Student | Full-Stack Developer | AI/ML Enthusiast
            </p>
            <p className="hero-description text-lg text-gray-400 max-w-2xl mx-auto mb-8">
              Passionate about building innovative solutions with MERN stack, AI/ML, and Cloud technologies
            </p>
          </div>

          {/* Contact Info */}
          <div className="hero-contact flex flex-wrap justify-center gap-6 mb-8 text-gray-300">
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span className="text-sm">psuvarnkar3@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span className="text-sm">+91 8421096403</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://www.linkedin.com/in/premkishan-suvarnkar-36a538290/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social social-icon flex items-center gap-2 bg-gray-800 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-blue-400 hover:text-blue-300 border border-gray-700"
            >
              <Linkedin size={20} />
              <span className="font-medium">LinkedIn</span>
            </a>
            <a
              href="https://github.com/Premkishan30"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social social-icon flex items-center gap-2 bg-gray-800 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-gray-300 hover:text-white border border-gray-700"
            >
              <Github size={20} />
              <span className="font-medium">GitHub</span>
            </a>
            <a
              href="https://leetcode.com/u/premkishan30/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social social-icon flex items-center gap-2 bg-gray-800 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-orange-400 hover:text-orange-300 border border-gray-700"
            >
              <Code size={20} />
              <span className="font-medium">LeetCode</span>
            </a>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="hero-cta btn-animated bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Let's Connect
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;