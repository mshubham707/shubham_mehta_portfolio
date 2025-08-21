import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Trophy, TrendingUp, BarChart3, Zap } from "lucide-react";

const Experience = () => {
  const achievements = [
    {
      icon: TrendingUp,
      text: "Led pricing and inventory strategies in Dubai, Thailand, and South East Asia, achieving up to 40% YoY RASK growth against 26% ASK increase"
    },
    {
      icon: BarChart3,
      text: "Developed automated dashboards using SQL, Python, Excel, and Power BI to track KPIs, reducing manual work hours by 30%"
    },
    {
      icon: Zap,
      text: "Leading Revenue Management system transformation among 100+ professionals, handling selection, design, testing, and upgrades"
    },
    {
      icon: Trophy,
      text: "Recognized with 'Debutant of the Year (2022-23)' and multiple 'Employee of the Month' honors for exceptional performance"
    }
  ];

  const skills = ["Advanced Excel", "Python", "SQL", "Machine Learning", "Tableau", "Power BI", "AWS", "Flask", "Data Analytics"];

  return (
    <section id="experience" className="py-20 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4 font-montserrat">
            Experience
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Experience Card */}
        <Card className="shadow-elegant hover:shadow-lg transition-smooth">
          <CardHeader className="pb-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl font-bold text-heading font-montserrat mb-2">
                  Senior Revenue Analyst
                </h3>
                <p className="text-xl text-primary font-semibold mb-4">IndiGo Airlines</p>
              </div>
              <div className="flex flex-col md:items-end space-y-2">
                <div className="flex items-center text-body">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>July 2022 - Present</span>
                </div>
                <div className="flex items-center text-body">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>Gurugram, India</span>
                </div>
              </div>
            </div>
          </CardHeader>
          
          <CardContent>
            {/* Key Achievements */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-heading mb-4 font-montserrat">
                Key Achievements
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-background rounded-lg">
                    <div className="bg-primary-light p-2 rounded-lg mt-1">
                      <achievement.icon className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-body text-sm leading-relaxed">
                      {achievement.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Used */}
            <div>
              <h4 className="text-lg font-semibold text-heading mb-4 font-montserrat">
                Technologies & Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="bg-primary-light text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Experience;