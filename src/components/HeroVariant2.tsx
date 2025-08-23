import { Button } from "@/components/ui/button";
import { ArrowDown, Mail } from "lucide-react";
const profileImageUrl = "/lovable-uploads/a0650eff-04ef-4180-826d-f95213da3d31.png";

// VARIANT 2: Split Screen - Large Image on Right
const HeroVariant2 = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen grid lg:grid-cols-2 relative overflow-hidden">
      {/* Left Content */}
      <div className="flex items-center justify-center px-8 py-16 bg-gradient-to-br from-background to-background/80">
        <div className="max-w-lg">
          <div className="opacity-0 animate-fade-in-up">
            <h1 className="text-5xl lg:text-7xl font-bold text-heading mb-6 font-montserrat">
              Shubham<br />
              <span className="text-primary">Mehta</span>
            </h1>
            <p className="text-xl text-body font-medium mb-4 leading-relaxed">
              Data Analytics Professional
            </p>
            <p className="text-lg text-light mb-8 leading-relaxed">
              3 Years Aviation Industry Experience • Turning Data Into Strategic Impact
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                variant="hero" 
                size="xl"
                onClick={() => scrollToSection('projects')}
                className="group"
              >
                <span>View Portfolio</span>
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              
              <Button 
                variant="minimal" 
                size="xl"
                onClick={() => scrollToSection('contact')}
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative bg-gradient-to-bl from-primary/20 to-background">
        <img
          src={profileImageUrl}
          alt="Shubham Mehta"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-primary/10 to-primary/30"></div>
        
        {/* Floating badge */}
        <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">3+</div>
            <div className="text-xs text-gray-600">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroVariant2;