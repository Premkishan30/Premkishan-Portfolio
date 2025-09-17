import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "Python", "JavaScript", "C++", "C", "SQL", "HTML5", "CSS3"],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React.js", "Node.js", "Express.js", "Spring Boot", "TensorFlow", "OpenCV", "Bootstrap", "Tailwind CSS"],
      color: "from-green-500 to-green-600"
    },
    {
      title: "Databases",
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Firebase", "SQLite"],
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Development Tools",
      skills: ["VS Code", "IntelliJ IDEA", "Eclipse", "Postman", "Git", "GitHub", "Figma"],
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "Docker", "Linux", "CI/CD", "Netlify", "Heroku"],
      color: "from-teal-500 to-teal-600"
    },
    {
      title: "Operating Systems",
      skills: ["Windows", "Linux", "macOS", "Ubuntu"],
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Comprehensive technical expertise across full-stack development, AI/ML, and cloud technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="card-fade card-hover bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-gray-600"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-6`}>
                <span className="text-white font-bold text-xl">{category.title.charAt(0)}</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-gray-700 text-gray-300 rounded-full text-sm font-medium hover:bg-gray-600 hover:text-white transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;