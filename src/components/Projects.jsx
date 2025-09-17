import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Application Tracking System (ATS)",
      description: "Comprehensive recruitment platform featuring automated resume parsing with intelligent candidate matching algorithms and integrated interview scheduling system.",
      role: "Full-Stack Developer",
      techStack: ["React.js", "Node.js", "MongoDB", "Express.js"],
      github: "#",
      demo: "#"
    },
    {
      title: "AI-Based Crop Disease Detection",
      description: "Computer vision application utilizing deep learning models to accurately identify crop diseases from leaf images, providing farmers with instant diagnostic capabilities.",
      role: "AI/ML Developer & Team Lead",
      techStack: ["TensorFlow", "Python", "OpenCV", "Flask"],
      github: "#",
      demo: "#"
    },
    {
      title: "WebChat Application",
      description: "Real-time messaging platform with group chat functionality, secure file sharing capabilities, and robust user authentication system.",
      role: "Full-Stack Developer",
      techStack: ["React.js", "Node.js", "Socket.io", "MongoDB"],
      github: "#",
      demo: "#"
    },
    {
      title: "Maha Vaccination Drive Portal",
      description: "Government vaccination management system with appointment scheduling, automated certificate generation, and comprehensive analytics dashboard for health officials.",
      role: "Backend Developer",
      techStack: ["Spring Boot", "MySQL", "React.js", "JWT"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Production-ready applications showcasing full-stack development, AI/ML integration, and scalable solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 card-hover"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-500 text-white text-sm rounded-full font-medium">
                    {project.role}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-purple-400 mb-3">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-600 text-gray-300 rounded-full text-xs font-medium hover:bg-gray-500 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-hover flex items-center gap-2 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-500 transition-colors font-medium flex-1 justify-center"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-hover flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium flex-1 justify-center"
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