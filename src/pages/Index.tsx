
import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Articles from "../components/Articles";
import Contact from "../components/Contact";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen bg-black text-white transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Hero />
      <Experience />
      <Skills />
      <Education />
      <Articles />
      <Contact />
    </div>
  );
};

export default Index;
