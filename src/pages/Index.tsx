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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ColorSchemeSwitcher />
      {/* Switch between these hero variants: */}
      {/* <Hero /> */}
      {/* <HeroVariant2 /> */}
      <HeroVariant3 />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Footer />
    </div>
  );
};

export default Index;
