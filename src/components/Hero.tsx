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
      {/* VARIANT 1: Large Background Portrait with Overlay */}
      <div className="absolute inset-0">
        <img
          src={profileImageUrl}
          alt="Shubham Mehta Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/95"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left opacity-0 animate-fade-in-up">
            {/* Large Profile Image */}
            <div className="mb-8">
              <div className="relative inline-block">
                <img
                  src={profileImageUrl}
                  alt="Shubham Mehta"
                  className="w-48 h-48 md:w-56 md:h-56 rounded-2xl object-cover shadow-elegant border-4 border-primary/20 backdrop-blur-sm"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent"></div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">SM</span>
                </div>
              </div>
            </div>

            {/* Name and Title */}
            <div className="mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-heading mb-4 font-montserrat">
                Shubham Mehta
              </h1>
              <p className="text-lg md:text-xl text-body font-medium leading-relaxed">
                Data Analytics Professional | 3 Years Aviation Industry Experience
              </p>
            </div>

            {/* Description */}
            <div className="mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <p className="text-base text-light leading-relaxed">
                I transform complex datasets into actionable business strategies, specializing in aviation analytics 
                with a proven track record of driving operational optimization and strategic decision-making.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
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
          </div>

          {/* Right Side - Stats or Visual Element */}
          <div className="hidden lg:block opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-heading mb-2">3+</div>
                  <div className="text-sm text-light">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-heading mb-2">50+</div>
                  <div className="text-sm text-light">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-heading mb-2">100%</div>
                  <div className="text-sm text-light">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-heading mb-2">24/7</div>
                  <div className="text-sm text-light">Data Analysis</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in-up" style={{ animationDelay: '1s' }}>
        <div className="flex flex-col items-center text-white/80">
          <span className="text-sm mb-2">Scroll to explore</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;