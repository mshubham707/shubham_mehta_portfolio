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
        {/* Creative Hexagonal Profile Image */}
        <div className="mb-12 opacity-0 animate-fade-in-up">
          <div className="relative inline-block">
            {/* Outer Animated Ring */}
            <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-primary via-accent to-primary animate-spin" style={{ animationDuration: '8s' }}></div>
            <div className="absolute -inset-6 rounded-full bg-background"></div>
            
            {/* Middle Ring with Pulsing Effect */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 animate-pulse"></div>
            <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-white/20 to-white/10 backdrop-blur-sm border border-white/40"></div>
            
            {/* Main Image Container */}
            <div className="relative w-80 h-80 md:w-96 md:h-96 p-6 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-full">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/50 shadow-elegant">
                <img
                  src={profileImageUrl}
                  alt="Shubham Mehta"
                  className="w-full h-full object-cover"
                />
                {/* Inner Gradient Overlay */}
                <div className="absolute inset-6 rounded-full bg-gradient-to-t from-primary/20 via-transparent to-transparent pointer-events-none"></div>
              </div>
              
              {/* Central Professional Badge */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
                <div className="bg-gradient-to-r from-primary to-accent rounded-full px-6 py-2 shadow-elegant border-2 border-white">
                  <div className="text-center">
                    <div className="text-white font-bold text-sm">DATA ANALYTICS</div>
                    <div className="text-white/90 text-xs">PROFESSIONAL</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Achievement Bubbles */}
            <div className="absolute -top-4 -left-12 z-20">
              <div className="bg-white/95 backdrop-blur-sm rounded-full p-4 shadow-elegant border border-primary/30 hover-scale animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3s' }}>
                <div className="text-center">
                  <div className="text-primary font-bold text-lg">94%</div>
                  <div className="text-primary text-xs">Accuracy</div>
                </div>
              </div>
            </div>
            
            <div className="absolute top-8 -right-16 z-20">
              <div className="bg-white/95 backdrop-blur-sm rounded-full p-4 shadow-elegant border border-accent/30 hover-scale animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }}>
                <div className="text-center">
                  <div className="text-accent font-bold text-lg">3+</div>
                  <div className="text-accent text-xs">Years</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -right-8 z-20">
              <div className="bg-gradient-to-br from-primary/90 to-accent/90 text-white rounded-full p-4 shadow-elegant hover-scale animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '3s' }}>
                <div className="text-center">
                  <div className="font-bold text-lg">✈️</div>
                  <div className="text-xs">Aviation</div>
                </div>
              </div>
            </div>

            {/* Floating Tech Icons */}
            <div className="absolute top-1/3 -left-20 z-20">
              <div className="flex flex-col space-y-3">
                <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-elegant border border-primary/20 hover-scale">
                  <span className="text-primary text-xl">🐍</span>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-elegant border border-accent/20 hover-scale">
                  <span className="text-accent text-xl">📊</span>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-elegant border border-primary/20 hover-scale">
                  <span className="text-primary text-xl">🤖</span>
                </div>
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