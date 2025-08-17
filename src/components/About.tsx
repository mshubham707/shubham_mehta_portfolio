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

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Main Description */}
          <div className="space-y-6">
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

          {/* Achievement Cards */}
          <div className="space-y-6">
            <Card className="p-6 shadow-elegant hover:shadow-lg transition-smooth">
              <div className="flex items-start space-x-4">
                <div className="bg-primary-light p-3 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-heading mb-2">Academic Excellence</h3>
                  <p className="text-body">Economics Honors graduate with strong analytical foundation and research methodology expertise.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-elegant hover:shadow-lg transition-smooth">
              <div className="flex items-start space-x-4">
                <div className="bg-primary-light p-3 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-heading mb-2">Revenue Growth</h3>
                  <p className="text-body">Achieved 40% YoY RASK growth through strategic pricing analytics and data-driven insights.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-elegant hover:shadow-lg transition-smooth">
              <div className="flex items-start space-x-4">
                <div className="bg-primary-light p-3 rounded-lg">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-heading mb-2">Innovation Focus</h3>
                  <p className="text-body">Passionate about applying cutting-edge technology and mathematical models to solve complex business problems.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;