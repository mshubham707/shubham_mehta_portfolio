import { ReactNode, useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface FloatingSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  shape?: 'circle' | 'hexagon' | 'diamond' | 'triangle';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  glowColor?: string;
}

const FloatingSection = ({ 
  children, 
  className = "", 
  delay = 0,
  shape = 'circle',
  size = 'lg',
  glowColor = 'hsl(var(--primary))'
}: FloatingSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const controls = useAnimation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const sizeClasses = {
    sm: 'w-80 h-80',
    md: 'w-96 h-96', 
    lg: 'w-[500px] h-[500px]',
    xl: 'w-[600px] h-[600px]'
  };

  const shapeClasses = {
    circle: 'rounded-full',
    hexagon: 'clip-hexagon',
    diamond: 'rotate-45 rounded-2xl',
    triangle: 'clip-triangle'
  };

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        scale: 1,
        y: 0,
        rotate: shape === 'diamond' ? 45 : 0,
        transition: {
          duration: 1.2,
          delay: delay,
          type: "spring",
          stiffness: 100,
          damping: 15
        }
      });
    }
  }, [isInView, controls, delay, shape]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    setMousePosition({
      x: (e.clientX - centerX) * 0.1,
      y: (e.clientY - centerY) * 0.1
    });
  };

  return (
    <motion.div
      ref={ref}
      className={`relative ${sizeClasses[size]} ${className}`}
      initial={{ opacity: 0, scale: 0.8, y: 100 }}
      animate={controls}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
    >
      {/* Glow Effect */}
      <div 
        className={`absolute inset-0 ${shapeClasses[shape]} opacity-20 blur-xl`}
        style={{ 
          background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
          transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
        }}
      />
      
      {/* Main Container */}
      <motion.div
        className={`relative w-full h-full ${shapeClasses[shape]} backdrop-blur-lg bg-card/80 border border-border/50 shadow-2xl overflow-hidden`}
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
        }}
      >
        {/* Inner Glow */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{ 
            background: `radial-gradient(circle at 30% 30%, ${glowColor}40 0%, transparent 50%)`
          }}
        />
        
        {/* Content */}
        <div className={`relative z-10 w-full h-full p-8 flex flex-col justify-center items-center text-center ${shape === 'diamond' ? '-rotate-45' : ''}`}>
          {children}
        </div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full opacity-60"
              style={{ 
                background: glowColor,
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`
              }}
              animate={{
                y: [-10, 10, -10],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3
              }}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FloatingSection;