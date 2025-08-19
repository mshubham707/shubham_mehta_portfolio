import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Circle, Square, Triangle, Minus } from "lucide-react";

const ZenTemplate = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const sections = [
    {
      icon: Circle,
      title: "Philosophy",
      content: "Less is more. Every element serves a purpose. Every space breathes with intention.",
      position: "top-1/4 left-1/4"
    },
    {
      icon: Square,
      title: "Craft",
      content: "Clean code. Thoughtful design. Purposeful interactions.",
      position: "top-1/3 right-1/4"
    },
    {
      icon: Triangle,
      title: "Balance",
      content: "Harmony between function and form. Simplicity and sophistication.",
      position: "bottom-1/3 left-1/3"
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-stone-50 to-slate-100 overflow-hidden">
      {/* Breathing Background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 30% 20%, rgba(0,0,0,0.02) 0%, transparent 50%)",
            "radial-gradient(circle at 70% 80%, rgba(0,0,0,0.03) 0%, transparent 50%)",
            "radial-gradient(circle at 30% 20%, rgba(0,0,0,0.02) 0%, transparent 50%)"
          ]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Central Focus */}
      <div className="relative z-10 container mx-auto px-8 py-32">
        <motion.div
          style={{ opacity, scale }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Minimalist Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="mb-16"
          >
            <div className="w-24 h-24 mx-auto mb-8 relative">
              <motion.div
                className="w-full h-full border-2 border-stone-800 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-4 bg-stone-800 rounded-full flex items-center justify-center">
                <Minus className="w-8 h-8 text-stone-50" />
              </div>
            </div>
          </motion.div>

          {/* Minimal Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.5 }}
            className="text-8xl font-thin text-stone-900 mb-8 tracking-wider"
          >
            SHUBHAM
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "200px" }}
            transition={{ delay: 1, duration: 2, ease: "easeInOut" }}
            className="h-px bg-stone-400 mx-auto mb-8"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1.5 }}
            className="text-xl text-stone-600 font-light tracking-wide leading-relaxed max-w-2xl mx-auto"
          >
            Developer. Minimalist. Creator of digital experiences that matter.
          </motion.p>
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute inset-0">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 2 + index * 0.5,
                  duration: 2,
                  ease: "easeOut"
                }}
                className={`absolute ${section.position} group cursor-pointer`}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="relative"
                >
                  {/* Icon Container */}
                  <motion.div
                    className="w-16 h-16 border border-stone-400 rounded-full flex items-center justify-center bg-white/80 backdrop-blur-sm"
                    whileHover={{ 
                      borderColor: "#1c1917",
                      backgroundColor: "rgba(255,255,255,0.95)"
                    }}
                  >
                    <Icon className="w-6 h-6 text-stone-700" />
                  </motion.div>

                  {/* Tooltip Card */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    whileHover={{ opacity: 1, scale: 1, y: 0 }}
                    className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-lg border border-stone-200 rounded-lg p-6 shadow-lg w-64"
                  >
                    <h3 className="text-lg font-medium text-stone-900 mb-3">{section.title}</h3>
                    <p className="text-sm text-stone-600 leading-relaxed">{section.content}</p>
                  </motion.div>

                  {/* Breathing Ring */}
                  <motion.div
                    className="absolute inset-0 border border-stone-300 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 0, 0.5]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 1.3
                    }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Subtle Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 2 }}
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex gap-8 text-sm text-stone-500 font-light tracking-wider"
        >
          {['WORK', 'ABOUT', 'CONTACT'].map((item, index) => (
            <motion.a
              key={item}
              href="#"
              className="hover:text-stone-900 transition-colors duration-500 relative"
              whileHover={{ y: -2 }}
            >
              {item}
              <motion.div
                className="absolute -bottom-1 left-0 h-px bg-stone-900"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Ambient Dots */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-stone-400 rounded-full"
            style={{
              left: `${10 + i * 8}%`,
              top: `${20 + (i % 3) * 25}%`
            }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.8
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ZenTemplate;