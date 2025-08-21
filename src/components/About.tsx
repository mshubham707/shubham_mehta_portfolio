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
              I'm <span className="font-semibold text-heading">Shubham Mehta</span>, 
              a results-driven data analytics professional with 3 years of experience in the aviation industry. 
              As a Senior Revenue Analyst at IndiGo, I leverage data to drive strategic decisions, optimize revenue, 
              and solve complex business problems across key markets like Dubai, Thailand, and South East Asia.
            </p>
            
            <p className="text-lg text-body leading-relaxed">
              My journey began with a B.A. (Hons) in Economics from Ramanujan College, Delhi University (CGPA: 8.784), 
              where I switched from science due to inspiring teaching that sparked my passion for economics and analytical thinking. 
              This foundation in economic modeling and statistical analysis gives me a unique lens for interpreting business data.
            </p>
            
            <p className="text-lg text-body leading-relaxed">
              Inspired by Einstein's insight that "compound interest is the eighth wonder of the world," I believe consistent, 
              focused effort in data science creates exponential impact. Every dataset tells a story—I help businesses read between 
              the lines and act on those insights. Data science is where my passions converge: mathematics, technology, and logical problem-solving.
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