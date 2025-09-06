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

          {/* Right Side - Enhanced Profile Showcase */}
          <div className="hidden lg:block opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="space-y-4">
              {/* Philosophy Card */}
              <div className="bg-gradient-to-br from-primary/20 to-primary/10 backdrop-blur-sm rounded-2xl p-6 border border-primary/30 shadow-elegant">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-primary rounded-full mr-3"></div>
                  <h3 className="font-bold text-heading text-lg">Philosophy</h3>
                </div>
                <p className="text-sm text-light italic leading-relaxed">
                  "Every decision should be backed by data, every problem can be solved with the right algorithm"
                </p>
              </div>

              {/* Skills Card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-elegant">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-accent rounded-full mr-3"></div>
                  <h3 className="font-bold text-heading text-lg">Core Skills</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-primary/20 rounded-lg p-3">
                    <div className="text-xs font-semibold text-primary mb-1">ML & AI</div>
                    <div className="text-xs text-light">Python, XGBoost, Scikit-Learn</div>
                  </div>
                  <div className="bg-accent/20 rounded-lg p-3">
                    <div className="text-xs font-semibold text-accent mb-1">Analytics</div>
                    <div className="text-xs text-light">Pandas, NumPy, Statistical Modeling</div>
                  </div>
                  <div className="bg-primary/20 rounded-lg p-3">
                    <div className="text-xs font-semibold text-primary mb-1">Visualization</div>
                    <div className="text-xs text-light">Power BI, Tableau, Plotly</div>
                  </div>
                  <div className="bg-accent/20 rounded-lg p-3">
                    <div className="text-xs font-semibold text-accent mb-1">Web Dev</div>
                    <div className="text-xs text-light">Flask, React, JavaScript</div>
                  </div>
                </div>
              </div>

              {/* Key Work Highlights */}
              <div className="bg-gradient-to-br from-accent/20 to-accent/10 backdrop-blur-sm rounded-2xl p-6 border border-accent/30 shadow-elegant">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-accent rounded-full mr-3"></div>
                  <h3 className="font-bold text-heading text-lg">Key Projects</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                    <div>
                      <div className="text-sm font-medium text-heading">Disease Prediction System</div>
                      <div className="text-xs text-light">ML-powered diagnostic tool with ensemble methods</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                    <div>
                      <div className="text-sm font-medium text-heading">Waste Management Analytics</div>
                      <div className="text-xs text-light">Predictive modeling for environmental impact</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                    <div>
                      <div className="text-sm font-medium text-heading">Aviation Revenue Optimization</div>
                      <div className="text-xs text-light">Advanced analytics driving operational efficiency</div>
                    </div>
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