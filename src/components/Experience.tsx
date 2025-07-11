
import { Calendar, MapPin, Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Digital Content Editor",
      company: "Rev",
      period: "Jul 2022 - Mar 2025",
      location: "Remote",
      description: "",
      highlights: [
        "Multilingual Content Adaptation: Translated content from English to Spanish, ensuring accuracy, clarity, and cultural resonance for diverse audiences.",
        "Tech Adaptability: Worked with AI-powered tools, quickly adapting to new software and optimizing workflow efficiency.",
        "Quality Assurance & Editing: Reviewed and refined subtitles for readability, synchronization, and adherence to platform guidelines."
      ]
    },
    {
      title: "Communication and Strategy Consultant",
      company: "Soga Studio",
      period: "Nov 2023 - Jul 2024",
      location: "Villasanta, Italy",
      description: "",
      highlights: [
        "Strategic Market Analysis: Assessed the local socio-cultural landscape to tailor communication and outreach strategies aligned with the expectations of a small, traditional Italian community.",
        "Multicultural Communications: Developed adaptable messaging strategies to effectively engage potential clients, ensuring resonance with the target demographic.",
        "Brand Positioning & Outreach: Advised on communication initiatives that strengthened brand identity and improved client engagement, focusing on clarity and cultural effectiveness.",
        "Content-Driven Decision Making: Conducted an organizational assessment to identify strategic opportunities and refine business positioning efforts."
      ]
    },
    {
      title: "Monitoring and Evaluation Consultant for Public Policies",
      company: "City Council of Rafaela",
      period: "Jul 2022 - Jul 2023",
      location: "Rafaela, Argentina",
      description: "",
      highlights: [
        "Impact Assessment & Project Monitoring: Evaluated municipal programs, identifying inefficiencies and proposing data-driven improvements.",
        "Cross-departmental collaboration: Analyzed processes, identified improvement opportunities, developed KPIs and performance metrics using data analytics tools.",
        "Data-Driven Reporting: Created reports to support informed decision-making."
      ]
    },
    {
      title: "Political Analysis Consultant",
      company: '"CREO" Social Organization',
      period: "May 2019 - Feb 2022",
      location: "Rosario, Argentina",
      description: "",
      highlights: [
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
        {/* Inspirational Quote */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-base italic text-gray-400 font-light font-inter max-w-2xl mx-auto">
            Institutional success begins with the courage to ask questions we may not yet have answers to.
          </p>
        </div>

        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold font-merriweather">
            Professional
            <br />
            <span className="text-gray-400">Experience</span>
          </h2>
        </div>

        {/* Experience Items */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-600 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-bold text-white mb-2 font-merriweather">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-gray-300 mb-4">
                    <Briefcase className="w-4 h-4" />
                    <span className="font-medium">{exp.company}</span>
                  </div>
                  <div className="space-y-3">
                    {exp.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="text-gray-400 mt-2">•</span>
                        <p className="text-gray-300 leading-relaxed font-inter text-sm">
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
