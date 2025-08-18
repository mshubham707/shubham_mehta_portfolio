import { Button } from "@/components/ui/button";
import { Palette } from "lucide-react";
import { useState } from "react";

type ColorScheme = 'default' | 'sunset' | 'ocean' | 'forest';

const ColorSchemeSwitcher = () => {
  const [currentScheme, setCurrentScheme] = useState<ColorScheme>('default');

  const applyColorScheme = (scheme: ColorScheme) => {
    const body = document.body;
    
    // Remove existing scheme classes
    body.classList.remove('scheme-sunset', 'scheme-ocean', 'scheme-forest');
    
    // Apply new scheme class
    if (scheme !== 'default') {
      body.classList.add(`scheme-${scheme}`);
    }
    
    setCurrentScheme(scheme);
  };

  const schemes = [
    { name: 'Default', value: 'default' as ColorScheme, color: 'hsl(212 100% 48%)' },
    { name: 'Sunset', value: 'sunset' as ColorScheme, color: 'hsl(15 100% 55%)' },
    { name: 'Ocean', value: 'ocean' as ColorScheme, color: 'hsl(195 100% 45%)' },
    { name: 'Forest', value: 'forest' as ColorScheme, color: 'hsl(142 76% 36%)' },
  ];

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="bg-card border border-border rounded-lg p-2 shadow-lg">
        <div className="flex items-center gap-2 mb-2">
          <Palette className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium text-foreground">Color Scheme</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {schemes.map((scheme) => (
            <Button
              key={scheme.value}
              variant={currentScheme === scheme.value ? "default" : "outline"}
              size="sm"
              onClick={() => applyColorScheme(scheme.value)}
              className="h-8 text-xs relative"
            >
              <div 
                className="w-3 h-3 rounded-full mr-2" 
                style={{ backgroundColor: scheme.color }}
              />
              {scheme.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColorSchemeSwitcher;