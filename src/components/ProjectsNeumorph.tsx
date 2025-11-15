import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const ProjectsNeumorph = () => {
  const projects = [
    {
      title: "Multiple Disease Prediction System",
      description: "Machine learning-powered diagnostic tool that predicts multiple diseases based on symptoms and clinical parameters. Features advanced ensemble methods and real-time prediction capabilities through a Flask web interface.",
      technologies: ["Python", "XGBoost", "Scikit-Learn", "Flask", "Pandas", "NumPy", "Joblib"],
      impact: "Live Demo Available",
      link: "https://huggingface.co/spaces/shubzz13/disease-prediction",
      github: "https://github.com/mshubham707/disease_prediction"
    },
    {
      title: "Waste Management Prediction",
      description: "Machine learning model for predicting waste generation patterns and optimizing collection routes. Implements XGBoost algorithm to forecast waste volumes and reduce operational costs.",
      technologies: ["Python", "XGBoost", "Scikit-Learn", "Pandas", "Matplotlib", "Jupyter"],
      impact: "Open Source",
      link: "https://github.com/mshubham707/Waste-Management-Prediction",
      github: "https://github.com/mshubham707/Waste-Management-Prediction"
    },
    {
      title: "Airline Performance Dashboard",
      description: "Comprehensive analytics dashboard for monitoring airline operational metrics, passenger satisfaction, and route performance. Features real-time data visualization and predictive analytics for demand forecasting.",
      technologies: ["Flask", "Python", "Plotly", "Pandas", "SQL", "JavaScript"],
      impact: "Live Demo",
      link: "https://airline-kpi-dashboard.onrender.com/",
      github: "https://github.com/mshubham707/Airline-Dashboard-Flask"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4" style={{ background: 'hsl(var(--neumorph-bg))' }}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4 font-montserrat">
            Featured Projects
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ background: 'hsl(var(--neumorph-accent))' }}></div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div key={index} className="neumorph-card p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-heading mb-3 font-montserrat">
                    {project.title}
                  </h3>
                  <p className="text-body mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        className="text-xs"
                        style={{ 
                          background: 'hsl(var(--neumorph-accent) / 0.1)',
                          color: 'hsl(var(--neumorph-accent))'
                        }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full neumorph-card-pressed">
                    <span className="text-sm font-semibold" style={{ color: 'hsl(var(--neumorph-accent))' }}>
                      {project.impact}
                    </span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.link}
                    className="neumorph-button p-3 rounded-full inline-flex"
                    aria-label="View project"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                  <a
                    href={project.github}
                    className="neumorph-button p-3 rounded-full inline-flex"
                    aria-label="View on GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsNeumorph;
