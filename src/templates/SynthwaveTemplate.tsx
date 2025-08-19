import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import { Zap, Terminal, Cpu, Radio, Triangle } from "lucide-react";

const SynthwaveTemplate = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const gridY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (gridRef.current) {
        gridRef.current.style.transform = `translateY(${Math.sin(Date.now() * 0.001) * 20}px)`;
      }
    }, 16);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Terminal,
      title: "SYSTEM_INIT",
      content: "Full-stack developer specialized in retro-futuristic web experiences",
      delay: 0.2
    },
    {
      icon: Cpu,
      title: "NEURAL_NET",
      content: "React • TypeScript • Node.js • WebGL • Three.js",
      delay: 0.4
    },
    {
      icon: Radio,
      title: "SIGNAL_BOOST",
      content: "Creating neon-lit digital experiences that transport users to cyber realms",
      delay: 0.6
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0">
        <motion.div
          ref={gridRef}
          className="absolute inset-0 opacity-20"
          style={{
            y: gridY,
            backgroundImage: `
              linear-gradient(rgba(255, 0, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 0, 255, 0.3) 1px, transparent 1px),
              linear-gradient(rgba(0, 255, 255, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px'
          }}
        />
      </div>

      {/* Horizon Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-purple-900/20 via-pink-900/10 to-transparent" />
      
      {/* Perspective Grid Floor */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-64 opacity-30"
        style={{
          background: `repeating-linear-gradient(
            90deg,
            transparent,
            transparent 48px,
            rgba(255, 0, 255, 0.5) 50px,
            rgba(255, 0, 255, 0.5) 52px
          )`,
          transform: 'perspective(200px) rotateX(85deg)',
          transformOrigin: 'bottom'
        }}
      />

      {/* Neon Sun */}
      <motion.div
        className="absolute bottom-32 left-1/2 transform -translate-x-1/2"
        animate={{
          boxShadow: [
            '0 0 50px #ff00ff, 0 0 100px #ff00ff, 0 0 150px #ff00ff',
            '0 0 60px #00ffff, 0 0 120px #00ffff, 0 0 180px #00ffff',
            '0 0 50px #ff00ff, 0 0 100px #ff00ff, 0 0 150px #ff00ff'
          ]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-32 h-32 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full relative">
          {/* Sun rays */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 bg-gradient-to-t from-pink-500 to-transparent"
              style={{
                height: '60px',
                left: '50%',
                top: '-60px',
                transformOrigin: '50% 110px',
                transform: `translateX(-50%) rotate(${i * 30}deg)`
              }}
              animate={{
                opacity: [0.5, 1, 0.5],
                scaleY: [0.8, 1.2, 0.8]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.1
              }}
            />
          ))}
        </div>
      </motion.div>

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
            className="inline-block mb-8"
            animate={{
              textShadow: [
                '0 0 20px #ff00ff',
                '0 0 30px #00ffff',
                '0 0 20px #ff00ff'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <h1 className="text-8xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              SHUBHAM
            </h1>
          </motion.div>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "300px" }}
            transition={{ delay: 0.5, duration: 2 }}
            className="h-1 bg-gradient-to-r from-pink-500 to-cyan-500 mx-auto mb-8"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-2xl text-cyan-300 font-mono tracking-wider"
          >
            {'> '}<span className="text-pink-400">CYBER_DEVELOPER</span>{'.exe'}
          </motion.p>

          {/* Glitch Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-cyan-500/10"
            animate={{
              x: ['-100%', '100%'],
              opacity: [0, 0.3, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 5
            }}
          />
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100, rotateX: -30 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  delay: feature.delay,
                  duration: 0.8,
                  type: "spring"
                }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(255, 0, 255, 0.3)"
                }}
                className="group relative"
              >
                <div className="relative p-6 bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-lg border border-pink-500/30 rounded-lg overflow-hidden">
                  {/* Scan Lines */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent h-full opacity-50">
                    <motion.div
                      className="w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                      animate={{ y: ['0%', '400%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <motion.div
                      className="inline-flex p-3 bg-gradient-to-r from-pink-500 to-cyan-500 rounded mb-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Icon className="w-6 h-6 text-black" />
                    </motion.div>
                    
                    <h3 className="text-xl font-bold text-cyan-300 mb-3 font-mono tracking-wide">
                      {feature.title}
                    </h3>
                    
                    <p className="text-pink-200 leading-relaxed text-sm">
                      {feature.content}
                    </p>
                  </div>

                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-cyan-400" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-pink-400" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Retro CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5 }}
          className="text-center"
        >
          <motion.button
            className="px-12 py-4 bg-gradient-to-r from-pink-500 to-cyan-500 text-black font-bold text-lg rounded border-2 border-white/50"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(255, 0, 255, 0.8), inset 0 0 30px rgba(0, 255, 255, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 0 20px rgba(255, 0, 255, 0.5)",
                "0 0 30px rgba(0, 255, 255, 0.5)",
                "0 0 20px rgba(255, 0, 255, 0.5)"
              ]
            }}
            transition={{ 
              boxShadow: { duration: 2, repeat: Infinity },
              scale: { duration: 0.2 }
            }}
          >
            JACK_IN
          </motion.button>
        </motion.div>
      </div>

      {/* Floating Triangles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 20}%`
            }}
            animate={{
              y: [-20, 20, -20],
              rotate: [0, 180, 360],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 6 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.4
            }}
          >
            <Triangle 
              className="w-6 h-6 text-pink-400 fill-current" 
              style={{
                filter: `drop-shadow(0 0 10px #ff00ff)`
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SynthwaveTemplate;