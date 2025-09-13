import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowDown, Mail, Download, TrendingUp, Award, Briefcase, Code, MapPin, Calendar } from "lucide-react";
const profileImageUrl = "/lovable-uploads/a0650eff-04ef-4180-826d-f95213da3d31.png";

// VARIANT 5: Photo-Centered Modern Design
const HeroVariant5 = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-8 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/10"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        
        {/* Profile Photo Section - Main Focus */}
        <div className="mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="relative inline-block group">
            {/* Photo Container */}
            <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 mx-auto">
              {/* Animated Rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/30 to-accent/30 animate-pulse"></div>
              <div className="absolute inset-2 rounded-full bg-gradient-to-r from-accent/40 to-primary/40 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              
              {/* Main Photo */}
              <div className="absolute inset-4 rounded-full overflow-hidden bg-gradient-to-br from-background to-muted border-4 border-background shadow-2xl group-hover:shadow-3xl transition-all duration-700 group-hover:scale-105">
                <img
                  src={profileImageUrl}
                  alt="Shubham Mehta - Data Analytics & Machine Learning Professional"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Floating Status Badge */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-bounce">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  Available for Opportunities
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Name & Title Section */}
        <div className="mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-heading mb-4 font-space leading-tight">
            Shubham Mehta
          </h1>
          
          <div className="space-y-3">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Data Analytics & Machine Learning Professional
            </h2>
            
            <div className="flex flex-wrap justify-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-1">
                <Briefcase className="h-4 w-4" />
                <span>Aviation Industry</span>
              </div>
              <div className="flex items-center gap-1">
                <TrendingUp className="h-4 w-4" />
                <span>Revenue Management</span>
              </div>
              <div className="flex items-center gap-1">
                <Code className="h-4 w-4" />
                <span>Predictive Modeling</span>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Statement */}
        <div className="mb-10 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <p className="text-lg md:text-xl text-body leading-relaxed max-w-3xl mx-auto">
            Transforming complex datasets into <span className="font-semibold text-primary">actionable insights</span>, 
            with <span className="font-bold text-heading">3+ years</span> of experience driving 
            <span className="font-semibold text-primary"> 15% revenue growth</span> and operational efficiency in the aviation industry.
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 opacity-0 animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 bg-gradient-to-br from-card to-card/80">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <div className="text-3xl font-bold text-heading mb-1">15%</div>
            <div className="text-sm text-muted-foreground font-medium">Revenue Growth</div>
          </Card>
          
          <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 bg-gradient-to-br from-card to-card/80">
            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Code className="h-6 w-6 text-accent" />
            </div>
            <div className="text-3xl font-bold text-heading mb-1">5+</div>
            <div className="text-sm text-muted-foreground font-medium">ML Projects</div>
          </Card>
          
          <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 bg-gradient-to-br from-card to-card/80">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Briefcase className="h-6 w-6 text-primary" />
            </div>
            <div className="text-3xl font-bold text-heading mb-1">30%</div>
            <div className="text-sm text-muted-foreground font-medium">Process Efficiency</div>
          </Card>
          
          <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 bg-gradient-to-br from-card to-card/80">
            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Award className="h-6 w-6 text-accent" />
            </div>
            <div className="text-2xl font-bold text-heading mb-1">Award</div>
            <div className="text-sm text-muted-foreground font-medium">Winner</div>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10 opacity-0 animate-fade-in" style={{ animationDelay: '0.9s' }}>
          <Button 
            variant="default" 
            size="lg"
            onClick={() => scrollToSection('projects')}
            className="group px-8 py-4 text-lg font-semibold bg-gradient-to-r from-primary to-primary-hover hover:shadow-lg transition-all duration-300"
          >
            <span>View Portfolio</span>
            <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 text-lg font-semibold border-2 hover:bg-primary/5 transition-all duration-300"
          >
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </Button>
          
          <Button 
            variant="ghost" 
            size="lg"
            className="px-8 py-4 text-lg font-semibold hover:bg-accent/10 transition-all duration-300"
          >
            <Download className="mr-2 h-5 w-5" />
            Resume
          </Button>
        </div>

        {/* Professional Stats Bar */}
        <div className="mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '1.1s' }}>
          <Card className="bg-gradient-to-r from-card/80 to-card/60 backdrop-blur-sm border border-border/50 shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 text-center">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-heading mb-1">₹40M+</div>
                <div className="text-sm text-muted-foreground font-medium">Revenue Managed</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-heading mb-1">5+</div>
                <div className="text-sm text-muted-foreground font-medium">International Markets</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-heading mb-1">100+</div>
                <div className="text-sm text-muted-foreground font-medium">Automated Reports</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-heading mb-1">8.78</div>
                <div className="text-sm text-muted-foreground font-medium">Academic CGPA</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Scroll Indicator */}
        <div className="opacity-0 animate-fade-in" style={{ animationDelay: '1.3s' }}>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            <span className="text-sm">Discover More</span>
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroVariant5;