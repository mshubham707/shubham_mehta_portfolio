import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Palette, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

type ColorScheme = 'default' | 'sunset' | 'ocean' | 'forest';

const ColorSchemeSwitcher = () => {
  const [currentScheme, setCurrentScheme] = useState<ColorScheme>('default');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

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
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="bg-card border-border shadow-lg hover:bg-accent"
          >
            <Palette className="h-4 w-4 mr-1" />
            Theme
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-64 p-4" align="end">
          <div className="space-y-4">
            {/* Dark Mode Toggle */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {isDarkMode ? (
                  <Moon className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <Sun className="h-4 w-4 text-muted-foreground" />
                )}
                <span className="text-sm font-medium">Dark Mode</span>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={toggleDarkMode}
                className="h-8 px-3"
              >
                {isDarkMode ? 'Light' : 'Dark'}
              </Button>
            </div>
            
            {/* Color Schemes */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Palette className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">Color Scheme</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {schemes.map((scheme) => (
                  <Button
                    key={scheme.value}
                    variant={currentScheme === scheme.value ? "default" : "outline"}
                    size="sm"
                    onClick={() => applyColorScheme(scheme.value)}
                    className="h-8 text-xs justify-start"
                  >
                    <div 
                      className="w-3 h-3 rounded-full mr-2 flex-shrink-0" 
                      style={{ backgroundColor: scheme.color }}
                    />
                    {scheme.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default ColorSchemeSwitcher;