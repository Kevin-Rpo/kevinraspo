
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Hero
    heroTitle: "KEVIN",
    heroSubtitle: "RASPO",
    heroRole: "Project & Research Specialist | Strategy & Operations",
    heroBio: "I am Kevin, a political scientist who loves making sense of complex systems and finding ways to improve them. Whether it is evaluating policies, exploring data, or helping organizations rethink their strategies, I am always looking for ways to make processes smoother and decisions smarter.",
    
    // Experience
    experienceTitle: "Professional",
    experienceSubtitle: "Experience",
    quote: "Institutional success begins with the courage to ask questions we may not yet have answers to.",
    
    // Skills
    skillsTitle: "Skills &",
    skillsSubtitle: "Tools",
    skillsSection: "SKILLS",
    toolsSection: "TOOLS",
    languagesSection: "LANGUAGES",
    
    // Languages
    spanish: "SPANISH",
    english: "ENGLISH", 
    french: "FRENCH",
    italian: "ITALIAN",
    german: "GERMAN",
    native: "Native",
    c1: "C1",
    b2: "B2", 
    b1: "B1",
    a1: "A1",
    
    // Education
    educationTitle: "Academic",
    educationSubtitle: "Background",
    
    // Articles
    articlesTitle: "Ideas, Reflections &",
    articlesSubtitle: "Articles",
    
    // Contact
    contactTitle: "Let's",
    contactSubtitle: "Connect",
    contactBio: "I thrive in dynamic environments where different perspectives come together to create real impact. I've worked in public administration, consulting, and political content creation—often covering international affairs and social systems. Languages, cultures, and emerging technologies (including AI) inspire me, especially when they help connect ideas and people. I am fluent in Spanish and English, conversational in French and Italian, and always up for a challenge."
  },
  es: {
    // Hero
    heroTitle: "KEVIN",
    heroSubtitle: "RASPO", 
    heroRole: "Especialista en Proyectos e Investigación | Estrategia y Operaciones",
    heroBio: "Soy Kevin, un politólogo que disfruta dando sentido a sistemas complejos y encontrando formas de mejorarlos. Ya sea evaluando políticas, explorando datos, o ayudando a organizaciones a repensar sus estrategias, siempre estoy buscando maneras de hacer los procesos más fluidos y las decisiones más inteligentes.",
    
    // Experience
    experienceTitle: "Experiencia",
    experienceSubtitle: "Profesional",
    quote: "El éxito institucional comienza con el coraje de hacer preguntas para las que aún no tenemos respuestas.",
    
    // Skills
    skillsTitle: "Habilidades y",
    skillsSubtitle: "Herramientas",
    skillsSection: "HABILIDADES",
    toolsSection: "HERRAMIENTAS",
    languagesSection: "IDIOMAS",
    
    // Languages
    spanish: "ESPAÑOL",
    english: "INGLÉS",
    french: "FRANCÉS", 
    italian: "ITALIANO",
    german: "ALEMÁN",
    native: "Nativo",
    c1: "C1",
    b2: "B2",
    b1: "B1", 
    a1: "A1",
    
    // Education
    educationTitle: "Formación",
    educationSubtitle: "Académica",
    
    // Articles
    articlesTitle: "Ideas, Reflexiones y",
    articlesSubtitle: "Artículos",
    
    // Contact
    contactTitle: "Conectemos",
    contactSubtitle: "",
    contactBio: "Prospero en entornos dinámicos donde diferentes perspectivas se unen para crear un impacto real. He trabajado en administración pública, consultoría y creación de contenido político, a menudo cubriendo asuntos internacionales y sistemas sociales. Los idiomas, las culturas y las tecnologías emergentes (incluida la IA) me inspiran, especialmente cuando ayudan a conectar ideas y personas. Domino el español e inglés, tengo nivel conversacional en francés e italiano, y siempre estoy dispuesto a un desafío."
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');
  
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
