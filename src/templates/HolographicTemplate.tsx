import { motion } from "framer-motion";
import { Code, User, Briefcase, Mail, Github, Linkedin, ExternalLink } from "lucide-react";
import { useEffect, useRef } from "react";

const HolographicTemplate = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = grid.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      grid.style.setProperty('--mouse-x', `${x}%`);
      grid.style.setProperty('--mouse-y', `${y}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const gridItems = [
    { icon: User, title: "About", content: "Full-Stack Developer", span: "col-span-2" },
    { icon: Code, title: "Skills", content: "React, TypeScript, Node.js", span: "col-span-3" },
    { icon: Briefcase, title: "Projects", content: "AI Dashboard, E-commerce", span: "col-span-2" },
    { icon: Mail, title: "Contact", content: "hello@portfolio.dev", span: "col-span-1" },
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Holographic Grid Background */}
      <div 
        ref={gridRef}
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0, 255, 255, 0.3) 0%, transparent 50%)
          `,
          backgroundSize: '50px 50px, 50px 50px, 400px 400px'
        }}
      />

      {/* Scanning Lines Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
          animate={{ y: ['0vh', '100vh'] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute h-full w-1 bg-gradient-to-b from-transparent via-cyan-400 to-transparent"
          animate={{ x: ['0vw', '100vw'] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1 }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-8 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.h1
            className="text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{ duration: 5, repeat: Infinity }}
            style={{ backgroundSize: '200% 100%' }}
          >
            SHUBHAM SINGH
          </motion.h1>
          <motion.p
            className="text-xl text-cyan-300 font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {'> '}<span className="typing-effect">Holographic_Developer.exe</span>
          </motion.p>
        </motion.div>

        {/* Holographic Grid */}
        <div className="grid grid-cols-4 gap-6 max-w-6xl mx-auto">
          {gridItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                className={`${item.span} group`}
              >
                <div className="relative h-48 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 backdrop-blur-lg border border-cyan-400/30 rounded-lg overflow-hidden">
                  {/* Holographic Shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  
                  {/* Content */}
                  <div className="relative z-10 p-6 h-full flex flex-col justify-center items-center text-center">
                    <Icon className="w-8 h-8 text-cyan-400 mb-3" />
                    <h3 className="text-lg font-semibold text-cyan-100 mb-2">{item.title}</h3>
                    <p className="text-cyan-300/80 text-sm">{item.content}</p>
                  </div>

                  {/* Corner Brackets */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-cyan-400" />
                  <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-cyan-400" />
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-cyan-400" />
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-cyan-400" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex justify-center gap-6 mt-16"
        >
          {[Github, Linkedin, ExternalLink].map((Icon, index) => (
            <motion.a
              key={index}
              href="#"
              className="p-3 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-400/30 rounded-lg hover:border-cyan-400 transition-all group"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300" />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Holographic Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 rounded-full bg-gradient-radial from-cyan-400/20 to-transparent"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              filter: 'blur(2px)'
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HolographicTemplate;