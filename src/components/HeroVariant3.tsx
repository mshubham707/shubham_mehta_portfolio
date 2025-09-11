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
        {/* Enhanced Central Profile Image with Dynamic Effects */}
        <div className="mb-12 opacity-0 animate-fade-in-up">
          <div className="relative inline-block group">
            {/* Pulsing Rings Animation */}
            <div className="absolute inset-0 rounded-full">
              <div className="absolute inset-[-20px] rounded-full border-2 border-primary/20 animate-ping" style={{ animationDuration: '3s' }}></div>
              <div className="absolute inset-[-40px] rounded-full border border-accent/10 animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
              <div className="absolute inset-[-60px] rounded-full border border-primary/10 animate-ping" style={{ animationDuration: '5s', animationDelay: '2s' }}></div>
            </div>
            
            {/* Rotating Tech Icons */}
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
              </div>
              <div className="absolute top-1/2 -right-16 transform -translate-y-1/2 w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
              </div>
              <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-primary rounded-full"></div>
              </div>
              <div className="absolute top-1/2 -left-16 transform -translate-y-1/2 w-7 h-7 bg-accent/20 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
              </div>
            </div>
            
            {/* Main Image Container with Enhanced Styling */}
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full p-6 bg-gradient-to-br from-primary/30 via-background/50 to-accent/20 backdrop-blur-sm border-2 border-primary/20 group-hover:border-accent/30 transition-all duration-700">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <img
                  src={profileImageUrl}
                  alt="Shubham Mehta"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 group-hover:opacity-50 transition-opacity duration-500"></div>
              </div>
              
              {/* Inner Glow Effect */}
              <div className="absolute inset-0 rounded-full shadow-[inset_0_0_50px_rgba(var(--primary-rgb),0.1)] group-hover:shadow-[inset_0_0_80px_rgba(var(--accent-rgb),0.2)] transition-all duration-500"></div>
            </div>
            
            {/* Enhanced Floating Achievement Cards */}
            <div className="absolute -left-16 top-1/4 bg-gradient-to-r from-primary/95 to-primary/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg animate-float text-white max-w-[160px]" style={{ animationDelay: '0s' }}>
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="h-4 w-4" />
                <span className="text-xs font-bold">EXPERIENCE</span>
              </div>
              <div className="text-sm font-bold">3+ Years</div>
              <div className="text-xs opacity-90">Aviation Analytics & Revenue Management</div>
            </div>
            
            <div className="absolute -right-16 top-1/3 bg-gradient-to-r from-accent/95 to-accent/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg animate-float text-white max-w-[160px]" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="h-4 w-4" />
                <span className="text-xs font-bold">PROJECTS</span>
              </div>
              <div className="text-sm font-bold">5+ End-to-End</div>
              <div className="text-xs opacity-90">ML Models & BI Dashboards</div>
            </div>
            
            {/* Additional Floating Elements - Redesigned for Consistency */}
            <div className="absolute -bottom-12 -left-12 bg-gradient-to-br from-primary/90 to-accent/80 backdrop-blur-sm rounded-xl p-3 shadow-lg animate-float text-white max-w-[140px]" style={{ animationDelay: '2s' }}>
              <div className="text-xs font-bold mb-1">TECHNICAL SKILLS</div>
              <div className="text-sm">Python & SQL (Expert)</div>
            </div>
            
            <div className="absolute -bottom-8 -right-14 bg-gradient-to-br from-accent/90 to-primary/80 backdrop-blur-sm rounded-xl p-3 shadow-lg animate-float text-white max-w-[140px]" style={{ animationDelay: '2.5s' }}>
              <div className="text-xs font-bold mb-1">VISUALIZATION</div>
              <div className="text-sm">Power BI & Tableau (Advanced)</div>
            </div>
            
            <div className="absolute -top-16 -right-8 bg-gradient-to-br from-primary/90 to-accent/90 backdrop-blur-sm rounded-xl p-3 shadow-lg animate-float text-white max-w-[120px]" style={{ animationDelay: '3s' }}>
              <div className="text-xs font-bold mb-1">RECOGNITION</div>
              <div className="text-sm">Debutant of the Year</div>
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
              Data Analytics & Machine Learning Professional
            </p>
            <p className="text-lg text-body leading-relaxed">
              Transforming complex datasets into actionable insights, with 3+ years of experience driving revenue growth and operational efficiency in the aviation industry.
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