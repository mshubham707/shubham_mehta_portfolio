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
        
        {/* Enhanced Floating Cards */}
        <div className="absolute top-6 right-6 space-y-4 max-w-xs">
          {/* Philosophy Card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-elegant border border-primary/20">
            <div className="flex items-center mb-3">
              <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
              <div className="font-bold text-primary text-sm">Philosophy</div>
            </div>
            <p className="text-xs text-gray-700 italic leading-relaxed">
              "Transform data into strategic decisions that drive meaningful impact"
            </p>
          </div>

          {/* Skills Snapshot */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-elegant border border-accent/20">
            <div className="flex items-center mb-3">
              <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
              <div className="font-bold text-accent text-sm">Expertise</div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-primary/10 rounded-lg p-2">
                <div className="text-xs font-medium text-primary">ML & AI</div>
              </div>
              <div className="bg-accent/10 rounded-lg p-2">
                <div className="text-xs font-medium text-accent">Analytics</div>
              </div>
              <div className="bg-primary/10 rounded-lg p-2">
                <div className="text-xs font-medium text-primary">Visualization</div>
              </div>
              <div className="bg-accent/10 rounded-lg p-2">
                <div className="text-xs font-medium text-accent">Web Dev</div>
              </div>
            </div>
          </div>

          {/* Impact Highlights */}
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-sm rounded-2xl p-4 shadow-elegant border border-primary/20">
            <div className="flex items-center mb-3">
              <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full mr-2"></div>
              <div className="font-bold text-gray-800 text-sm">Key Impact</div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center text-xs">
                <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                <span className="text-gray-700">Disease Prediction System</span>
              </div>
              <div className="flex items-center text-xs">
                <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                <span className="text-gray-700">Waste Management Analytics</span>
              </div>
              <div className="flex items-center text-xs">
                <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                <span className="text-gray-700">Aviation Industry Solutions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroVariant2;