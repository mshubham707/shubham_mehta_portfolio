import Hero from "@/components/Hero";
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
      <Hero />
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
