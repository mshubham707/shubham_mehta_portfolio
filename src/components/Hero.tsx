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
            {/* Enhanced Profile Image with Modern Effects */}
            <div className="mb-8">
              <div className="relative inline-block group">
                {/* Animated Background Rings */}
                <div className="absolute inset-0 rounded-2xl">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/20 animate-pulse"></div>
                  <div className="absolute inset-[-8px] rounded-2xl border-2 border-primary/20 animate-spin" style={{ animationDuration: '8s' }}></div>
                  <div className="absolute inset-[-16px] rounded-2xl border border-accent/10 animate-spin" style={{ animationDuration: '12s', animationDirection: 'reverse' }}></div>
                </div>
                
                {/* Floating Data Points */}
                <div className="absolute -top-4 -left-4 w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                <div className="absolute -top-2 -right-6 w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute -bottom-6 -left-2 w-4 h-4 bg-primary/70 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
                
                {/* Main Image */}
                <img
                  src={profileImageUrl}
                  alt="Shubham Mehta"
                  className="relative z-10 w-48 h-48 md:w-56 md:h-56 rounded-2xl object-cover shadow-elegant border-4 border-background/50 backdrop-blur-sm group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/40 via-transparent to-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Modern Badge with Tech Icons */}
                <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-500">
                  <div className="text-center">
                    <div className="text-white font-bold text-xs">DATA</div>
                    <div className="text-white/90 font-semibold text-lg">SM</div>
                  </div>
                </div>
                
                {/* Floating Skill Indicators */}
                <div className="absolute -top-8 right-4 bg-primary/90 text-white px-3 py-1 rounded-full text-xs font-semibold animate-float">
                  Python
                </div>
                <div className="absolute bottom-4 -left-8 bg-accent/90 text-white px-3 py-1 rounded-full text-xs font-semibold animate-float" style={{ animationDelay: '1s' }}>
                  ML
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
              {/* Data Philosophy Card */}
              <div className="bg-gradient-to-br from-primary/20 to-primary/10 backdrop-blur-sm rounded-2xl p-6 border border-primary/30 shadow-elegant">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-primary rounded-full mr-3"></div>
                  <h3 className="font-bold text-heading text-lg">Data Philosophy</h3>
                </div>
                <p className="text-sm text-light italic leading-relaxed mb-3">
                  "Transform complex datasets into strategic business intelligence that drives measurable outcomes"
                </p>
                <div className="text-xs text-light/80">
                  Believer in evidence-based decision making and the power of predictive analytics
                </div>
              </div>

              {/* Technical Expertise Card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-elegant">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-accent rounded-full mr-3"></div>
                  <h3 className="font-bold text-heading text-lg">Data Expertise</h3>
                </div>
                <div className="space-y-3">
                  <div className="bg-primary/20 rounded-lg p-3">
                    <div className="text-xs font-semibold text-primary mb-1">Machine Learning</div>
                    <div className="text-xs text-light">XGBoost, Random Forest, Neural Networks, Ensemble Methods</div>
                  </div>
                  <div className="bg-accent/20 rounded-lg p-3">
                    <div className="text-xs font-semibold text-accent mb-1">Data Engineering</div>
                    <div className="text-xs text-light">Python, Pandas, NumPy, SQL, ETL Pipelines</div>
                  </div>
                  <div className="bg-primary/20 rounded-lg p-3">
                    <div className="text-xs font-semibold text-primary mb-1">Analytics & BI</div>
                    <div className="text-xs text-light">Power BI, Tableau, Statistical Analysis, KPI Design</div>
                  </div>
                </div>
              </div>

              {/* Key Achievements Card */}
              <div className="bg-gradient-to-br from-accent/20 to-accent/10 backdrop-blur-sm rounded-2xl p-6 border border-accent/30 shadow-elegant">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-accent rounded-full mr-3"></div>
                  <h3 className="font-bold text-heading text-lg">Data Impact</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                    <div>
                      <div className="text-sm font-medium text-heading">94% Accuracy Disease Prediction</div>
                      <div className="text-xs text-light">Ensemble ML model for multiple disease classification</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                    <div>
                      <div className="text-sm font-medium text-heading">Revenue Analytics at Scale</div>
                      <div className="text-xs text-light">3+ years optimizing aviation industry operations</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                    <div>
                      <div className="text-sm font-medium text-heading">End-to-End Data Solutions</div>
                      <div className="text-xs text-light">From data collection to deployment & monitoring</div>
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