
import { MapPin, Mail, Phone, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              KEVIN
              <br />
              <span className="text-gray-400">RASPO</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light">
              Project & Research Specialist | Strategy & Operations
            </p>
          </div>
          
          <div className="space-y-3 text-gray-400">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5" />
              <span>+34 630 27 40 66 / +39 348 190 0863</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5" />
              <span>kevinraspo@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Linkedin className="w-5 h-5" />
              <span>linkedin.com/in/kevinraspo/</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5" />
              <span>Valencia, España</span>
            </div>
          </div>

          <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
            I am Kevin, a political scientist who loves making sense of complex systems and finding ways to improve them. 
            Whether it is evaluating policies, exploring data, or helping organizations rethink their strategies, I am always 
            looking for ways to make processes smoother and decisions smarter.
          </p>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-gray-600 to-gray-400 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <img 
              src="/lovable-uploads/9ade0156-4397-4098-a4e0-9db90178c4d8.png"
              alt="Kevin Raspo"
              className="relative w-80 h-80 md:w-96 md:h-96 object-cover rounded-full border-4 border-gray-700 shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
