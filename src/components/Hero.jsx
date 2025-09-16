import React from 'react';
import { Github, Linkedin, Code, Mail, Phone, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-teal-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-xl">
              PS
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 animate-fade-in">
              Premkishan Shrigopal
              <span className="block text-4xl md:text-5xl text-blue-600 mt-2">Suvarnakar</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-6 font-light">
              Full-Stack Developer & AI/ML Enthusiast
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
              Computer Science undergraduate passionate about building innovative solutions with MERN stack, 
              Cloud technologies, and AI/ML integration
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-gray-600">
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span className="text-sm">premkishan@email.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span className="text-sm">+91 XXXXX XXXXX</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span className="text-sm">India</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://linkedin.com/in/premkishan-suvarnakar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-blue-700 hover:text-blue-800 border border-gray-200"
            >
              <Linkedin size={20} />
              <span className="font-medium">LinkedIn</span>
            </a>
            <a
              href="https://github.com/premkishan-suvarnakar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-gray-800 hover:text-gray-900 border border-gray-200"
            >
              <Github size={20} />
              <span className="font-medium">GitHub</span>
            </a>
            <a
              href="https://leetcode.com/premkishan-suvarnakar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-orange-600 hover:text-orange-700 border border-gray-200"
            >
              <Code size={20} />
              <span className="font-medium">LeetCode</span>
            </a>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Let's Connect
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;