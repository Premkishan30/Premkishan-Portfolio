import React from 'react';
import { Brain, Cloud, Code2, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I'm a passionate Computer Science undergraduate with a deep fascination for technology and innovation. 
              My journey in software development has been driven by an insatiable curiosity to solve complex problems 
              and create meaningful solutions that make a difference.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With expertise spanning Full-Stack Development using the MERN stack, Backend Systems, and Cloud 
              technologies, I bring a comprehensive understanding of modern software architecture. My experience 
              in AI/ML integration, combined with hands-on industrial training and published patents, demonstrates 
              my commitment to cutting-edge technology.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              I thrive in collaborative environments where I can leverage my technical skills in Java, Python, 
              and cloud platforms to build scalable, efficient solutions. My goal is to contribute to innovative 
              projects that push the boundaries of what's possible in technology.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl text-center hover:bg-blue-100 transition-colors duration-300">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code2 className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Full-Stack Development</h3>
              <p className="text-sm text-gray-600">MERN Stack expertise with modern frameworks</p>
            </div>

            <div className="bg-teal-50 p-6 rounded-xl text-center hover:bg-teal-100 transition-colors duration-300">
              <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Brain className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AI/ML Integration</h3>
              <p className="text-sm text-gray-600">Machine learning solutions for real-world problems</p>
            </div>

            <div className="bg-indigo-50 p-6 rounded-xl text-center hover:bg-indigo-100 transition-colors duration-300">
              <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Cloud className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Cloud Computing</h3>
              <p className="text-sm text-gray-600">AWS and modern cloud architecture</p>
            </div>

            <div className="bg-orange-50 p-6 rounded-xl text-center hover:bg-orange-100 transition-colors duration-300">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Problem Solving</h3>
              <p className="text-sm text-gray-600">Analytical approach to complex challenges</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;