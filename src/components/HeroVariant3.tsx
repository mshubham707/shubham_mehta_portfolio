import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, MapPin, Calendar } from "lucide-react";
const profileImageUrl = "/lovable-uploads/a0650eff-04ef-4180-826d-f95213da3d31.png";

// VARIANT 3: Central Focus - Huge Circular Image
const HeroVariant3 = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-subtle"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[length:30px_30px] opacity-30"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Huge Profile Image */}
        <div className="mb-12 opacity-0 animate-fade-in-up">
          <div className="relative inline-block">
            <div className="w-80 h-80 md:w-96 md:h-96 rounded-full p-4 bg-gradient-to-br from-primary/20 via-transparent to-primary/20 backdrop-blur-sm border border-primary/20">
              <img
                src={profileImageUrl}
                alt="Shubham Mehta"
                className="w-full h-full rounded-full object-cover shadow-elegant"
              />
            </div>
            
            {/* Floating info cards */}
            <div className="absolute -left-8 top-1/4 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg animate-bounce" style={{ animationDelay: '2s', animationDuration: '3s' }}>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold">3+ Years</span>
              </div>
            </div>
            
            <div className="absolute -right-8 top-1/3 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg animate-bounce" style={{ animationDelay: '2.5s', animationDuration: '3s' }}>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold">Aviation</span>
              </div>
            </div>
          </div>
        </div>

        {/* Name and Title */}
        <div className="mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <h1 className="text-5xl md:text-7xl font-bold text-heading mb-6 font-montserrat">
            Shubham Mehta
          </h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-2xl md:text-3xl text-primary font-semibold mb-4">
              Data Analytics Professional
            </p>
            <p className="text-lg text-body leading-relaxed">
              Transforming complex aviation datasets into strategic business insights with 3 years of industry expertise
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Button 
            variant="hero" 
            size="xl"
            onClick={() => scrollToSection('projects')}
            className="group px-8 py-4"
          >
            <span>Explore My Work</span>
            <ArrowDown className="ml-3 h-5 w-5 group-hover:translate-y-1 transition-transform" />
          </Button>
          
          <Button 
            variant="minimal" 
            size="xl"
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4"
          >
            <Mail className="mr-3 h-5 w-5" />
            Let's Connect
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <div className="flex flex-col items-center text-light">
            <span className="text-sm mb-2">Discover more</span>
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroVariant3;