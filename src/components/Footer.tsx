import React from 'react';
import { Heart, Github, Linkedin, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                PS
              </div>
              <span className="text-xl font-bold">Premkishan Suvarnakar</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Full-Stack Developer passionate about creating innovative solutions with modern technologies. 
              Always excited to collaborate on challenging projects.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {['About', 'Skills', 'Projects', 'Training', 'Patent', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Let's Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://linkedin.com/in/premkishan-suvarnakar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/premkishan-suvarnakar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://leetcode.com/premkishan-suvarnakar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center hover:bg-orange-700 transition-colors"
              >
                <Code size={20} />
              </a>
            </div>
            <p className="text-gray-300 text-sm">
              Open to opportunities and collaboration
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-300">
              <span>Made with</span>
              <Heart size={16} className="text-red-500" />
              <span>by Premkishan Suvarnakar</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2025 Premkishan Suvarnakar. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;