import { Moon, Sun, Mail, Linkedin, Github, Trophy, Dumbbell, Headphones } from "lucide-react";
import { useState, useEffect } from "react";

const FooterNeumorph = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/shubham-mehta-4b582418a/"
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/mshubham707?tab=repositories"
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:mshubham707@gmail.com"
    }
  ];

  const interests = [
    { name: "Cricket", icon: Trophy },
    { name: "Gym", icon: Dumbbell },
    { name: "Podcasts", icon: Headphones }
  ];

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
    <footer id="contact" className="py-12 px-4" style={{ background: 'hsl(var(--neumorph-bg))' }}>
      <div className="max-w-6xl mx-auto">
        {/* Interests Section */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-bold text-heading mb-6 font-montserrat">Beyond Work</h3>
          <div className="flex justify-center gap-6">
            {interests.map((interest) => (
              <div key={interest.name} className="neumorph-card p-4 hover:neumorph-card-pressed transition-all duration-300">
                <interest.icon className="h-6 w-6 mx-auto mb-2" style={{ color: 'hsl(var(--neumorph-accent))' }} />
                <span className="text-sm text-body">{interest.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="h-px mb-6" style={{ background: 'var(--neumorph-shadow-dark)' }}></div>
        
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Social Links */}
          <div className="flex gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="neumorph-button p-3 rounded-full"
                aria-label={link.name}
              >
                <link.icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2025 Shubham Mehta. All rights reserved.
          </p>

          {/* Theme Toggle */}
          <button
            onClick={toggleDarkMode}
            className="neumorph-button p-3 rounded-full"
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
