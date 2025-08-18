import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);

  useEffect(() => {
    let trailId = 0;
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Add trail point
      setTrail(prev => {
        const newTrail = [...prev, { x: e.clientX, y: e.clientY, id: trailId++ }];
        return newTrail.slice(-8); // Keep last 8 points
      });
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('button, a, [role="button"]')) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, []);

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 10,
          y: mousePosition.y - 10,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5
        }}
      >
        <div className="w-5 h-5 bg-white rounded-full" />
      </motion.div>

      {/* Cursor Glow */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-40"
        animate={{
          x: mousePosition.x - 15,
          y: mousePosition.y - 15,
          scale: isHovering ? 2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
      >
        <div className="w-8 h-8 bg-primary/20 rounded-full blur-md" />
      </motion.div>

      {/* Trail */}
      {trail.map((point, index) => (
        <motion.div
          key={point.id}
          className="fixed top-0 left-0 pointer-events-none z-30"
          initial={{ 
            x: point.x - 2, 
            y: point.y - 2,
            opacity: 0.6,
            scale: 1
          }}
          animate={{
            opacity: 0,
            scale: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut"
          }}
        >
          <div 
            className="w-1 h-1 bg-primary rounded-full"
            style={{
              opacity: (index + 1) / trail.length * 0.5
            }}
          />
        </motion.div>
      ))}
    </>
  );
};

export default CustomCursor;