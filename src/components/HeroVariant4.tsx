import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowDown, Mail, Download, TrendingUp, Award, Briefcase, Code } from "lucide-react";
const profileImageUrl = "/lovable-uploads/a0650eff-04ef-4180-826d-f95213da3d31.png";

// VARIANT 4: Professional Impact-Focused Design
const HeroVariant4 = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16 relative overflow-hidden">
      {/* Professional Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5"></div>
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_49%,rgba(var(--primary-rgb),0.03)_50%,transparent_51%)] bg-[length:20px_20px]"></div>
      
      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Header Section */}
            <div className="space-y-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                <div className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-medium text-primary">Available for New Opportunities</span>
              </div>
              
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-heading mb-4 font-montserrat leading-tight">
                  Shubham Mehta
                </h1>
                <div className="space-y-2">
                  <h2 className="text-xl md:text-2xl font-semibold text-primary">
                    Data Analytics & Machine Learning Professional
                  </h2>
                  <p className="text-base text-muted-foreground">
                    Aviation Industry | Revenue Management | Predictive Modeling
                  </p>
                </div>
              </div>
              
              <p className="text-lg text-body leading-relaxed max-w-2xl">
                Transforming complex datasets into actionable insights, with <span className="font-semibold text-heading">3+ years</span> of experience 
                driving revenue growth and operational efficiency in the aviation industry.
              </p>
            </div>

            {/* Key Achievements Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Card className="p-4 text-center hover:shadow-md transition-all duration-300 hover-scale">
                <TrendingUp className="h-6 w-6 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-heading">15%</div>
                <div className="text-xs text-muted-foreground">Revenue Growth</div>
              </Card>
              
              <Card className="p-4 text-center hover:shadow-md transition-all duration-300 hover-scale">
                <Code className="h-6 w-6 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-heading">5+</div>
                <div className="text-xs text-muted-foreground">ML Projects</div>
              </Card>
              
              <Card className="p-4 text-center hover:shadow-md transition-all duration-300 hover-scale">
                <Briefcase className="h-6 w-6 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-heading">30%</div>
                <div className="text-xs text-muted-foreground">Process Efficiency</div>
              </Card>
              
              <Card className="p-4 text-center hover:shadow-md transition-all duration-300 hover-scale">
                <Award className="h-6 w-6 text-accent mx-auto mb-2" />
                <div className="text-xl font-bold text-heading">Award</div>
                <div className="text-xs text-muted-foreground">Winner</div>
              </Card>
            </div>

            {/* Professional Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <Button 
                variant="default" 
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="group px-6 py-3 bg-primary hover:bg-primary/90"
              >
                <span>View Portfolio</span>
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3"
              >
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
              
              <Button 
                variant="ghost" 
                size="lg"
                className="px-6 py-3"
              >
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Button>
            </div>

            {/* Skills Pills */}
            <div className="flex flex-wrap gap-3 opacity-0 animate-fade-in" style={{ animationDelay: '0.7s' }}>
              <div className="px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                <span className="text-sm font-medium text-primary">Python & SQL Expert</span>
              </div>
              <div className="px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
                <span className="text-sm font-medium text-accent">Power BI & Tableau</span>
              </div>
              <div className="px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                <span className="text-sm font-medium text-primary">Machine Learning</span>
              </div>
              <div className="px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
                <span className="text-sm font-medium text-accent">Revenue Analytics</span>
              </div>
            </div>
          </div>

          {/* Right Column - Professional Profile */}
          <div className="flex justify-center lg:justify-end opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative group">
              {/* Professional Frame */}
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl rotate-6 group-hover:rotate-3 transition-transform duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl -rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
                
                {/* Main Image Container */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-background to-muted border border-border shadow-xl group-hover:shadow-2xl transition-all duration-500">
                  <img
                    src={profileImageUrl}
                    alt="Shubham Mehta - Data Analytics Professional"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Professional Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent"></div>
                  
                  {/* Professional Badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-background/95 backdrop-blur-sm rounded-lg p-3 border border-border">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-heading text-sm">Senior Revenue Analyst</div>
                        <div className="text-xs text-muted-foreground">IndiGo Airlines</div>
                      </div>
                      <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                        <Briefcase className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Achievement Indicators */}
                <div className="absolute -top-4 -right-4 bg-primary/90 text-white rounded-xl p-3 shadow-lg animate-float">
                  <div className="text-xs font-bold">3+ Years</div>
                  <div className="text-xs opacity-90">Experience</div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-accent/90 text-white rounded-xl p-3 shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                  <div className="text-xs font-bold">15% Growth</div>
                  <div className="text-xs opacity-90">Revenue Impact</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Stats Bar */}
        <div className="mt-16 opacity-0 animate-fade-in" style={{ animationDelay: '0.9s' }}>
          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border shadow-sm">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-heading mb-1">₹40M+</div>
                <div className="text-sm text-muted-foreground">Revenue Managed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-heading mb-1">5+</div>
                <div className="text-sm text-muted-foreground">International Markets</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-heading mb-1">100+</div>
                <div className="text-sm text-muted-foreground">Automated Reports</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-heading mb-1">8.78</div>
                <div className="text-sm text-muted-foreground">Academic CGPA</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-12 opacity-0 animate-fade-in" style={{ animationDelay: '1.1s' }}>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground"
          >
            <span className="text-xs">Learn More</span>
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroVariant4;