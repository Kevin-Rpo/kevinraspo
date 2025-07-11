
import { Languages, Wrench, Code, Globe, MessageSquare, Palette } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Languages,
      skills: [
        { name: "Spanish", level: "Native", flag: "🇪🇸" },
        { name: "English", level: "Fluent", flag: "🇺🇸" },
        { name: "French", level: "Conversational", flag: "🇫🇷" },
        { name: "Italian", level: "Conversational", flag: "🇮🇹" }
      ]
    },
    {
      title: "Tools & Software",
      icon: Wrench,
      skills: [
        { name: "Microsoft Office Suite", icon: "📊" },
        { name: "Google Workspace", icon: "🔧" },
        { name: "Content Management Systems", icon: "⚙️" },
        { name: "Data Analysis Tools", icon: "📈" }
      ]
    },
    {
      title: "Technical Skills",
      icon: Code,
      skills: [
        { name: "Research & Analysis", icon: "🔍" },
        { name: "Policy Development", icon: "📋" },
        { name: "Content Creation", icon: "✍️" },
        { name: "Project Management", icon: "📊" }
      ]
    }
  ];

  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center animate-fade-in font-merriweather">
          Skills & <span className="text-gray-400">Expertise</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="bg-gray-950/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-600 transition-all duration-500 hover:shadow-xl hover:shadow-gray-900/20 animate-fade-in-up"
                style={{
                  animationDelay: `${index * 0.2}s`,
                  animationFillMode: 'both'
                }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <IconComponent className="w-8 h-8 text-gray-400 hover:animate-gentle-bounce" />
                  <h3 className="text-2xl font-bold text-white font-merriweather">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center justify-between p-3 bg-black/30 rounded-lg hover:bg-black/50 transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl group-hover:animate-gentle-bounce">
                          {skill.flag || skill.icon}
                        </span>
                        <span className="text-gray-300 font-medium font-inter">{skill.name}</span>
                      </div>
                      {skill.level && (
                        <span className="text-sm text-gray-500 bg-gray-800 px-2 py-1 rounded-full font-inter">
                          {skill.level}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
