import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, Zap, Waves, Sparkles, Grid3X3 } from "lucide-react";

export type TemplateType = 'constellation' | 'holographic' | 'liquid' | 'zen' | 'synthwave';

interface TemplateSelectorProps {
  currentTemplate: TemplateType;
  onTemplateChange: (template: TemplateType) => void;
}

const templates = [
  { 
    id: 'constellation' as TemplateType, 
    name: 'Digital Constellation', 
    icon: Sparkles,
    color: 'hsl(var(--primary))'
  },
  { 
    id: 'holographic' as TemplateType, 
    name: 'Holographic Grid', 
    icon: Grid3X3,
    color: 'hsl(200, 70%, 60%)'
  },
  { 
    id: 'liquid' as TemplateType, 
    name: 'Liquid Morphism', 
    icon: Waves,
    color: 'hsl(300, 70%, 60%)'
  },
  { 
    id: 'zen' as TemplateType, 
    name: 'Minimalist Zen', 
    icon: Zap,
    color: 'hsl(120, 30%, 50%)'
  },
  { 
    id: 'synthwave' as TemplateType, 
    name: 'Retro Synthwave', 
    icon: Palette,
    color: 'hsl(315, 100%, 70%)'
  }
];

const TemplateSelector = ({ currentTemplate, onTemplateChange }: TemplateSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-4 left-4 z-50">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-card/80 backdrop-blur-lg border border-border/50 rounded-full shadow-lg hover:shadow-xl transition-all"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Palette className="w-5 h-5" />
        <span className="text-sm font-medium">Templates</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="absolute top-14 left-0 bg-card/90 backdrop-blur-lg border border-border/50 rounded-xl shadow-xl overflow-hidden min-w-64"
          >
            {templates.map((template) => {
              const Icon = template.icon;
              const isActive = currentTemplate === template.id;
              
              return (
                <motion.button
                  key={template.id}
                  onClick={() => {
                    onTemplateChange(template.id);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-muted/50 transition-colors ${
                    isActive ? 'bg-muted text-primary' : ''
                  }`}
                  whileHover={{ x: 4 }}
                >
                  <Icon 
                    className="w-5 h-5" 
                    style={{ color: template.color }}
                  />
                  <span className="font-medium">{template.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeTemplate"
                      className="ml-auto w-2 h-2 rounded-full bg-primary"
                    />
                  )}
                </motion.button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TemplateSelector;