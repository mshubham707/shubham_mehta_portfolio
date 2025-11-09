import { Code2, Database, LineChart, Sparkles } from "lucide-react";

const AboutNeumorph = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Technical Expertise",
      description: "Proficient in Python, SQL, R with advanced ML frameworks"
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "AWS, Flask, Streamlit for scalable data solutions"
    },
    {
      icon: LineChart,
      title: "Business Intelligence",
      description: "Tableau, Power BI, Excel for actionable insights"
    },
    {
      icon: Sparkles,
      title: "Innovation",
      description: "Award-winning solutions driving business growth"
    }
  ];

  return (
    <section id="about" className="py-20 px-4" style={{ background: 'hsl(var(--neumorph-bg))' }}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4 font-montserrat">
            About Me
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ background: 'hsl(var(--neumorph-accent))' }}></div>
        </div>

        {/* Main Content */}
        <div className="neumorph-card p-8 mb-8">
          <p className="text-body text-lg leading-relaxed mb-6">
            I'm a <span className="font-semibold" style={{ color: 'hsl(var(--neumorph-accent))' }}>Senior Analyst</span> at IndiGo Airlines with over 3 years of experience in Planning & Revenue Management. 
            My expertise lies in leveraging data analytics and machine learning to drive strategic business decisions.
          </p>
          <p className="text-body text-lg leading-relaxed mb-6">
            At IndiGo, I've successfully delivered <span className="font-semibold" style={{ color: 'hsl(var(--neumorph-accent))' }}>15% year-over-year revenue growth</span> through 
            innovative pricing strategies and data-driven optimization. I specialize in building automated solutions 
            that save time and improve efficiency across teams.
          </p>
          <p className="text-body text-lg leading-relaxed">
            My passion for technology and business analytics drives me to continuously learn and implement 
            cutting-edge solutions that create measurable impact.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {highlights.map((highlight, index) => (
            <div key={index} className="neumorph-card p-6 hover:neumorph-card-pressed transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg" style={{ background: 'hsl(var(--neumorph-accent) / 0.1)' }}>
                  <highlight.icon className="h-6 w-6" style={{ color: 'hsl(var(--neumorph-accent))' }} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-heading mb-2 font-montserrat">
                    {highlight.title}
                  </h3>
                  <p className="text-body text-sm">
                    {highlight.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutNeumorph;
