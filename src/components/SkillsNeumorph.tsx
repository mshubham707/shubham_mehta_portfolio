import { useEffect, useRef, useState } from "react";

interface Skill {
  name: string;
  percentage: number;
}

const SkillsNeumorph = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", percentage: 95 },
        { name: "SQL", percentage: 90 },
        { name: "R", percentage: 75 },
      ]
    },
    {
      title: "Machine Learning",
      skills: [
        { name: "Scikit-learn", percentage: 90 },
        { name: "TensorFlow", percentage: 80 },
        { name: "XGBoost", percentage: 85 },
      ]
    },
    {
      title: "Business Intelligence",
      skills: [
        { name: "Tableau", percentage: 90 },
        { name: "Power BI", percentage: 85 },
        { name: "Excel", percentage: 95 },
      ]
    },
    {
      title: "Data Engineering",
      skills: [
        { name: "AWS", percentage: 80 },
        { name: "Flask", percentage: 85 },
        { name: "Streamlit", percentage: 88 },
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const CircularProgress = ({ skill, delay }: { skill: Skill; delay: number }) => {
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = isVisible 
      ? circumference - (skill.percentage / 100) * circumference 
      : circumference;

    return (
      <div className="flex flex-col items-center">
        <div className="relative w-32 h-32">
          <svg className="w-full h-full transform -rotate-90">
            {/* Background circle */}
            <circle
              cx="64"
              cy="64"
              r={radius}
              stroke="hsl(var(--neumorph-shadow-dark))"
              strokeWidth="8"
              fill="none"
              opacity="0.2"
            />
            {/* Progress circle */}
            <circle
              cx="64"
              cy="64"
              r={radius}
              stroke="hsl(var(--neumorph-accent))"
              strokeWidth="8"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              style={{
                transition: `stroke-dashoffset 1.5s ease-in-out ${delay}s`,
              }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold" style={{ color: 'hsl(var(--neumorph-accent))' }}>
              {skill.percentage}%
            </span>
          </div>
        </div>
        <p className="mt-4 text-sm font-semibold text-heading">{skill.name}</p>
      </div>
    );
  };

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className="py-20 px-4" 
      style={{ background: 'hsl(var(--neumorph-bg))' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4 font-montserrat">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ background: 'hsl(var(--neumorph-accent))' }}></div>
        </div>

        {/* Skill Categories */}
        <div className="space-y-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="neumorph-card p-8">
              <h3 className="text-xl font-bold text-heading mb-8 text-center font-montserrat">
                {category.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {category.skills.map((skill, skillIndex) => (
                  <CircularProgress 
                    key={skillIndex} 
                    skill={skill} 
                    delay={categoryIndex * 0.3 + skillIndex * 0.1}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsNeumorph;
