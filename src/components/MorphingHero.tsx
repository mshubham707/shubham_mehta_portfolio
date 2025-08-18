import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles, Zap, Star } from "lucide-react";
import profileImage from "@/assets/shubham-profile.jpg";

const MorphingHero = () => {
  const [currentShape, setCurrentShape] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  const shapes = [
    "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)", // Diamond
    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)", // Hexagon
    "circle(50%)", // Circle
    "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)", // Star-like
  ];

  const texts = [
    { title: "Data Alchemist", subtitle: "Transforming numbers into gold", icon: Sparkles },
    { title: "Revenue Optimizer", subtitle: "Maximizing business potential", icon: Zap },
    { title: "Insight Creator", subtitle: "Building bridges with data", icon: Star },
  ];

  useEffect(() => {
    const shapeInterval = setInterval(() => {
      setCurrentShape((prev) => (prev + 1) % shapes.length);
    }, 3000);

    const textInterval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length);
    }, 4000);

    return () => {
      clearInterval(shapeInterval);
      clearInterval(textInterval);
    };
  }, []);

  const scrollToNext = () => {
    const nextSection = document.querySelector('#constellation');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const currentText = texts[textIndex];
  const IconComponent = currentText.icon;

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Morphing Profile */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, type: "spring" }}
          >
            <div className="relative w-80 h-80 mx-auto">
              {/* Morphing Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 backdrop-blur-sm"
                animate={{
                  clipPath: shapes[currentShape],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut"
                }}
              />
              
              {/* Profile Image */}
              <motion.div
                className="absolute inset-4 rounded-full overflow-hidden border-4 border-primary/50 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={profileImage}
                  alt="Shubham Mehta"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </motion.div>

              {/* Floating Orbs */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-4 h-4 bg-primary rounded-full opacity-60"
                  style={{
                    top: `${20 + i * 25}%`,
                    left: `${10 + i * 30}%`,
                  }}
                  animate={{
                    y: [-20, 20, -20],
                    opacity: [0.4, 0.8, 0.4],
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Right Side - Dynamic Text */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, type: "spring", delay: 0.3 }}
          >
            <div>
              <motion.h1
                className="text-5xl lg:text-7xl font-bold text-heading mb-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Shubham
                <br />
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Mehta
                </span>
              </motion.h1>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={textIndex}
                  className="flex items-center justify-center lg:justify-start gap-3 mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <IconComponent className="w-8 h-8 text-primary" />
                  <span className="text-2xl lg:text-3xl font-semibold text-body">
                    {currentText.title}
                  </span>
                </motion.div>
              </AnimatePresence>
              
              <AnimatePresence mode="wait">
                <motion.p
                  key={`${textIndex}-subtitle`}
                  className="text-xl text-light mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  {currentText.subtitle}
                </motion.p>
              </AnimatePresence>
            </div>

            <motion.p
              className="text-lg text-body leading-relaxed max-w-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Revenue Analyst at IndiGo, passionate about transforming data into 
              actionable insights for strategic decision-making and business optimization.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <Button
                variant="hero"
                size="xl"
                onClick={scrollToNext}
                className="group"
              >
                <span>Explore My Universe</span>
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="flex flex-col items-center text-light cursor-pointer"
            onClick={scrollToNext}
            whileHover={{ scale: 1.1 }}
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown className="h-5 w-5" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MorphingHero;