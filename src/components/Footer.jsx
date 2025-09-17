import React from 'react';
import { Heart, Github, Linkedin, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                PS
              </div>
              <span className="text-xl font-bold">Premkishan Shrigopal Suvarnkar</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Computer Science student specializing in Full-Stack Development, AI/ML, and Cloud technologies.
            </p>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://www.linkedin.com/in/premkishan-suvarnkar-36a538290/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/Premkishan30"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://leetcode.com/u/premkishan30/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors"
              >
                <Code size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-300">
              <span>Premkishan Shrigopal Suvarnkar | Computer Science Student & Full-Stack Developer</span>
            </div>
            <div className="text-gray-500 text-sm">
              © 2025 Premkishan Shrigopal Suvarnkar. All rights reserved.
            </div>
          </div>
          
          {/* Additional Footer Info */}
          <div className="mt-6 pt-6 border-t border-gray-800 text-center">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <span>📧 psuvarnkar3@gmail.com</span>
              <span>📱 +91 8421096403</span>
              <span>📍 India</span>
              <span>🎓 Computer Science Student</span>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              Open to full-time opportunities, internships, and exciting project collaborations
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;