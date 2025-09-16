import React from 'react';
import { Code, Music, BookOpen, Trophy } from 'lucide-react';

const Hobbies = () => {
  const hobbies = [
    {
      title: "Competitive Programming",
      description: "Regular participant on LeetCode, CodeChef, and HackerRank. Love solving algorithmic challenges and participating in coding contests.",
      icon: Code,
      color: "from-blue-600 to-blue-700",
      stats: "500+ Problems Solved"
    },
    {
      title: "Music & Audio",
      description: "Passionate about music production and audio engineering. Enjoy creating electronic music and exploring sound design in my free time.",
      icon: Music,
      color: "from-purple-600 to-purple-700",
      stats: "Hobby Producer"
    },
    {
      title: "Technical Reading",
      description: "Avid reader of technical blogs, research papers, and books on emerging technologies, AI/ML, and software architecture patterns.",
      icon: BookOpen,
      color: "from-green-600 to-green-700",
      stats: "Weekly Reader"
    },
    {
      title: "Open Source",
      description: "Contributing to open source projects and maintaining personal repositories. Believe in collaborative development and knowledge sharing.",
      icon: Trophy,
      color: "from-orange-600 to-orange-700",
      stats: "Active Contributor"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Personal Interests</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Beyond coding, I pursue interests that fuel creativity and continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className={`w-14 h-14 bg-gradient-to-r ${hobby.color} rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                <hobby.icon className="text-white" size={28} />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{hobby.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 text-center">{hobby.description}</p>
              
              <div className="text-center">
                <span className={`inline-block px-3 py-1 bg-gradient-to-r ${hobby.color} text-white rounded-full text-xs font-medium`}>
                  {hobby.stats}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Life Philosophy</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              "I believe that the intersection of technology and creativity holds the key to solving tomorrow's challenges. 
              Whether it's through code, music, or continuous learning, I strive to approach every problem with curiosity, 
              persistence, and an open mind. Technology is not just my profession—it's my passion for making a positive impact."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;