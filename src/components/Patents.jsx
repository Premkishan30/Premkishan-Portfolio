import React from 'react';
import { FileText, Award, Calendar, ExternalLink } from 'lucide-react';

const Patents = () => {
  const patents = [
    {
      title: "SAVDHAN-AI: Hybrid Accident Detection System",
      patentNumber: "Patent Application No. 202341045123",
      status: "Published",
      date: "July 2025",
      description: "Innovative hybrid AI system combining computer vision and IoT sensors for real-time accident detection with 96% accuracy and sub-2-second response time. Features automatic emergency response coordination and GPS-based location tracking.",
      technologies: ["Computer Vision", "IoT Sensors", "Machine Learning", "GPS Tracking", "Emergency Response"],
      impact: "96% accuracy, <2s response time, automatic emergency coordination",
      coAuthors: [""],
      category: "AI/ML & IoT"
    }
  ];

  const publications = [
    {
      title: "Real-time Accident Detection using Hybrid AI Approach",
      journal: "International Journal of Computer Vision and IoT",
      date: "August 2023",
      description: "Research paper detailing the implementation and performance analysis of SAVDHAN-AI system, comparing traditional computer vision approaches with hybrid AI-IoT integration.",
      technologies: ["Deep Learning", "Computer Vision", "IoT Integration", "Real-time Processing"],
      status: "Published"
    }
  ];

  return (
    <section id="patents" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Patents & Publications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Research contributions and intellectual property in AI/ML and innovative technology solutions
          </p>
        </div>

        {/* Patents Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Patents</h3>
          <div className="max-w-4xl mx-auto">
            {patents.map((patent, index) => (
              <div
                key={index}
                className="card-fade card-hover bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-600 hover:border-gray-500"
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award className="text-white" size={32} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-white mb-3">{patent.title}</h4>
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <FileText size={16} className="text-blue-400" />
                        <span className="text-blue-400 font-semibold">{patent.patentNumber}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-green-400" />
                        <span className="text-green-400">{patent.date}</span>
                      </div>
                      <span className="px-3 py-1 bg-green-600 text-white rounded-full text-sm font-medium">
                        {patent.status}
                      </span>
                    </div>
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-purple-600 text-white text-sm rounded-full font-medium">
                        {patent.category}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed text-lg">{patent.description}</p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h5 className="text-sm font-semibold text-orange-400 mb-3">Key Impact:</h5>
                    <p className="text-gray-300 text-sm">{patent.impact}</p>
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-blue-400 mb-3">Co-Authors:</h5>
                    <div className="flex flex-wrap gap-2">
                      {patent.coAuthors.map((author, authorIndex) => (
                        <span
                          key={authorIndex}
                          className="text-gray-300 text-sm"
                        >
                          {author}{authorIndex < patent.coAuthors.length - 1 ? ', ' : ''}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div>
                  <h5 className="text-sm font-semibold text-purple-400 mb-3">Technologies Used:</h5>
                  <div className="flex flex-wrap gap-2">
                    {patent.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-600 text-gray-300 rounded-full text-sm font-medium hover:bg-gray-500 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Patents;