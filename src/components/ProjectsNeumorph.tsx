import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const ProjectsNeumorph = () => {
  const projects = [
    {
      title: "Revenue Management Dashboard",
      description: "Built comprehensive dashboard for tracking pricing strategies and route performance across 50+ international routes",
      technologies: ["Python", "Tableau", "SQL", "AWS"],
      impact: "15% YoY revenue growth",
      link: "#",
      github: "#"
    },
    {
      title: "Flight Schedule Optimizer",
      description: "ML-powered tool for optimizing flight schedules and identifying profitable route opportunities",
      technologies: ["Python", "Scikit-learn", "Flask"],
      impact: "30% reduction in manual work",
      link: "#",
      github: "#"
    },
    {
      title: "Demand Forecasting Model",
      description: "Time series forecasting model for predicting passenger demand across different markets",
      technologies: ["Python", "TensorFlow", "Pandas"],
      impact: "92% accuracy",
      link: "#",
      github: "#"
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
