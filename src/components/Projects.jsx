import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "ATS System",
      description: "Advanced Applicant Tracking System built with modern web technologies to streamline recruitment processes. Features include automated resume parsing, candidate matching algorithms, and comprehensive dashboard analytics.",
      role: "Full-Stack Developer & System Architect",
      techStack: ["React", "Node.js", "MongoDB", "Express.js", "JWT Authentication", "Chart.js"],
      achievements: [
        "Improved recruitment efficiency by 60%",
        "Automated resume parsing with 95% accuracy",
        "Integrated machine learning for candidate matching"
      ],
      image: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=500",
      github: "#",
      demo: "#"
    },
    {
      title: "AI-Based Crop Disease Detection",
      description: "Machine learning-powered mobile and web application that helps farmers identify crop diseases early using computer vision. Built with TensorFlow and React Native for cross-platform compatibility.",
      role: "AI/ML Engineer & Lead Developer",
      techStack: ["TensorFlow", "Python", "React Native", "Flask", "OpenCV", "AWS S3"],
      achievements: [
        "94% accuracy in disease detection",
        "Deployed to 500+ farmers in pilot program",
        "Won Best Innovation Award at Tech Fest"
      ],
      image: "https://images.pexels.com/photos/4022090/pexels-photo-4022090.jpeg?auto=compress&cs=tinysrgb&w=500",
      github: "#",
      demo: "#"
    },
    {
      title: "WebChat Application",
      description: "Real-time messaging application with advanced features including file sharing, voice messages, group chats, and end-to-end encryption. Built using modern full-stack technologies.",
      role: "Full-Stack Developer",
      techStack: ["React", "Node.js", "Socket.io", "MongoDB", "Redis", "JWT", "Cloudinary"],
      achievements: [
        "Real-time messaging with 99.9% uptime",
        "Supports 10,000+ concurrent users",
        "End-to-end encryption implementation"
      ],
      image: "https://images.pexels.com/photos/5325885/pexels-photo-5325885.jpeg?auto=compress&cs=tinysrgb&w=500",
      github: "#",
      demo: "#"
    },
    {
      title: "Maha Vaccination Drive Platform",
      description: "Comprehensive vaccination management system developed during COVID-19 to streamline vaccine registration, appointment booking, and certificate generation for government health departments.",
      role: "Technical Lead & Backend Developer",
      techStack: ["Next.js", "PostgreSQL", "Node.js", "AWS", "Docker", "Redis"],
      achievements: [
        "Managed 1M+ registrations successfully",
        "Reduced appointment waiting time by 70%",
        "Integrated with national health database"
      ],
      image: "https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=500",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Showcasing my most impactful projects that demonstrate technical expertise and real-world problem-solving
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Role:</h4>
                  <p className="text-sm text-blue-600 font-medium">{project.role}</p>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {project.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex space-x-3">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;