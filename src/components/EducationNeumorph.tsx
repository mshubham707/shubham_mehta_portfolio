import { GraduationCap, Award } from "lucide-react";

const EducationNeumorph = () => {
  const education = [
    {
      degree: "Bachelor of Arts (Honors) in Economics",
      institution: "Ramanujan College, Delhi University",
      institutionLink: "https://ramanujancollege.ac.in/",
      period: "2019 - 2022",
      grade: "8.784 CGPA",
      highlights: [
        "Specialized in Econometrics and Statistical Analysis",
        "Research focus on Market Dynamics and Pricing Theory",
        "Strong foundation in Mathematical Economics",
        "Academic excellence with consistent performance"
      ]
    }
  ];

  const certifications = [
    {
      name: "Data Analytics Course",
      institution: "PW Skills (Physics Wallah)",
      institutionLink: "https://pwskills.com/learn/certificate/b78bb781-80b1-45d7-8914-2de34ad44916/?isCareerPath=true",
      date: "Completed on Oct 2025",
      subjects: ["Python Programming", "SQL Database Management", "Machine Learning", "Data Analytics"]
    }
  ];

  return (
    <section id="education" className="py-20 px-4" style={{ background: 'hsl(var(--neumorph-bg))' }}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4 font-montserrat">
            Education & Certifications
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ background: 'hsl(var(--neumorph-accent))' }}></div>
        </div>

        {/* Education */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="h-6 w-6" style={{ color: 'hsl(var(--neumorph-accent))' }} />
            <h3 className="text-2xl font-bold text-heading font-montserrat">Education</h3>
          </div>
          {education.map((edu, index) => (
            <div key={index} className="neumorph-card p-8">
              <h4 className="text-xl font-bold text-heading mb-2 font-montserrat">
                {edu.degree}
              </h4>
              <p className="text-lg font-semibold mb-2">
                <a 
                  href={edu.institutionLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                  style={{ color: 'hsl(var(--neumorph-accent))' }}
                >
                  {edu.institution}
                </a>
              </p>
              <div className="flex flex-wrap gap-4 text-body text-sm mb-4">
                <span>{edu.period}</span>
                <span>•</span>
                <span className="font-semibold">{edu.grade}</span>
              </div>
              <ul className="space-y-2 mt-4">
                {edu.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-2" style={{ background: 'hsl(var(--neumorph-accent))' }}></div>
                    <span className="text-body text-sm">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Award className="h-6 w-6" style={{ color: 'hsl(var(--neumorph-accent))' }} />
            <h3 className="text-2xl font-bold text-heading font-montserrat">Certifications</h3>
          </div>
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <div key={index} className="neumorph-card p-6">
                <h4 className="text-lg font-bold text-heading mb-2 font-montserrat">
                  {cert.name}
                </h4>
                <p className="text-base font-semibold mb-1">
                  <a 
                    href={cert.institutionLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                    style={{ color: 'hsl(var(--neumorph-accent))' }}
                  >
                    {cert.institution}
                  </a>
                </p>
                <p className="text-body text-sm mb-3">{cert.date}</p>
                {cert.subjects && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {cert.subjects.map((subject, idx) => (
                      <span 
                        key={idx} 
                        className="text-xs px-3 py-1 rounded-full neumorph-card-pressed"
                        style={{ color: 'hsl(var(--neumorph-accent))' }}
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationNeumorph;
