import { Card } from "@/components/ui/card";
import { GraduationCap, TrendingUp, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4 font-montserrat">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Main Description */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="space-y-6 text-center">
            <p className="text-lg text-body leading-relaxed">
              I am <span className="font-semibold text-heading">Shubham Mehta</span>, 
              an Economics Honors graduate from Ramanujan College, Delhi University. 
              My academic journey took an interesting turn when I switched from science 
              due to a teacher's inspiring teaching methodology, which sparked my passion 
              for economics and analytical thinking.
            </p>
            
            <p className="text-lg text-body leading-relaxed">
              Currently working as a Revenue Analyst at IndiGo, I leverage advanced analytics 
              for pricing strategies and process automation. My role involves transforming 
              complex data into actionable insights that drive revenue optimization and 
              strategic decision-making.
            </p>
            
            <p className="text-lg text-body leading-relaxed">
              I'm passionate about technology, mathematics, and their practical applications 
              in data science. My goal is to bridge the gap between economic theory and 
              real-world business challenges through innovative data-driven solutions.
            </p>
          </div>
        </div>

        {/* Highlight Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="p-6 shadow-elegant hover:shadow-lg transition-smooth text-center">
            <div className="bg-primary-light p-3 rounded-lg w-fit mx-auto mb-4">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-heading mb-2">Academic Excellence</h3>
            <p className="text-body text-sm">Economics Honors graduate with strong analytical foundation</p>
          </Card>

          <Card className="p-6 shadow-elegant hover:shadow-lg transition-smooth text-center">
            <div className="bg-primary-light p-3 rounded-lg w-fit mx-auto mb-4">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-heading mb-2">Revenue Growth</h3>
            <p className="text-body text-sm">40% YoY RASK growth through strategic pricing analytics</p>
          </Card>

          <Card className="p-6 shadow-elegant hover:shadow-lg transition-smooth text-center">
            <div className="bg-primary-light p-3 rounded-lg w-fit mx-auto mb-4">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-heading mb-2">Innovation Focus</h3>
            <p className="text-body text-sm">Applying technology to solve complex business problems</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;