
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor's Degree in Political Science - Specialization in Public Administration",
      institution: "NATIONAL UNIVERSITY OF ROSARIO (UNR)",
      location: "ROSARIO, ARGENTINA",
      period: "2017 - 2021",
      description: "This degree provided me with specialized tools to critically and strategically analyze how organizations operate. It equipped me with the skills to conduct well-founded research and propose improvements, always considering the various stakeholders involved and the contextual factors at play."
    },
    {
      degree: "Bachelor's Degree in International Relations",
      institution: "NATIONAL UNIVERSITY OF ROSARIO (UNR)",
      location: "ROSARIO, ARGENTINA",
      period: "2013 - 2016",
      description: "Through extensive coursework in International Relations, I developed a deep understanding of global political and economic dynamics. Completing advanced courses in this field equipped me with analytical tools to assess international challenges, design strategic responses, and navigate complex geopolitical and institutional environments."
    }
  ];

  const additionalTraining = [
    "Global Affairs & International Analysis: Examination of economic and political dynamics to understand international relations and decision-making.",
    "Foreign Policy & Trade Strategies: Development of insights on diplomatic relations, and international negotiation and cooperation frameworks.",
    "Project Design & Management: Planning and coordination of initiatives related to global governance, security, and sustainable development.",
    "Contextual & Strategic Thinking: Ability to assess diverse sociopolitical environments to design adaptive and effective solutions to complex challenges.",
    "Interdisciplinary Work: Collaboration with professionals from different fields to generate comprehensive solutions to complex challenges."
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Education & <span className="text-gray-400">Training</span>
        </h2>
        
        <div className="space-y-8 mb-12">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-600 transition-all duration-500 hover:shadow-xl hover:shadow-gray-900/20"
            >
              <div className="flex items-start gap-4 mb-6">
                <GraduationCap className="w-8 h-8 text-gray-400 mt-1" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gray-300 transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-xl text-gray-300 font-medium mb-2">{edu.institution}</p>
                  
                  <div className="flex flex-col md:flex-row md:items-center gap-4 text-gray-400 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                    <span className="hidden md:block">•</span>
                    <span>{edu.location}</span>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-black/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-gray-300">Key Academic Focus Areas</h3>
          <ul className="space-y-3">
            {additionalTraining.map((item, index) => (
              <li 
                key={index}
                className="flex gap-3 text-gray-300 hover:text-white transition-colors duration-300"
              >
                <span className="text-gray-500 mt-2">•</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
