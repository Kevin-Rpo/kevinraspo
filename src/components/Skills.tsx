
const Skills = () => {
  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center animate-fade-in font-merriweather">
          Skills & <span className="text-gray-400">Tools</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Skills Section */}
          <div className="bg-gray-950/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-600 transition-all duration-500 hover:shadow-xl hover:shadow-gray-900/20 animate-fade-in-up">
            <h3 className="text-3xl font-bold mb-8 text-white font-merriweather">SKILLS</h3>
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
            <h3 className="text-3xl font-bold mb-8 text-white font-merriweather">TOOLS</h3>
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

        {/* Languages Section */}
        <div className="mt-12 bg-gray-950/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-600 transition-all duration-500 hover:shadow-xl hover:shadow-gray-900/20 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          <h3 className="text-3xl font-bold mb-8 text-white font-merriweather text-center">LANGUAGES</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-2">🇪🇸</div>
              <div className="text-gray-300 font-medium font-inter">Spanish</div>
              <div className="text-sm text-gray-500 bg-gray-800 px-2 py-1 rounded-full mt-2 font-inter">Native</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🇺🇸</div>
              <div className="text-gray-300 font-medium font-inter">English</div>
              <div className="text-sm text-gray-500 bg-gray-800 px-2 py-1 rounded-full mt-2 font-inter">Fluent</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🇫🇷</div>
              <div className="text-gray-300 font-medium font-inter">French</div>
              <div className="text-sm text-gray-500 bg-gray-800 px-2 py-1 rounded-full mt-2 font-inter">Conversational</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🇮🇹</div>
              <div className="text-gray-300 font-medium font-inter">Italian</div>
              <div className="text-sm text-gray-500 bg-gray-800 px-2 py-1 rounded-full mt-2 font-inter">Conversational</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
