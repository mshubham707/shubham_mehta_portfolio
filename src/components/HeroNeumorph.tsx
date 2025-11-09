import { Button } from "@/components/ui/button";
import { Download, Mail, Github, Linkedin } from "lucide-react";
import profileImage from "@/assets/shubham-profile.jpg";

const HeroNeumorph = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Shubham_Mehta_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20" style={{ background: 'hsl(var(--neumorph-bg))' }}>
      <div className="neumorph-card w-[85%] max-w-5xl p-12 relative">
        {/* Floating Avatar */}
        <div className="absolute -top-16 left-8">
          <div className="neumorph-card w-32 h-32 p-2">
            <img
              src={profileImage}
              alt="Shubham Mehta"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="mt-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-heading mb-4 font-montserrat">
            Shubham Mehta
          </h1>
          <p className="text-xl md:text-2xl text-primary font-semibold mb-6">
            Data Analytics & Machine Learning Professional
          </p>
          <p className="text-body text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Senior Analyst at IndiGo Airlines with 3+ years of experience in revenue management, 
            pricing strategy, and data-driven decision making. Specialized in Python, Machine Learning, 
            and Business Intelligence.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-3xl mx-auto">
            <div className="neumorph-card p-6">
              <div className="text-3xl font-bold" style={{ color: 'hsl(var(--neumorph-accent))' }}>3+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="neumorph-card p-6">
              <div className="text-3xl font-bold" style={{ color: 'hsl(var(--neumorph-accent))' }}>15%</div>
              <div className="text-sm text-muted-foreground">Revenue Growth</div>
            </div>
            <div className="neumorph-card p-6">
              <div className="text-3xl font-bold" style={{ color: 'hsl(var(--neumorph-accent))' }}>10+</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <button
              onClick={() => scrollToSection("projects")}
              className="neumorph-button px-6 py-3 rounded-full font-semibold text-foreground"
            >
              View Projects
            </button>
            <button
              onClick={downloadResume}
              className="neumorph-button px-6 py-3 rounded-full font-semibold text-foreground flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              Resume
            </button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center">
            <a
              href="mailto:shubham.biz03@gmail.com"
              className="neumorph-button p-3 rounded-full inline-flex"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/Shubham-metha"
              target="_blank"
              rel="noopener noreferrer"
              className="neumorph-button p-3 rounded-full inline-flex"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/shubham-mehta-14a866160/"
              target="_blank"
              rel="noopener noreferrer"
              className="neumorph-button p-3 rounded-full inline-flex"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroNeumorph;
