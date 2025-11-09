import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

const FooterNeumorph = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
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

  return (
    <footer className="py-8 px-4" style={{ background: 'hsl(var(--neumorph-bg))' }}>
      <div className="max-w-6xl mx-auto">
        <div className="h-px mb-6" style={{ background: 'var(--neumorph-shadow-dark)' }}></div>
        <div className="flex items-center justify-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Shubham Mehta. All rights reserved.
          </p>
          <button
            onClick={toggleDarkMode}
            className="neumorph-button p-2 rounded-full"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>
    </footer>
  );
};

export default FooterNeumorph;
