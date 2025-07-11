
import { ExternalLink, Lightbulb, Globe, Users } from "lucide-react";

const Articles = () => {
  const articles = [
    {
      title: "CHALLENGES, CHANGE AND STATUS QUO IN THE INTERNATIONAL SYSTEM",
      url: "https://www.linkedin.com/pulse/challenges-change-status-quo-international-system-desaf%C3%ADos-raspo-z3hif/?trackingId=flnJX4wGP%2BURroTycjFx8Q%3D%3D",
      icon: Globe
    },
    {
      title: "PEOPLES SPEAK, SYSTEMS DO TOO",
      url: "https://www.linkedin.com/pulse/peoples-speak-systems-do-too-los-pueblos-hablan-sistemas-kevin-raspo-lymef/?trackingId=MXPr8mOQh2SDeXU1muU8iA%3D%3D",
      icon: Users
    },
    {
      title: "IT'S SOCIAL INSTITUTIONS, NOT HUMAN GENETICS",
      url: "https://www.linkedin.com/pulse/its-social-institutions-human-genetics-son-las-sociales-kevin-raspo-negef/?trackingId=s8CABsZclK8fB4cpAig8jw%3D%3D",
      icon: Lightbulb
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-950/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center animate-fade-in font-merriweather">
          Ideas, Reflections & <span className="text-gray-400">Articles</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => {
            const IconComponent = article.icon;
            return (
              <a
                key={index}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-black/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-600 transition-all duration-500 hover:shadow-xl hover:shadow-gray-900/20 hover:scale-105 animate-fade-in-up block"
                style={{
                  animationDelay: `${index * 0.2}s`,
                  animationFillMode: 'both'
                }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <IconComponent className="w-8 h-8 text-gray-400 mt-1 group-hover:text-gray-300 transition-colors duration-300 group-hover:animate-gentle-bounce" />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gray-300 transition-colors leading-tight font-merriweather">
                      {article.title}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-400 group-hover:text-gray-300 transition-colors">
                      <span className="text-sm font-inter">Read on LinkedIn</span>
                      <ExternalLink className="w-4 h-4 group-hover:animate-gentle-bounce" />
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Articles;
