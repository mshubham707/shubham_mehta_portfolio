import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, BookOpen, Calendar, Award } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Arts (Honors) in Economics",
      institution: "Ramanujan College, Delhi University",
      institutionLink: "https://ramanujancollege.ac.in/",
      duration: "2019 - 2022",
      cgpa: "8.784",
      maxCgpa: "10.0",
      highlights: [
        "Specialized in Econometrics and Statistical Analysis",
        "Research focus on Market Dynamics and Pricing Theory",
        "Strong foundation in Mathematical Economics",
        "Academic excellence with consistent performance"
      ],
      icon: GraduationCap,
      status: "Completed"
    },
    {
      degree: "Data Analytics Course",
      institution: "PW Skills (Physics Wallah)",
      institutionLink: "https://pwskills.com/learn/certificate/b78bb781-80b1-45d7-8914-2de34ad44916/?isCareerPath=true",
      duration: "Completed on Oct 2025",
      subjects: ["Python Programming", "SQL Database Management", "Machine Learning", "Data Analytics"],
      highlights: [
        "Comprehensive hands-on training in Python for Data Science",
        "Advanced SQL techniques for database management",
        "Machine Learning algorithms and implementation",
        "Real-world project-based learning approach"
      ],
      icon: BookOpen,
      status: "Completed"
    }
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4 font-montserrat">
            Education
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg text-body mt-4 max-w-2xl mx-auto">
            Continuous learning journey combining academic excellence with practical skill development
          </p>
        </div>

        {/* Education Cards */}
        <div className="space-y-8">
          {educationData.map((education, index) => (
            <Card key={index} className="shadow-elegant hover:shadow-lg transition-smooth">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="bg-primary-light p-3 rounded-lg">
                        <education.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-montserrat text-heading">
                          {education.degree}
                        </CardTitle>
                        {education.institutionLink ? (
                          <a 
                            href={education.institutionLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary font-semibold hover:underline"
                          >
                            {education.institution}
                          </a>
                        ) : (
                          <p className="text-primary font-semibold">{education.institution}</p>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:items-end space-y-2 mt-4 md:mt-0">
                    <div className="flex items-center text-body">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{education.duration}</span>
                    </div>
                    <Badge 
                      variant={education.status === 'Completed' ? 'default' : 'secondary'}
                      className="w-fit"
                    >
                      {education.status}
                    </Badge>
                    {education.cgpa && (
                      <div className="flex items-center text-body">
                        <Award className="h-4 w-4 mr-2" />
                        <span>CGPA: {education.cgpa}/{education.maxCgpa}</span>
                      </div>
                    )}
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                {/* Subjects for Certification */}
                {education.subjects && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-heading mb-3 font-montserrat">
                      Core Subjects
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {education.subjects.map((subject, subjectIndex) => (
                        <Badge key={subjectIndex} variant="outline" className="text-sm">
                          {subject}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Highlights */}
                <div>
                  <h4 className="font-semibold text-heading mb-3 font-montserrat">
                    Key Highlights
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {education.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-body text-sm leading-relaxed">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Learning Philosophy */}
        <div className="mt-12">
          <Card className="bg-primary-light border-primary-light shadow-elegant">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-bold text-heading mb-4 font-montserrat">
                Learning Philosophy
              </h3>
              <p className="text-body max-w-3xl mx-auto leading-relaxed">
                My educational journey reflects a commitment to continuous learning and adaptation. 
                From transitioning into Economics due to inspiring teaching to pursuing advanced 
                data science skills while working professionally, I believe in staying curious 
                and embracing new challenges that drive both personal and professional growth.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;