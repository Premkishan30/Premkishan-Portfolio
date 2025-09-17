import React from 'react';
import { Code2, Brain, Cloud, GraduationCap, Award, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="animate-scale card-fade bg-gray-700 rounded-2xl p-8 mb-12">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional Summary</h3>
            </div>
            
            <div className="text-center text-gray-300">
              <p className="text-lg leading-relaxed max-w-4xl mx-auto">
                Computer Science undergraduate skilled in <strong className="text-blue-400">Java</strong>, 
                <strong className="text-purple-400"> Full-Stack Development (MERN Stack)</strong>, 
                <strong className="text-green-400"> Backend Systems</strong>, with hands-on experience in building scalable applications. 
                Passionate about <strong className="text-orange-400">problem-solving, AI/ML, and cloud technologies</strong>.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="card-fade card-hover bg-gray-700 p-6 rounded-xl text-center hover:bg-gray-600 transition-colors duration-300">
            <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Code2 className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Full-Stack Development</h3>
            <p className="text-gray-300">MERN Stack, RESTful APIs, and Modern Web Frameworks</p>
          </div>

          <div className="card-fade card-hover bg-gray-700 p-6 rounded-xl text-center hover:bg-gray-600 transition-colors duration-300">
            <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Brain className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">AI/ML Integration</h3>
            <p className="text-gray-300">TensorFlow, OpenCV, and Computer Vision Solutions</p>
          </div>

          <div className="card-fade card-hover bg-gray-700 p-6 rounded-xl text-center hover:bg-gray-600 transition-colors duration-300">
            <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Cloud className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Cloud Computing</h3>
            <p className="text-gray-300">AWS, Docker, and Scalable Architecture</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;