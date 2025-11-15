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
            I'm <span className="font-semibold text-heading">Shubham Mehta</span>, 
            a results-driven data analytics professional with 3 years of experience in the aviation industry. 
            As a Senior Revenue Analyst at IndiGo, I use data to drive strategic decisions, optimize revenue, 
            and solve complex business problems across key international markets.
          </p>
          
          <p className="text-body text-lg leading-relaxed mb-6">
            My journey began with a B.A. (Hons) in Economics from Ramanujan College, Delhi University (CGPA: 8.784). 
            Originally from a science background, I was inspired by great teaching to pursue economics, which ignited my 
            passion for analytical thinking and problem-solving. This academic grounding in economic modeling and statistical 
            analysis gives me a unique perspective in interpreting business data.
          </p>
          
          <p className="text-body text-lg leading-relaxed mb-6">
            I live by Einstein's belief that "compound interest is the eighth wonder of the world." For me, it's more than 
            a financial principle—it's a life philosophy. I believe small, consistent efforts in learning and applying data 
            science can compound into exponential impact. Every dataset tells a story, and my mission is to uncover those 
            stories to help businesses make smarter, data-driven decisions.
          </p>

          <p className="text-body text-lg leading-relaxed">
            Data science is where my passions meet: mathematics, technology, and logical problem-solving. Looking ahead, 
            I aspire to deepen my expertise in predictive modeling and advanced machine learning to create impactful, 
            scalable solutions.
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
