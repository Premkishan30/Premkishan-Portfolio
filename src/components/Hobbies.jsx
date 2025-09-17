import React from 'react';
import { Music, BookOpen, Code } from 'lucide-react';

const Hobbies = () => {
  const hobbies = [
    {
      title: "Listening to Music",
      description: "Listening to music (upbeat and sad songs).",
      icon: Music,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Reading Manga & Comics",
      description: "Reading manga and comics.",
      icon: BookOpen,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Coding Challenges & Hackathons",
      description: "Solving coding challenges and participating in hackathons.",
      icon: Code,
      color: "from-blue-500 to-blue-600"
    }
  ];

  return (
    <section id="hobbies" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Hobbies & Interests</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Personal interests that fuel creativity, enhance problem-solving skills, and maintain work-life balance
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {hobbies.map((hobby, index) => {
            const IconComponent = hobby.icon;
            return (
              <div
                key={index}
                className="card-fade card-hover bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-gray-600"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${hobby.color} rounded-xl flex items-center justify-center mb-6`}>
                  <IconComponent className="text-white" size={32} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{hobby.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{hobby.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;