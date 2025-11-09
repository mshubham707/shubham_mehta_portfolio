import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Trophy, TrendingUp, BarChart3, Zap } from "lucide-react";

const Experience = () => {
  const achievements = [
    {
      icon: TrendingUp,
      title: "Revenue Growth & Pricing Strategy",
      text: "Designed and executed pricing strategies across key international markets (Dubai, Thailand). Delivered 15% year-over-year revenue growth despite rising competition and increased industry capacity through optimal fare structures and market analysis."
    },
    {
      icon: Zap,
      title: "Process Optimization & Automation",
      text: "Built flight management worksheets and dashboards that reduced manual work by 30%, saving countless analyst hours. Automated repetitive processes and standardized reporting for faster decision-making."
    },
    {
      icon: BarChart3,
      title: "Network & Route Analysis",
      text: "Conducted deep analysis of route performance, identifying opportunities to adjust schedules and launch new profitable routes. Optimized timing to strengthen international connections and capture higher-value passenger segments."
    },
    {
      icon: Trophy,
      title: "Cross-Functional Collaboration",
      text: "Partnered with multiple departments to support deployment of new Revenue Management system (Kambr/SRM Flex). Ensured alignment with IndiGo's business needs while optimizing existing processes for evolving market demands."
    }
  ];

  const recognitions = [
    "🏆 Debutant of the Year (2022–23) - Outstanding impact in first year",
    "🌟 Multiple Employee of the Month awards",
    "🤝 Cross-departmental recognition for professionalism and work excellence"
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
                  Senior Analyst - Planning & Revenue Management ✈️
                </h3>
                <p className="text-xl font-semibold mb-4">
                  <a 
                    href="https://www.goindigo.in/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    IndiGo Airlines
                  </a>
                  <span className="text-primary"> (India's Largest Airline)</span>
                </p>
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
              <h4 className="text-lg font-semibold text-heading mb-6 font-montserrat">
                Key Achievements & Responsibilities
              </h4>
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-background rounded-xl border border-primary/10 hover:border-primary/20 transition-smooth">
                    <div className="bg-primary-light p-3 rounded-lg mt-1">
                      <achievement.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h5 className="text-base font-semibold text-heading mb-2 font-montserrat">
                        {achievement.title}
                      </h5>
                      <p className="text-body text-sm leading-relaxed">
                        {achievement.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recognition & Awards */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-heading mb-4 font-montserrat">
                Recognition & Awards
              </h4>
              <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-6 border border-primary/10">
                <ul className="space-y-2">
                  {recognitions.map((recognition, index) => (
                    <li key={index} className="text-body text-sm leading-relaxed flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {recognition}
                    </li>
                  ))}
                </ul>
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