import React from 'react';
import { Building2, Award, Calendar, ExternalLink } from 'lucide-react';

const Training = () => {
  const trainings = [
    {
      company: "Zensar Technologies",
      role: "Software Development Intern",
      duration: "June 2025 - August 2025",
      description: "Gained hands-on experience in enterprise software development, working on real-world projects using Java, Spring Boot, and microservices architecture.",
      skills: ["Java", "Spring Boot", "Microservices", "REST APIs", "Agile Development"],
      type: "Industrial Training"
    },
    {
      company: "Vikramaa Technologies",
      role: "Full-Stack Development Intern",
      duration: "January 2023 - March 2023",
      description: "Developed responsive web applications using MERN stack, implemented user authentication, and worked on database optimization techniques.",
      skills: ["React.js", "Node.js", "MongoDB", "Express.js", "Authentication"],
      type: "Industrial Training"
    }
  ];

  const certifications = [
    {
      title: "AWS Educate Cloud Computing",
      issuer: "Amazon Web Services",
      date: "2023",
      description: "Comprehensive training in cloud computing fundamentals, AWS services, and cloud architecture best practices."
    },
    {
      title: "Python Programming Certification",
      issuer: "Infosys Springboard",
      date: "2023",
      description: "Advanced Python programming concepts, data structures, algorithms, and application development."
    },
    {
      title: "C++ Programming Certification",
      issuer: "Scalar Academy",
      date: "2022",
      description: "Object-oriented programming in C++, advanced data structures, and competitive programming techniques."
    }
  ];

  return (
    <section id="training" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Training & Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Professional development through industry training and recognized certifications
          </p>
        </div>

        {/* Industrial Training */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Industrial Training</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {trainings.map((training, index) => (
              <div
                key={index}
                className="card-fade card-hover bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-gray-600"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building2 className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">{training.company}</h4>
                    <p className="text-blue-400 font-semibold mb-2">{training.role}</p>
                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                      <Calendar size={16} />
                      <span>{training.duration}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">{training.description}</p>
                
                <div>
                  <h5 className="text-sm font-semibold text-purple-400 mb-3">Skills Gained:</h5>
                  <div className="flex flex-wrap gap-2">
                    {training.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs font-medium hover:bg-gray-600 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Professional Certifications</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="card-fade card-hover bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-gray-600"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center mb-4">
                  <Award className="text-white" size={24} />
                </div>
                
                <h4 className="text-lg font-bold text-white mb-2">{cert.title}</h4>
                <p className="text-green-400 font-semibold mb-2">{cert.issuer}</p>
                <p className="text-gray-400 text-sm mb-4">{cert.date}</p>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;