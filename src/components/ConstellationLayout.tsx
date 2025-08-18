import { motion } from "framer-motion";
import FloatingSection from "./FloatingSection";
import { Button } from "@/components/ui/button";
import { 
  Code, Database, TrendingUp, GraduationCap, 
  Briefcase, Mail, MapPin, Calendar, Award,
  Brain, Lightbulb, Target
} from "lucide-react";

const ConstellationLayout = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="constellation" className="min-h-screen py-20 relative overflow-hidden">
      {/* Background Constellation Lines */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
              <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          {/* Constellation connecting lines */}
          <path d="M200,300 Q400,200 600,300 T1000,400" stroke="url(#line-gradient)" strokeWidth="2" fill="none" />
          <path d="M100,600 Q300,500 500,600 T900,700" stroke="url(#line-gradient)" strokeWidth="2" fill="none" />
          <path d="M300,100 Q600,300 900,200" stroke="url(#line-gradient)" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
      >
        {/* Central Title */}
        <motion.div 
          className="text-center mb-20"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, type: "spring" }}
        >
          <h2 className="text-5xl font-bold text-heading mb-4">
            My Digital <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Constellation</span>
          </h2>
          <p className="text-xl text-light max-w-2xl mx-auto">
            Each orbit represents a different aspect of my journey through the data universe
          </p>
        </motion.div>

        {/* Floating Sections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-16 items-center justify-items-center">
          
          {/* About Constellation */}
          <motion.div className="flex justify-center">
            <FloatingSection
              shape="hexagon"
              size="lg"
              delay={0.2}
              glowColor="hsl(var(--primary))"
            >
              <Brain className="w-16 h-16 text-primary mb-6" />
              <h3 className="text-2xl font-bold text-heading mb-4">The Mind</h3>
              <p className="text-body leading-relaxed">
                Economics graduate turned data enthusiast. I believe in the power of 
                numbers to tell compelling stories and drive meaningful change.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 justify-center">
                {['Economics', 'Analytics', 'Problem Solving'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </FloatingSection>
          </motion.div>

          {/* Skills Constellation */}
          <motion.div className="flex justify-center">
            <FloatingSection
              shape="circle"
              size="lg"
              delay={0.4}
              glowColor="hsl(15 100% 55%)"
            >
              <Code className="w-16 h-16 text-orange-500 mb-6" />
              <h3 className="text-2xl font-bold text-heading mb-4">Tech Arsenal</h3>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="space-y-2">
                  <Database className="w-8 h-8 text-blue-500 mx-auto" />
                  <p className="text-sm font-medium">Python</p>
                </div>
                <div className="space-y-2">
                  <TrendingUp className="w-8 h-8 text-green-500 mx-auto" />
                  <p className="text-sm font-medium">Machine Learning</p>
                </div>
                <div className="space-y-2">
                  <Database className="w-8 h-8 text-purple-500 mx-auto" />
                  <p className="text-sm font-medium">SQL</p>
                </div>
                <div className="space-y-2">
                  <TrendingUp className="w-8 h-8 text-red-500 mx-auto" />
                  <p className="text-sm font-medium">Analytics</p>
                </div>
              </div>
            </FloatingSection>
          </motion.div>

          {/* Experience Constellation */}
          <motion.div className="flex justify-center">
            <FloatingSection
              shape="diamond"
              size="lg"
              delay={0.6}
              glowColor="hsl(195 100% 45%)"
            >
              <Briefcase className="w-16 h-16 text-blue-500 mb-6" />
              <h3 className="text-2xl font-bold text-heading mb-4">Current Role</h3>
              <div className="space-y-4 text-center">
                <div>
                  <h4 className="font-semibold text-lg text-primary">Revenue Analyst</h4>
                  <p className="text-light">IndiGo Airlines</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-2">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">Mumbai, India</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">2023 - Present</span>
                  </div>
                </div>
              </div>
            </FloatingSection>
          </motion.div>

          {/* Education Constellation */}
          <motion.div className="flex justify-center">
            <FloatingSection
              shape="hexagon"
              size="md"
              delay={0.8}
              glowColor="hsl(142 76% 36%)"
            >
              <GraduationCap className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-heading mb-3">Education</h3>
              <div className="text-center space-y-2">
                <p className="font-medium">Bachelor's in Economics</p>
                <p className="text-light text-sm">University Foundation</p>
                <div className="mt-4">
                  <Award className="w-6 h-6 text-yellow-500 mx-auto" />
                  <p className="text-xs text-muted-foreground mt-1">Honors Graduate</p>
                </div>
              </div>
            </FloatingSection>
          </motion.div>

          {/* Vision Constellation */}
          <motion.div className="flex justify-center">
            <FloatingSection
              shape="circle"
              size="md"
              delay={1.0}
              glowColor="hsl(270 100% 60%)"
            >
              <Target className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold text-heading mb-3">Vision</h3>
              <p className="text-body text-center text-sm leading-relaxed">
                To revolutionize decision-making through innovative data analytics and 
                create meaningful business impact.
              </p>
            </FloatingSection>
          </motion.div>

          {/* Innovation Constellation */}
          <motion.div className="flex justify-center">
            <FloatingSection
              shape="diamond"
              size="md"
              delay={1.2}
              glowColor="hsl(45 100% 50%)"
            >
              <Lightbulb className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold text-heading mb-3">Innovation</h3>
              <div className="text-center space-y-2">
                <p className="text-sm text-body">Always exploring</p>
                <p className="text-sm text-body">New methodologies</p>
                <p className="text-sm text-body">Creative solutions</p>
              </div>
            </FloatingSection>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-20"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <Button
            variant="hero"
            size="xl"
            className="group"
            onClick={() => {
              const contactSection = document.querySelector('#contact');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <Mail className="mr-2 h-5 w-5" />
            <span>Connect with Me</span>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ConstellationLayout;