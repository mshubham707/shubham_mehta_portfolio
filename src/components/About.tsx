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
              a results-driven data analytics professional with 3 years of experience in the aviation industry. 
              My academic journey took an interesting turn when I switched from science to Economics due to a 
              teacher's inspiring methodology, which sparked my passion for analytical thinking and economic modeling.
            </p>
            
            <p className="text-lg text-body leading-relaxed">
              Currently serving as a <span className="font-semibold text-heading">Senior Revenue Analyst at IndiGo</span>, 
              I lead pricing and inventory strategies across key markets including Dubai, Thailand, and South East Asia. 
              I've achieved remarkable results: up to 40% year-over-year growth in Revenue per Available Seat Kilometer (RASK) 
              against a 26% increase in Available Seat Kilometers (ASKs), while reducing manual work hours by 30%.
            </p>
            
            <p className="text-lg text-body leading-relaxed">
              My philosophy is inspired by Einstein's insight that "compound interest is the eighth wonder of the world." 
              I believe consistent, focused effort in data science creates exponential impact. Beyond personal achievement, 
              I'm passionate about giving back to society and believe true success lies in contributing equally to the world around us.
            </p>
            
            <p className="text-lg text-body leading-relaxed">
              When I'm not diving into datasets, you'll find me exploring economics literature, following fintech trends, 
              playing cricket, hitting the gym, listening to podcasts, or planning my next travel adventure. Always open to 
              book recommendations, especially non-fiction!
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
            <p className="text-body text-sm">40% YoY RASK growth with 26% ASK increase across key Asian markets</p>
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