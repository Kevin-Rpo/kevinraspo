
import { Calendar, MapPin, Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Policy Analyst",
      company: "City Council of Valencia",
      period: "2022 - Present",
      location: "Valencia, Spain",
      description: "Strategic policy development and implementation oversight for municipal governance initiatives.",
      highlights: ["Policy framework development", "Stakeholder coordination", "Impact assessment"]
    },
    {
      title: "Research Consultant",
      company: "Independent",
      period: "2021 - 2022",
      location: "Remote",
      description: "Provided research and analysis services for political organizations and think tanks.",
      highlights: ["Political analysis", "Report writing", "Data interpretation"]
    },
    {
      title: "Political Content Creator",
      company: "Various Media Outlets",
      period: "2020 - 2021",
      location: "Remote",
      description: "Created content covering international affairs, political systems, and social policy analysis.",
      highlights: ["Content strategy", "International affairs", "Social media management"]
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
                  <div className="flex items-center gap-2 text-gray-300 mb-2">
                    <Briefcase className="w-4 h-4" />
                    <span className="font-medium">{exp.company}</span>
                  </div>
                  <p className="text-gray-400 mb-4 leading-relaxed font-inter">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((highlight, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm font-inter"
                      >
                        {highlight}
                      </span>
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
