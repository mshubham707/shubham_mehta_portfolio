import { useState } from "react";
import ColorSchemeSwitcher from "@/components/ColorSchemeSwitcher";
import TemplateSelector, { TemplateType } from "@/components/TemplateSelector";
import ParticleBackground from "@/components/ParticleBackground";
import CustomCursor from "@/components/CustomCursor";
import MorphingHero from "@/components/MorphingHero";
import ConstellationLayout from "@/components/ConstellationLayout";
import ContactSection from "@/components/ContactSection";
import HolographicTemplate from "@/templates/HolographicTemplate";
import LiquidTemplate from "@/templates/LiquidTemplate";
import ZenTemplate from "@/templates/ZenTemplate";
import SynthwaveTemplate from "@/templates/SynthwaveTemplate";

const Index = () => {
  const [currentTemplate, setCurrentTemplate] = useState<TemplateType>('constellation');

  const renderTemplate = () => {
    switch (currentTemplate) {
      case 'holographic':
        return <HolographicTemplate />;
      case 'liquid':
        return <LiquidTemplate />;
      case 'zen':
        return <ZenTemplate />;
      case 'synthwave':
        return <SynthwaveTemplate />;
      default:
        return (
          <div className="min-h-screen bg-background relative overflow-x-hidden">
            {/* Background Effects */}
            <ParticleBackground />
            
            {/* Custom Cursor */}
            <CustomCursor />
            
            {/* Main Content */}
            <MorphingHero />
            <ConstellationLayout />
            <ContactSection />
          </div>
        );
    }
  };

  return (
    <>
      {/* Template Selector */}
      <TemplateSelector 
        currentTemplate={currentTemplate} 
        onTemplateChange={setCurrentTemplate} 
      />
      
      {/* Color Scheme Switcher - only show for constellation template */}
      {currentTemplate === 'constellation' && <ColorSchemeSwitcher />}
      
      {/* Render Selected Template */}
      {renderTemplate()}
    </>
  );
};

export default Index;
