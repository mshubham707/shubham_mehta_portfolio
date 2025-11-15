import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, ChevronDown, TrendingUp, Zap, BarChart3, Trophy } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ExperienceNeumorph = () => {
  const achievements = [
    {
      icon: TrendingUp,
      title: "Revenue Growth & Pricing Strategy",
      metric: "15% YoY Growth",
      text: "Designed and executed pricing strategies across key international markets (Dubai, Thailand). Delivered 15% year-over-year revenue growth despite rising competition and increased industry capacity through optimal fare structures and market analysis."
    },
    {
      icon: Zap,
      title: "Process Optimization & Automation",
      metric: "30% Time Saved",
      text: "Built flight management worksheets and dashboards that reduced manual work by 30%, saving countless analyst hours. Automated repetitive processes and standardized reporting for faster decision-making."
    },
    {
      icon: BarChart3,
      title: "Network & Route Analysis",
      metric: "50+ Routes Optimized",
      text: "Conducted deep analysis of route performance, identifying opportunities to adjust schedules and launch new profitable routes. Optimized timing to strengthen international connections and capture higher-value passenger segments."
    },
    {
      icon: Trophy,
      title: "Cross-Functional Collaboration",
      metric: "System Deployment",
      text: "Partnered with multiple departments to support deployment of new Revenue Management system (Kambr/SRM Flex). Ensured alignment with IndiGo's business needs while optimizing existing processes for evolving market demands."
    }
  ];

  const recognitions = [
    "🏆 Debutant of the Year (2022–23) - Outstanding impact in first year",
    "🌟 Multiple Employee of the Month awards",
    "🤝 Cross-departmental recognition for professionalism and work excellence"
  ];

  return (
    <section id="experience" className="py-20 px-4" style={{ background: 'hsl(var(--neumorph-bg))' }}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4 font-montserrat">
            Experience
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ background: 'hsl(var(--neumorph-accent))' }}></div>
        </div>

        {/* Experience Card */}
        <div className="neumorph-card p-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-heading font-montserrat mb-2">
                Senior Analyst - Planning & Revenue Management ✈️
              </h3>
              <p className="text-xl font-semibold mb-4">
                <a 
                  href="https://www.goindigo.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:underline"
                  style={{ color: 'hsl(var(--neumorph-accent))' }}
                >
                  IndiGo Airlines
                </a>
                <span style={{ color: 'hsl(var(--neumorph-accent))' }}> (India's Largest Airline)</span>
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

          {/* Accordion Achievements */}
          <Accordion type="single" collapsible className="space-y-4">
            {achievements.map((achievement, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-none">
                <div className="neumorph-card p-1">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-lg" style={{ background: 'hsl(var(--neumorph-accent) / 0.1)' }}>
                        <achievement.icon className="h-5 w-5" style={{ color: 'hsl(var(--neumorph-accent))' }} />
                      </div>
                      <div className="text-left">
                        <h5 className="text-base font-semibold text-heading font-montserrat">
                          {achievement.title}
                        </h5>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <div className="flex items-start gap-4 mt-2">
                      <Badge 
                        className="text-sm font-bold px-4 py-1"
                        style={{ 
                          background: 'hsl(var(--neumorph-accent))',
                          color: 'white'
                        }}
                      >
                        {achievement.metric}
                      </Badge>
                      <p className="text-body text-sm leading-relaxed flex-1">
                        {achievement.text}
                      </p>
                    </div>
                  </AccordionContent>
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Awards */}
        <div className="neumorph-card p-8">
          <h4 className="text-lg font-semibold text-heading mb-4 font-montserrat">
            Recognition & Awards
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="neumorph-card-pressed p-4 text-center">
              <div className="text-2xl mb-2">🏆</div>
              <div className="text-sm font-semibold">Debutant of the Year</div>
              <div className="text-xs text-muted-foreground">2022-23</div>
            </div>
            <div className="neumorph-card-pressed p-4 text-center">
              <div className="text-2xl mb-2">🌟</div>
              <div className="text-sm font-semibold">Employee of the Month</div>
              <div className="text-xs text-muted-foreground">Multiple Awards</div>
            </div>
            <div className="neumorph-card-pressed p-4 text-center">
              <div className="text-2xl mb-2">🤝</div>
              <div className="text-sm font-semibold">Cross-dept Recognition</div>
              <div className="text-xs text-muted-foreground">Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceNeumorph;
