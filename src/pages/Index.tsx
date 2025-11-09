import { useState } from "react";
import Hero from "@/components/Hero";
import HeroVariant2 from "@/components/HeroVariant2";
import HeroVariant3 from "@/components/HeroVariant3";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import ColorSchemeSwitcher from "@/components/ColorSchemeSwitcher";
import TemplateSwitcher from "@/components/TemplateSwitcher";

// Neumorphic components
import HeroNeumorph from "@/components/HeroNeumorph";
import AboutNeumorph from "@/components/AboutNeumorph";
import ExperienceNeumorph from "@/components/ExperienceNeumorph";
import ProjectsNeumorph from "@/components/ProjectsNeumorph";
import SkillsNeumorph from "@/components/SkillsNeumorph";
import EducationNeumorph from "@/components/EducationNeumorph";
import FooterNeumorph from "@/components/FooterNeumorph";

type Template = 'default' | 'neumorph';

const Index = () => {
  const [currentTemplate, setCurrentTemplate] = useState<Template>('default');

  const handleTemplateChange = (template: Template) => {
    setCurrentTemplate(template);
  };

  return (
    <div className="min-h-screen bg-background">
      <TemplateSwitcher onTemplateChange={handleTemplateChange} />
      {currentTemplate === 'default' && <ColorSchemeSwitcher />}
      
      {currentTemplate === 'default' ? (
        <>
          {/* Default Template */}
          <HeroVariant3 />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Footer />
        </>
      ) : (
        <>
          {/* Neumorphic Template */}
          <HeroNeumorph />
          <AboutNeumorph />
          <ExperienceNeumorph />
          <ProjectsNeumorph />
          <SkillsNeumorph />
          <EducationNeumorph />
          <FooterNeumorph />
        </>
      )}
    </div>
  );
};

export default Index;
