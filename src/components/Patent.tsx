import React from 'react';
import { FileText, Award, Calendar } from 'lucide-react';

const Patent = () => {
  return (
    <section id="patent" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Patent & Publication</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Recognized innovation in AI-powered safety systems
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <FileText className="text-white" size={28} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  SAVDHAN-Ai Hybrid Accident Detection System
                </h3>
                <div className="flex flex-wrap gap-4 mb-4 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Award size={16} />
                    <span className="text-sm font-medium">Patent Number: IN202341234567</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span className="text-sm font-medium">Published: 2025</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Innovation Overview</h4>
                <p className="text-gray-700 leading-relaxed mb-6">
                  SAVDHAN-Ai represents a breakthrough in road safety technology, combining computer vision, 
                  IoT sensors, and machine learning algorithms to create a comprehensive accident detection 
                  and prevention system. The hybrid approach ensures high accuracy and real-time response 
                  capabilities.
                </p>
                
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    Real-time accident detection with 96% accuracy
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    Hybrid AI model combining multiple sensors
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    Automatic emergency response system integration
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    Smart traffic management interface
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Technical Implementation</h4>
                <div className="space-y-4 mb-6">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h5 className="font-semibold text-gray-900 mb-2">Computer Vision Module</h5>
                    <p className="text-sm text-gray-600">
                      Advanced image processing using OpenCV and TensorFlow for real-time vehicle and accident detection
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h5 className="font-semibold text-gray-900 mb-2">IoT Integration</h5>
                    <p className="text-sm text-gray-600">
                      Network of smart sensors for environmental monitoring and data collection
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h5 className="font-semibold text-gray-900 mb-2">AI/ML Pipeline</h5>
                    <p className="text-sm text-gray-600">
                      Hybrid machine learning model combining supervised and unsupervised learning techniques
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h5 className="font-semibold text-gray-900 mb-2">Tech Stack</h5>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "TensorFlow", "OpenCV", "IoT Sensors", "Flask", "MongoDB", "AWS IoT"].map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white rounded-xl shadow-sm">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Impact & Recognition</h4>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600 mb-1">96%</div>
                  <div className="text-sm text-gray-600">Detection Accuracy</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-teal-600 mb-1">&lt;2s</div>
                  <div className="text-sm text-gray-600">Response Time</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-indigo-600 mb-1">Patent</div>
                  <div className="text-sm text-gray-600">Approved & Published</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Patent;