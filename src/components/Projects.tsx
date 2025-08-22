import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, BarChart3, Recycle } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Airline Performance Dashboard",
      description: "Comprehensive analytics dashboard for monitoring airline operational metrics, passenger satisfaction, and route performance. Features real-time data visualization and predictive analytics for demand forecasting.",
      icon: BarChart3,
      technologies: ["Flask", "Python", "Plotly", "Pandas", "SQL", "JavaScript"],
      features: [
        "Real-time KPI monitoring",
        "Interactive route analysis",
        "Passenger satisfaction metrics",
        "Predictive demand modeling"
      ],
      demoLink: "https://airline-kpi-dashboard.onrender.com/",
      githubLink: "https://github.com/mshubham707/Airline-KPI-Dashboard",
      status: "Live Demo"
    },
    {
      title: "Waste Management Prediction",
      description: "Machine learning model for predicting waste generation patterns and optimizing collection routes. Implements XGBoost algorithm to forecast waste volumes and reduce operational costs.",
      icon: Recycle,
      technologies: ["Python", "XGBoost", "Scikit-Learn", "Pandas", "Matplotlib", "Jupyter"],
      features: [
        "Waste volume prediction",
        "Route optimization algorithm",
        "Cost reduction analysis",
        "Environmental impact assessment"
      ],
      githubLink: "https://github.com/mshubham707/Waste-Management-Prediction",
      status: "Open Source"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4 font-montserrat">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg text-body mt-4 max-w-2xl mx-auto">
            Showcasing data-driven solutions that solve real-world problems through innovative analytics and machine learning.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="shadow-elegant hover:shadow-lg transition-smooth group">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-primary-light p-3 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                    <project.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-montserrat">{project.title}</CardTitle>
                    <Badge variant="outline" className="mt-1">
                      {project.status}
                    </Badge>
                  </div>
                </div>
                <p className="text-body leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent>
                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-heading mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-body">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold text-heading mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  {project.demoLink && (
                    <Button 
                      variant="default" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => window.open(project.demoLink, '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  )}
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => window.open(project.githubLink, '_blank')}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;