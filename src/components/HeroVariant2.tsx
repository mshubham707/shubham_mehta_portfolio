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
        
        {/* Creative Floating Highlights */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Achievement Badge - Top Right */}
          <div className="absolute top-8 right-8 pointer-events-auto">
            <div className="bg-gradient-to-br from-primary via-primary to-primary/80 text-white rounded-full w-16 h-16 flex flex-col items-center justify-center shadow-elegant animate-pulse hover-scale">
              <div className="text-sm font-bold">94%</div>
              <div className="text-xs">Accuracy</div>
            </div>
          </div>

          {/* Experience Pill - Top Left */}
          <div className="absolute top-6 left-6 pointer-events-auto">
            <div className="bg-gradient-to-r from-accent to-accent/80 text-white rounded-full px-3 py-2 shadow-elegant hover-scale">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="text-xs font-semibold">3+ Years</span>
              </div>
            </div>
          </div>

          {/* Industry Tag - Left Side */}
          <div className="absolute top-1/4 left-4 pointer-events-auto">
            <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-elegant border border-primary/20 hover-scale">
              <div className="flex items-center space-x-2">
                <span className="text-primary font-bold text-lg">✈</span>
                <span className="text-sm font-semibold text-gray-800">Aviation</span>
              </div>
            </div>
          </div>

          {/* Main Skills Card - Right Side */}
          <div className="absolute top-1/3 right-4 max-w-xs pointer-events-auto">
            <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-4 shadow-elegant border border-primary/30">
              <div className="flex items-center mb-3">
                <div className="w-6 h-6 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center mr-2">
                  <span className="text-white font-bold text-xs">⚡</span>
                </div>
                <h3 className="font-bold text-gray-800 text-sm">Data Expertise</h3>
              </div>
              
              {/* Skill Pills */}
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="bg-primary/20 text-primary px-2 py-1 rounded-full text-xs font-medium">ML</span>
                <span className="bg-accent/20 text-accent px-2 py-1 rounded-full text-xs font-medium">Python</span>
                <span className="bg-primary/20 text-primary px-2 py-1 rounded-full text-xs font-medium">BI</span>
                <span className="bg-accent/20 text-accent px-2 py-1 rounded-full text-xs font-medium">Analytics</span>
              </div>
              
              {/* Philosophy */}
              <div className="p-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border-l-2 border-primary">
                <p className="text-xs italic text-gray-700 leading-relaxed">
                  "Transform data into strategic decisions"
                </p>
              </div>
            </div>
          </div>

          {/* Impact Metrics - Bottom Right */}
          <div className="absolute bottom-20 right-6 pointer-events-auto">
            <div className="bg-gradient-to-br from-accent/90 to-primary/90 text-white rounded-2xl p-4 shadow-elegant hover-scale">
              <div className="flex items-center mb-2">
                <span className="text-lg mr-2">🎯</span>
                <span className="text-sm font-semibold">Impact</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-center">
                <div>
                  <div className="text-lg font-bold">15+</div>
                  <div className="text-xs opacity-80">Models</div>
                </div>
                <div>
                  <div className="text-lg font-bold">500K+</div>
                  <div className="text-xs opacity-80">Records</div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Tech Icons */}
          <div className="absolute bottom-1/4 left-8 pointer-events-auto">
            <div className="flex space-x-2">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-elegant hover-scale">
                <span className="text-white font-bold text-sm">🐍</span>
              </div>
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-elegant hover-scale">
                <span className="text-white font-bold text-sm">📊</span>
              </div>
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-elegant hover-scale">
                <span className="text-white font-bold text-sm">🤖</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroVariant2;