
const Skills = () => {
  const skillsData = [
    {
      category: "SKILLS",
      items: [
        "Strategic Thinking & Problem Solving",
        "Research & Policy Analysis",
        "Organizational & Process Optimization",
        "Project Coordination & Planning",
        "Stakeholder Engagement & Communication",
        "Adaptability & Critical Thinking",
        "Data Interpretation & Reporting",
        "Effective Communication & Negotiation",
        "Teamwork & Collaboration"
      ]
    },
    {
      category: "TOOLS",
      items: [
        "Google Suite (Docs, Sheets, Slides, Drive)",
        "Microsoft 365 (Excel, PowerPoint, Visio, Project)",
        "AI applied to processes (GPT, Mistral, Perplexity, Claude, NotebookLM)",
        "Asana, Notion, Trello",
        "Power BI"
      ]
    }
  ];

  const languages = [
    { language: "SPANISH", level: "Native" },
    { language: "ENGLISH", level: "C1" },
    { language: "FRENCH", level: "B2" },
    { language: "ITALIAN", level: "B1" },
    { language: "GERMAN", level: "A1" }
  ];

  return (
    <section className="py-20 px-6 bg-gray-950/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Skills & <span className="text-gray-400">Expertise</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillsData.map((section, index) => (
            <div 
              key={index}
              className="bg-black/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-600 transition-all duration-500"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-300">{section.category}</h3>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li 
                    key={itemIndex}
                    className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    <span className="text-gray-500 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-black/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-gray-300">LANGUAGES</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {languages.map((lang, index) => (
              <div 
                key={index}
                className="text-center p-4 bg-gray-900/50 rounded-xl hover:bg-gray-800/50 transition-colors duration-300"
              >
                <p className="font-bold text-white">{lang.language}</p>
                <p className="text-gray-400 text-sm">{lang.level}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 bg-black/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-300">ONGOING TRAINING</h3>
          <p className="text-gray-300">Organizational Analysis and Agile Project Coordination</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
