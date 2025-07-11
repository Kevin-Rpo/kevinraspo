
import { useLanguage } from "../contexts/LanguageContext";

const Skills = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center animate-fade-in font-merriweather">
          {t('skillsTitle')} <span className="text-gray-400">{t('skillsSubtitle')}</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Skills Section */}
          <div className="bg-gray-950/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-600 transition-all duration-500 hover:shadow-xl hover:shadow-gray-900/20 animate-fade-in-up">
            <h3 className="text-3xl font-bold mb-8 text-white font-merriweather">{t('skillsSection')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300 hover:text-gray-200 transition-colors duration-300">
                <span className="text-gray-500 mt-2">•</span>
                <span className="leading-relaxed font-inter">Strategic Thinking & Problem Solving</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300 hover:text-gray-200 transition-colors duration-300">
                <span className="text-gray-500 mt-2">•</span>
                <span className="leading-relaxed font-inter">Research & Policy Analysis</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300 hover:text-gray-200 transition-colors duration-300">
                <span className="text-gray-500 mt-2">•</span>
                <span className="leading-relaxed font-inter">Organizational & Process Optimization</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300 hover:text-gray-200 transition-colors duration-300">
                <span className="text-gray-500 mt-2">•</span>
                <span className="leading-relaxed font-inter">Project Coordination & Planning</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300 hover:text-gray-200 transition-colors duration-300">
                <span className="text-gray-500 mt-2">•</span>
                <span className="leading-relaxed font-inter">Stakeholder Engagement & Communication</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300 hover:text-gray-200 transition-colors duration-300">
                <span className="text-gray-500 mt-2">•</span>
                <span className="leading-relaxed font-inter">Adaptability & Critical Thinking</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300 hover:text-gray-200 transition-colors duration-300">
                <span className="text-gray-500 mt-2">•</span>
                <span className="leading-relaxed font-inter">Data Interpretation & Reporting</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300 hover:text-gray-200 transition-colors duration-300">
                <span className="text-gray-500 mt-2">•</span>
                <span className="leading-relaxed font-inter">Effective Communication & Negotiation</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300 hover:text-gray-200 transition-colors duration-300">
                <span className="text-gray-500 mt-2">•</span>
                <span className="leading-relaxed font-inter">Teamwork & Collaboration</span>
              </li>
            </ul>
          </div>

          {/* Tools Section */}
          <div className="bg-gray-950/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-600 transition-all duration-500 hover:shadow-xl hover:shadow-gray-900/20 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <h3 className="text-3xl font-bold mb-8 text-white font-merriweather">{t('toolsSection')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300 hover:text-gray-200 transition-colors duration-300">
                <span className="text-gray-500 mt-2">•</span>
                <span className="leading-relaxed font-inter">Google Suite (Docs, Sheets, Slides, Drive)</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300 hover:text-gray-200 transition-colors duration-300">
                <span className="text-gray-500 mt-2">•</span>
                <span className="leading-relaxed font-inter">Microsoft 365 (Excel, PowerPoint, Visio, Project)</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300 hover:text-gray-200 transition-colors duration-300">
                <span className="text-gray-500 mt-2">•</span>
                <span className="leading-relaxed font-inter">AI applied to processes (GPT, Mistral, Perplexity, Claude, NotebookLM)</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300 hover:text-gray-200 transition-colors duration-300">
                <span className="text-gray-500 mt-2">•</span>
                <span className="leading-relaxed font-inter">Asana, Notion, Trello</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300 hover:text-gray-200 transition-colors duration-300">
                <span className="text-gray-500 mt-2">•</span>
                <span className="leading-relaxed font-inter">Power BI</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Languages Section - Reverted to original format */}
        <div className="mt-12 bg-gray-950/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-600 transition-all duration-500 hover:shadow-xl hover:shadow-gray-900/20 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          <h3 className="text-3xl font-bold mb-8 text-white font-merriweather text-center">{t('languagesSection')}</h3>
          <div className="grid md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="text-gray-300 font-bold font-merriweather text-lg mb-2">{t('spanish')}</div>
              <div className="text-sm text-gray-500 bg-gray-800 px-3 py-2 rounded-full font-inter">{t('native')}</div>
            </div>
            <div className="text-center">
              <div className="text-gray-300 font-bold font-merriweather text-lg mb-2">{t('english')}</div>
              <div className="text-sm text-gray-500 bg-gray-800 px-3 py-2 rounded-full font-inter">{t('c1')}</div>
            </div>
            <div className="text-center">
              <div className="text-gray-300 font-bold font-merriweather text-lg mb-2">{t('french')}</div>
              <div className="text-sm text-gray-500 bg-gray-800 px-3 py-2 rounded-full font-inter">{t('b2')}</div>
            </div>
            <div className="text-center">
              <div className="text-gray-300 font-bold font-merriweather text-lg mb-2">{t('italian')}</div>
              <div className="text-sm text-gray-500 bg-gray-800 px-3 py-2 rounded-full font-inter">{t('b1')}</div>
            </div>
            <div className="text-center">
              <div className="text-gray-300 font-bold font-merriweather text-lg mb-2">{t('german')}</div>
              <div className="text-sm text-gray-500 bg-gray-800 px-3 py-2 rounded-full font-inter">{t('a1')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
