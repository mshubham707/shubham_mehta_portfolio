import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { User, Code, Briefcase, Mail, Heart } from "lucide-react";

const LiquidTemplate = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);

  const sections = [
    {
      icon: User,
      title: "About Me",
      content: "I'm a passionate developer who loves creating fluid, interactive experiences that feel alive and organic.",
      color: "from-pink-400 to-rose-600"
    },
    {
      icon: Code,
      title: "My Skills",
      content: "Specializing in React, TypeScript, and creating smooth animations that bring interfaces to life.",
      color: "from-purple-400 to-indigo-600"
    },
    {
      icon: Briefcase,
      title: "Projects",
      content: "Building applications that flow seamlessly and provide delightful user experiences.",
      color: "from-blue-400 to-cyan-600"
    },
    {
      icon: Mail,
      title: "Get in Touch",
      content: "Let's create something beautiful together. Reach out and let's make waves!",
      color: "from-emerald-400 to-teal-600"
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Liquid Background Blobs */}
      <div className="absolute inset-0">
        <motion.div
          style={{ y: y1 }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute top-1/3 -right-20 w-80 h-80 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full filter blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-0 left-1/4 w-72 h-72 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [-50, 50, -50],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-8 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.div
            className="relative inline-block mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-32 h-32 mx-auto mb-6 relative">
              <motion.div
                className="w-full h-full bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 rounded-full"
                animate={{
                  borderRadius: [
                    "50%",
                    "40% 60% 60% 40% / 40% 40% 60% 60%",
                    "60% 40% 40% 60% / 60% 60% 40% 40%",
                    "50%"
                  ]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="absolute inset-2 bg-slate-900 rounded-full flex items-center justify-center">
                <Heart className="w-12 h-12 text-pink-400" />
              </div>
            </div>
          </motion.div>

          <motion.h1
            className="text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Shubham Singh
            </span>
          </motion.h1>
          
          <motion.p
            className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Creating fluid, organic digital experiences that flow like water and feel like magic
          </motion.p>
        </motion.div>

        {/* Liquid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  delay: index * 0.2,
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                <div className="relative p-8 bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 overflow-hidden">
                  {/* Liquid Morph Background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-20`}
                    animate={{
                      borderRadius: [
                        "30px",
                        "40px 30px 50px 20px",
                        "20px 50px 30px 40px",
                        "30px"
                      ]
                    }}
                    transition={{ 
                      duration: 6 + index * 2, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  />

                  {/* Flowing Particles */}
                  <div className="absolute inset-0 overflow-hidden">
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute w-2 h-2 bg-gradient-to-r ${section.color} rounded-full opacity-60`}
                        style={{
                          left: `${10 + i * 12}%`,
                          top: `${20 + i * 8}%`
                        }}
                        animate={{
                          y: [-20, 20, -20],
                          x: [-10, 10, -10],
                          opacity: [0.3, 0.8, 0.3],
                        }}
                        transition={{
                          duration: 4 + i * 0.5,
                          repeat: Infinity,
                          delay: i * 0.2,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <motion.div
                      className={`inline-flex p-3 bg-gradient-to-r ${section.color} rounded-2xl mb-4`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-pink-400 group-hover:to-purple-500 transition-all duration-300">
                      {section.title}
                    </h3>
                    
                    <p className="text-slate-300 leading-relaxed">
                      {section.content}
                    </p>
                  </div>

                  {/* Hover Glow Effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${section.color} opacity-0 rounded-3xl blur-xl`}
                    whileHover={{ opacity: 0.3 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Floating CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="text-center mt-20"
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-semibold rounded-full text-lg shadow-2xl"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 50px rgba(168, 85, 247, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              borderRadius: [
                "50px",
                "40px 60px 40px 60px",
                "60px 40px 60px 40px",
                "50px"
              ]
            }}
            transition={{ 
              borderRadius: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: 0.2 }
            }}
          >
            Dive Into My Work
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default LiquidTemplate;