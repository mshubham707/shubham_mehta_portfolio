import { GraduationCap, Award } from "lucide-react";

const EducationNeumorph = () => {
  const education = [
    {
      degree: "Bachelor of Science (Hons.) Statistics",
      institution: "Ramanujan College, University of Delhi",
      institutionLink: "https://ramanujancollege.ac.in/",
      period: "2018 - 2021",
      grade: "7.51 CGPA"
    }
  ];

  const certifications = [
    {
      name: "Data Analytics Course",
      institution: "PW Skills",
      institutionLink: "https://pwskills.com/learn/certificate/b78bb781-80b1-45d7-8914-2de34ad44916/?isCareerPath=true",
      date: "Completed on Oct 2025"
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
              <div className="flex flex-wrap gap-4 text-body text-sm">
                <span>{edu.period}</span>
                <span>•</span>
                <span className="font-semibold">{edu.grade}</span>
              </div>
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
                <p className="text-body text-sm">{cert.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationNeumorph;
