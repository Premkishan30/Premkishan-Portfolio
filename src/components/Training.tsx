import React from 'react';
import { Award, Building, Calendar } from 'lucide-react';

const Training = () => {
  const trainings = [
    {
      company: "Zensar Technologies",
      role: "Software Development Intern",
      duration: "6 months",
      description: "Intensive training program focusing on enterprise software development, agile methodologies, and cloud technologies. Worked on real client projects and gained hands-on experience with modern development practices.",
      skills: ["Enterprise Software", "Agile Development", "Spring Boot", "Microservices", "AWS Cloud"],
      icon: Building
    },
    {
      company: "Vikramaa Technologies",
      role: "Full-Stack Development Intern",
      duration: "4 months",
      description: "Comprehensive internship program covering end-to-end web development. Built multiple client projects and learned industry best practices for scalable web applications.",
      skills: ["MERN Stack", "RESTful APIs", "Database Design", "Project Management", "Client Communication"],
      icon: Building
    }
  ];

  const certifications = [
    {
      name: "AWS Educate Cloud Computing",
      issuer: "Amazon Web Services",
      date: "2023",
      description: "Comprehensive certification covering AWS cloud services, architecture patterns, and best practices for cloud deployment."
    },
    {
      name: "Python for Everybody Specialization",
      issuer: "Infosys",
      date: "2023",
      description: "Advanced Python programming certification focusing on data structures, algorithms, and application development."
    },
    {
      name: "C++ Essentials",
      issuer: "Scalar",
      date: "2022",
      description: "In-depth certification covering advanced C++ concepts, object-oriented programming, and system-level programming."
    }
  ];

  return (
    <section id="training" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Industrial Training & Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional development through industry partnerships and recognized certifications
          </p>
        </div>

        {/* Industrial Training */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Industrial Training</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {trainings.map((training, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <training.icon className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-900">{training.company}</h4>
                    <p className="text-blue-600 font-medium">{training.role}</p>
                    <div className="flex items-center gap-1 mt-1 text-gray-500">
                      <Calendar size={14} />
                      <span className="text-sm">{training.duration}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">{training.description}</p>
                
                <div>
                  <h5 className="text-sm font-semibold text-gray-900 mb-2">Key Skills Acquired:</h5>
                  <div className="flex flex-wrap gap-2">
                    {training.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
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
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Professional Certifications</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Award className="text-white" size={24} />
                </div>
                
                <h4 className="text-lg font-semibold text-gray-900 mb-2 text-center">{cert.name}</h4>
                <p className="text-blue-600 font-medium text-center mb-2">{cert.issuer}</p>
                <p className="text-gray-500 text-sm text-center mb-4">{cert.date}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;