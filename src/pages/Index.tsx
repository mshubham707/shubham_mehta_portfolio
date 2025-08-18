import ColorSchemeSwitcher from "@/components/ColorSchemeSwitcher";
import ParticleBackground from "@/components/ParticleBackground";
import CustomCursor from "@/components/CustomCursor";
import MorphingHero from "@/components/MorphingHero";
import ConstellationLayout from "@/components/ConstellationLayout";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Background Effects */}
      <ParticleBackground />
      
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Color Scheme Switcher */}
      <ColorSchemeSwitcher />
      
      {/* Main Content */}
      <MorphingHero />
      <ConstellationLayout />
      <ContactSection />
    </div>
  );
};

export default Index;
