
import { Mail, Phone, MapPin, Linkedin, ExternalLink } from "lucide-react";

const Contact = () => {
  const personalStatement = `I thrive in dynamic environments where different perspectives come together to create real impact. I have worked across various sectors, from public administration to marketing, finance to diplomacy, and meaningful storytelling. Languages, cultures, and new technologies (including AI) excite me, especially when they help connect ideas and people. I am fluent in Spanish and English, proficient in French and Italian, and always up for a challenge.

I am eager to keep growing, learning, and contributing to a team that values curiosity, collaboration, and impact!`;

  return (
    <section className="py-20 px-6 bg-gray-950/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Let's <span className="text-gray-400">Connect</span>
        </h2>
        
        <div className="bg-black/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold mb-6 text-gray-300">About Me</h3>
          <p className="text-gray-300 leading-relaxed text-lg whitespace-pre-line">
            {personalStatement}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <a 
            href="mailto:kevinraspo@gmail.com"
            className="group bg-black/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-gray-600 transition-all duration-500 hover:shadow-xl hover:shadow-gray-900/20"
          >
            <div className="flex items-center gap-4">
              <Mail className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors" />
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p className="text-white font-medium group-hover:text-gray-300 transition-colors">
                  kevinraspo@gmail.com
                </p>
              </div>
              <ExternalLink className="w-5 h-5 text-gray-500 ml-auto group-hover:text-gray-300 transition-colors" />
            </div>
          </a>

          <div className="bg-black/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
            <div className="flex items-center gap-4">
              <Phone className="w-8 h-8 text-gray-400" />
              <div>
                <p className="text-gray-400 text-sm">Phone</p>
                <p className="text-white font-medium">
                  +34 630 27 40 66 (Spain)
                </p>
                <p className="text-white font-medium">
                  +39 348 190 0863 (Italy)
                </p>
              </div>
            </div>
          </div>

          <a 
            href="https://linkedin.com/in/kevinraspo/"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-black/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-gray-600 transition-all duration-500 hover:shadow-xl hover:shadow-gray-900/20"
          >
            <div className="flex items-center gap-4">
              <Linkedin className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors" />
              <div>
                <p className="text-gray-400 text-sm">LinkedIn</p>
                <p className="text-white font-medium group-hover:text-gray-300 transition-colors">
                  linkedin.com/in/kevinraspo/
                </p>
              </div>
              <ExternalLink className="w-5 h-5 text-gray-500 ml-auto group-hover:text-gray-300 transition-colors" />
            </div>
          </a>

          <div className="bg-black/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
            <div className="flex items-center gap-4">
              <MapPin className="w-8 h-8 text-gray-400" />
              <div>
                <p className="text-gray-400 text-sm">Location</p>
                <p className="text-white font-medium">Valencia, España</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400">
            © 2025 Kevin Raspo. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
