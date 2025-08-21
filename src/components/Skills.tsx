import { Card, CardContent } from "@/components/ui/card";
import { 
  Code, 
  Database, 
  BarChart3, 
  Brain, 
  PieChart,
  TrendingUp,
  Layers,
  FileSpreadsheet
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Development",
      icon: Code,
      skills: [
        { name: "Python", level: "Advanced", description: "Pandas, NumPy, Matplotlib, Plotly, Seaborn, Scikit-Learn" },
        { name: "SQL", level: "Advanced", description: "Joins, CTEs, Window Functions, Complex Queries" },
        { name: "Flask", level: "Intermediate", description: "Web Development, API Creation, Dashboard Deployment" },
        { name: "JavaScript/HTML/CSS", level: "Intermediate", description: "Frontend Development, Tailwind CSS" }
      ]
    },
    {
      title: "Machine Learning & Analytics",
      icon: Brain,
      skills: [
        { name: "Supervised Learning", level: "Advanced", description: "Lasso, Ridge, SVM, Naive Bayes, XGBoost" },
        { name: "Unsupervised Learning", level: "Advanced", description: "K-Means, PCA, KNN, DBSCAN" },
        { name: "Model Deployment", level: "Intermediate", description: "Pipeline Development, Performance Monitoring" },
        { name: "Statistical Analysis", level: "Advanced", description: "Economic Modeling, Hypothesis Testing" }
      ]
    },
    {
      title: "Business Intelligence",
      icon: BarChart3,
      skills: [
        { name: "Advanced Excel", level: "Expert", description: "Lookups, Pivot Tables, Macros, VBA" },
        { name: "Tableau", level: "Advanced", description: "Interactive Dashboards, Data Storytelling" },
        { name: "Power BI", level: "Advanced", description: "DAX, Power Query, Executive Reports" },
        { name: "Data Visualization", level: "Advanced", description: "Plotly, Seaborn, Matplotlib" }
      ]
    },
    {
      title: "Cloud & Infrastructure",
      icon: Database,
      skills: [
        { name: "AWS", level: "Intermediate", description: "Cloud Analytics, Data Storage, Deployment" },
        { name: "Data Pipelines", level: "Intermediate", description: "ETL Processes, Automation" },
        { name: "Version Control", level: "Intermediate", description: "Git, GitHub, Collaborative Development" },
        { name: "Database Management", level: "Advanced", description: "Query Optimization, Performance Tuning" }
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Advanced':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section id="skills" className="py-20 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4 font-montserrat">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg text-body mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit for transforming data into actionable business insights
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="shadow-elegant hover:shadow-lg transition-smooth">
              <CardContent className="p-6">
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-primary-light p-3 rounded-lg">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-heading font-montserrat">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="bg-background p-4 rounded-lg border border-border">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-heading">{skill.name}</h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getLevelColor(skill.level)}`}>
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-sm text-body">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <div className="mt-12 text-center">
          <Card className="max-w-4xl mx-auto shadow-elegant">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-heading mb-4 font-montserrat">
                Core Competencies
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <TrendingUp className="h-8 w-8 text-primary mx-auto" />
                  <h4 className="font-semibold text-heading">Revenue Analytics</h4>
                  <p className="text-sm text-body">Pricing strategies, RASK optimization, demand forecasting</p>
                </div>
                <div className="space-y-2">
                  <PieChart className="h-8 w-8 text-primary mx-auto" />
                  <h4 className="font-semibold text-heading">Data Visualization</h4>
                  <p className="text-sm text-body">Interactive dashboards, executive reporting, KPI tracking</p>
                </div>
                <div className="space-y-2">
                  <Layers className="h-8 w-8 text-primary mx-auto" />
                  <h4 className="font-semibold text-heading">Process Automation</h4>
                  <p className="text-sm text-body">Workflow optimization, automated reporting, efficiency gains</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;