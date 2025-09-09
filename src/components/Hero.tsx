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
            {/* Enhanced Profile Image with Creative Border */}
            <div className="mb-8">
              <div className="relative inline-block">
                {/* Animated Background Rings */}
                <div className="absolute inset-0 rounded-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl animate-pulse"></div>
                  <div className="absolute -inset-2 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute -inset-4 bg-gradient-to-bl from-primary/10 to-accent/10 rounded-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
                
                {/* Main Image Container */}
                <div className="relative z-10 p-2 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl backdrop-blur-sm border border-white/30">
                  <img
                    src={profileImageUrl}
                    alt="Shubham Mehta"
                    className="w-48 h-48 md:w-56 md:h-56 rounded-xl object-cover shadow-elegant relative z-10"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-2 rounded-xl bg-gradient-to-t from-primary/20 via-transparent to-transparent pointer-events-none"></div>
                </div>

                {/* Floating Professional Badge */}
                <div className="absolute -bottom-2 -right-2 z-20">
                  <div className="bg-gradient-to-r from-primary to-accent rounded-full p-3 shadow-elegant border-2 border-white">
                    <div className="text-center">
                      <div className="text-white font-bold text-xs">DATA</div>
                      <div className="text-white font-bold text-xs">EXPERT</div>
                    </div>
                  </div>
                </div>

                {/* Floating Skill Icons */}
                <div className="absolute -top-4 -left-4 z-20">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-elegant border border-primary/20 hover-scale">
                    <span className="text-primary font-bold text-lg">🐍</span>
                  </div>
                </div>
                
                <div className="absolute top-1/2 -right-6 z-20">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-elegant border border-accent/20 hover-scale">
                    <span className="text-accent font-bold text-lg">📊</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 left-8 z-20">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-elegant border border-primary/20 hover-scale">
                    <span className="text-primary font-bold text-lg">🤖</span>
                  </div>
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

          {/* Right Side - Enhanced Profile Showcase */}
          <div className="hidden lg:block opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="space-y-4">
              {/* Floating Achievement Badges */}
              <div className="relative">
                {/* Primary Achievement - Top Right */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-primary via-primary to-primary/80 text-white rounded-full w-20 h-20 flex flex-col items-center justify-center shadow-elegant animate-pulse">
                  <div className="text-lg font-bold">94%</div>
                  <div className="text-xs font-medium">ML Accuracy</div>
                </div>

                {/* Experience Badge - Top Left */}
                <div className="absolute -top-2 -left-8 bg-gradient-to-r from-accent to-accent/80 text-white rounded-full px-4 py-2 shadow-elegant hover-scale">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold">3+ Years Aviation</span>
                  </div>
                </div>
              </div>

              {/* Creative Skills Showcase */}
              <div className="bg-gradient-to-br from-white/95 to-white/80 backdrop-blur-lg rounded-3xl p-6 border border-primary/20 shadow-elegant">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">⚡</span>
                  </div>
                  <h3 className="font-bold text-heading text-lg">Data Mastery</h3>
                </div>
                
                {/* Skills Grid with Progress Indicators */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
                      <span className="text-sm font-medium text-heading">Machine Learning</span>
                    </div>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <div className="w-2 h-2 bg-primary/30 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-accent rounded-full mr-2"></div>
                      <span className="text-sm font-medium text-heading">Data Engineering</span>
                    </div>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
                      <span className="text-sm font-medium text-heading">Analytics & BI</span>
                    </div>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <div className="w-2 h-2 bg-primary/30 rounded-full"></div>
                    </div>
                  </div>
                </div>
                
                {/* Philosophy Quote */}
                <div className="mt-4 p-3 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl border-l-4 border-primary">
                  <p className="text-xs italic text-light leading-relaxed">
                    "Every dataset tells a story - I extract insights that drive business growth"
                  </p>
                </div>
              </div>

              {/* Impact Metrics Card */}
              <div className="bg-gradient-to-br from-accent/20 via-primary/10 to-accent/20 backdrop-blur-sm rounded-3xl p-6 border border-accent/30 shadow-elegant">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">🎯</span>
                  </div>
                  <h3 className="font-bold text-heading text-lg">Key Impact</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="text-center p-3 bg-white/20 rounded-xl">
                    <div className="text-xl font-bold text-primary">15+</div>
                    <div className="text-xs text-light">ML Models</div>
                  </div>
                  <div className="text-center p-3 bg-white/20 rounded-xl">
                    <div className="text-xl font-bold text-accent">500K+</div>
                    <div className="text-xs text-light">Data Points</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mr-2">
                      <span className="text-primary font-bold text-xs">✓</span>
                    </div>
                    <span className="text-heading font-medium">Disease Prediction Platform</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center mr-2">
                      <span className="text-accent font-bold text-xs">✓</span>
                    </div>
                    <span className="text-heading font-medium">Aviation Revenue Analytics</span>
                  </div>
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