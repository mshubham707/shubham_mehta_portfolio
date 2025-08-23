import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";
const profileImageUrl = "/lovable-uploads/a0650eff-04ef-4180-826d-f95213da3d31.png";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-subtle"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Profile Image */}
        <div className="mb-8 opacity-0 animate-fade-in-up">
          <div className="relative inline-block">
            <img
              src={profileImageUrl}
              alt="Shubham Mehta"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-elegant border-4 border-primary-light mx-auto"
            />
            <div className="absolute inset-0 rounded-full bg-primary opacity-10"></div>
          </div>
        </div>

        {/* Name and Title */}
        <div className="mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-4xl md:text-6xl font-bold text-heading mb-4 font-montserrat">
            Shubham Mehta
          </h1>
          <p className="text-xl md:text-2xl text-body font-medium max-w-3xl mx-auto leading-relaxed">
            Data Analytics Professional | 3 Years Aviation Industry Experience | Turning Data Into Strategic Impact
          </p>
        </div>

        {/* Description */}
        <div className="mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-lg text-light max-w-2xl mx-auto leading-relaxed">
            I transform complex datasets into actionable business strategies, specializing in aviation analytics 
            with a proven track record of driving operational optimization and strategic decision-making.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Button 
            variant="hero" 
            size="xl"
            onClick={() => scrollToSection('projects')}
            className="group"
          >
            <span>View My Work</span>
            <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </Button>
          
          <Button 
            variant="minimal" 
            size="xl"
            onClick={() => scrollToSection('contact')}
          >
            <Mail className="mr-2 h-4 w-4" />
            Get in Touch
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="flex flex-col items-center text-light">
            <span className="text-sm mb-2">Scroll to explore</span>
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;