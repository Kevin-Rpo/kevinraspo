import { Calendar, MapPin } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const Experience = () => {
  const { t } = useLanguage();
  
  const experiences = [
    {
      title: "DIGITAL CONTENT EDITOR",
      company: "Rev",
      location: "REMOTE", 
      period: "Jul 2022 - Mar 2025",
      responsibilities: [
        "Multilingual Content Adaptation: Translated content from English to Spanish, ensuring accuracy, clarity, and cultural resonance for diverse audiences.",
        "Tech Adaptability: Worked with AI-powered tools, quickly adapting to new software and optimizing workflow efficiency.",
        "Quality Assurance & Editing: Reviewed and refined subtitles for readability, synchronization, and adherence to platform guidelines."
      ]
    },
    {
      title: "COMMUNICATION AND STRATEGY CONSULTANT",
      company: "Soga Studio",
      location: "VILLASANTA, ITALY",
      period: "Nov 2023 - Jul 2024",
      responsibilities: [
        "Strategic Market Analysis: Assessed the local socio-cultural landscape to tailor communication and outreach strategies aligned with the expectations of a small, traditional Italian community.",
        "Multicultural Communications: Developed adaptable messaging strategies to effectively engage potential clients, ensuring resonance with the target demographic.",
        "Brand Positioning & Outreach: Advised on communication initiatives that strengthened brand identity and improved client engagement, focusing on clarity and cultural effectiveness.",
        "Content-Driven Decision Making: Conducted an organizational assessment to identify strategic opportunities and refine business positioning efforts."
      ]
    },
    {
      title: "MONITORING AND EVALUATION CONSULTANT FOR PUBLIC POLICIES",
      company: "City Council of Rafaela",
      location: "RAFAELA, ARGENTINA",
      period: "Jul 2022 - Jul 2023",
      responsibilities: [
        "Impact Assessment & Project Monitoring: Evaluated municipal programs, identifying inefficiencies and proposing data-driven improvements.",
        "Cross-departmental collaboration: Analyzed processes, identified improvement opportunities, developed KPIs and performance metrics using data analytics tools.",
        "Data-Driven Reporting: Created reports to support informed decision-making."
      ]
    },
    {
      title: "POLITICAL ANALYSIS CONSULTANT",
      company: '"CREO" Social Organization',
      location: "ROSARIO, ARGENTINA",
      period: "May 2019 - Feb 2022",
      responsibilities: [
        "Strategic Research: Conducted in-depth research on public policies, political trends, and economic developments to inform decision-making.",
        "International Affairs Monitoring: Tracked global news and analyzed international events to provide relevant insights for the party's positioning.",
        "Policy Briefing & Reporting: Prepared detailed reports on legislative initiatives, municipal projects, and public affairs developments to support strategic communications.",
        "Communication & Strategy Meetings: Participated in high-level discussions on communication strategies, press releases, and strategic messaging, ensuring consistency with the party's narrative."
      ]
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Inspirational Quote - More subtle */}
        <div className="text-center mb-8 animate-fade-in">
          <p className="text-base md:text-lg font-light text-gray-500 italic font-inter leading-relaxed max-w-2xl mx-auto">
            {t('quote')}
          </p>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center animate-[fade-in_1s_ease-out] font-merriweather">
          {t('experienceTitle')} <span className="text-gray-400">{t('experienceSubtitle')}</span>
        </h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-600 transition-all duration-500 hover:shadow-xl hover:shadow-gray-900/20 animate-[fade-in_1s_ease-out] hover:scale-[1.02]"
              style={{
                animationDelay: `${index * 0.2}s`,
                animationFillMode: 'both'
              }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white group-hover:text-gray-300 transition-colors duration-300 font-merriweather">
                    {exp.title}
                  </h3>
                  <p className="text-xl text-gray-300 font-medium font-inter">{exp.company}</p>
                </div>
                
                <div className="space-y-2 mt-4 md:mt-0 text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span className="font-inter">{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span className="font-inter">{exp.location}</span>
                  </div>
                </div>
              </div>
              
              <ul className="space-y-3">
                {exp.responsibilities.map((resp, respIndex) => (
                  <li key={respIndex} className="flex gap-3 text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    <span className="text-gray-500 mt-2">•</span>
                    <span className="leading-relaxed font-inter">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
