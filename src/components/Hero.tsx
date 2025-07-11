
import { MapPin, Mail, Phone, Linkedin, Globe } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Hero = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Language selector */}
        <div className="absolute top-6 right-6 z-10">
          <Select value={language} onValueChange={(value: 'en' | 'es') => setLanguage(value)}>
            <SelectTrigger className="w-[140px] bg-gray-900/50 border-gray-800 text-gray-300">
              <Globe className="w-4 h-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-gray-900 border-gray-800">
              <SelectItem value="en" className="text-gray-300 hover:bg-gray-800">English</SelectItem>
              <SelectItem value="es" className="text-gray-300 hover:bg-gray-800">Español</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Main content with photo integrated */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="relative inline-block mb-8">
            <div className="absolute -inset-1 bg-gradient-to-r from-gray-600 to-gray-400 rounded-full blur opacity-25 animate-pulse"></div>
            <img 
              src="/lovable-uploads/20210202_231843.jpg"
              alt="Kevin Raspo"
              className="relative w-48 h-48 md:w-56 md:h-56 object-cover rounded-full border-4 border-gray-700 shadow-2xl hover:scale-105 transition-transform duration-500 animate-[fade-in_1s_ease-out_0.2s_both]"
            />
          </div>
          
          <div className="space-y-4 animate-[fade-in_1s_ease-out_0.4s_both]">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight font-merriweather">
              {t('heroTitle')}
              <br />
              <span className="text-gray-400">{t('heroSubtitle')}</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light animate-[fade-in_1s_ease-out_0.6s_both] font-inter">
              {t('heroRole')}
            </p>
          </div>
        </div>

        {/* Contact information in cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 animate-[fade-in_1s_ease-out_0.8s_both]">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-4 hover:border-gray-600 transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-center gap-3 text-gray-400">
              <Phone className="w-5 h-5 flex-shrink-0" />
              <div className="text-sm text-center">
                <div>+34 630 27 40 66</div>
                <div>+39 348 190 0863</div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-4 hover:border-gray-600 transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-center gap-3 text-gray-400">
              <Mail className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm">kevinraspo@gmail.com</span>
            </div>
          </div>
          
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-4 hover:border-gray-600 transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-center gap-3 text-gray-400">
              <Linkedin className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm">linkedin.com/in/kevinraspo/</span>
            </div>
          </div>
          
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-4 hover:border-gray-600 transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-center gap-3 text-gray-400">
              <MapPin className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm">Valencia, Spain</span>
            </div>
          </div>
        </div>

        {/* Bio section */}
        <div className="max-w-4xl mx-auto text-center animate-[fade-in_1s_ease-out_1s_both]">
          <p className="text-lg text-gray-300 leading-relaxed font-inter">
            {t('heroBio')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
