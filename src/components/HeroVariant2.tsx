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
          {/* Data Philosophy Card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-elegant border border-primary/20">
            <div className="flex items-center mb-3">
              <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
              <div className="font-bold text-primary text-sm">Data Philosophy</div>
            </div>
            <p className="text-xs text-gray-700 italic leading-relaxed mb-2">
              "Every dataset tells a story - my job is to extract actionable insights that drive business growth"
            </p>
            <div className="text-xs text-gray-600">
              Evidence-based • Strategic • Impactful
            </div>
          </div>

          {/* Advanced Skills Card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-elegant border border-accent/20">
            <div className="flex items-center mb-3">
              <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
              <div className="font-bold text-accent text-sm">Data Science Stack</div>
            </div>
            <div className="space-y-2">
              <div className="bg-primary/15 rounded-lg p-2">
                <div className="text-xs font-medium text-primary mb-1">ML Engineering</div>
                <div className="text-xs text-gray-600">XGBoost • Neural Networks • Ensemble Methods</div>
              </div>
              <div className="bg-accent/15 rounded-lg p-2">
                <div className="text-xs font-medium text-accent mb-1">Data Pipeline</div>
                <div className="text-xs text-gray-600">Python • Pandas • SQL • ETL</div>
              </div>
              <div className="bg-primary/15 rounded-lg p-2">
                <div className="text-xs font-medium text-primary mb-1">Business Intelligence</div>
                <div className="text-xs text-gray-600">Power BI • Tableau • KPI Design</div>
              </div>
            </div>
          </div>

          {/* Achievements Highlights */}
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-sm rounded-2xl p-4 shadow-elegant border border-primary/20">
            <div className="flex items-center mb-3">
              <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full mr-2"></div>
              <div className="font-bold text-gray-800 text-sm">Key Achievements</div>
            </div>
            <div className="space-y-2">
              <div className="flex items-start text-xs">
                <div className="w-1 h-1 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                <div>
                  <span className="text-gray-800 font-medium">94% ML Accuracy</span>
                  <div className="text-gray-600">Disease prediction model</div>
                </div>
              </div>
              <div className="flex items-start text-xs">
                <div className="w-1 h-1 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                <div>
                  <span className="text-gray-800 font-medium">Aviation Analytics</span>
                  <div className="text-gray-600">3+ years revenue optimization</div>
                </div>
              </div>
              <div className="flex items-start text-xs">
                <div className="w-1 h-1 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                <div>
                  <span className="text-gray-800 font-medium">Full-Stack Data</span>
                  <div className="text-gray-600">Collection to deployment</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroVariant2;