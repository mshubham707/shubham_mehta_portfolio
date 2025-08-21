import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Linkedin, 
  Github, 
  Send, 
  Heart,
  Trophy,
  Dumbbell,
  Headphones
} from "lucide-react";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const interests = [
    { name: "Cricket", icon: Trophy, description: "Passionate fan and weekend player" },
    { name: "Gym", icon: Dumbbell, description: "Fitness enthusiast and strength training" },
    { name: "Podcasts", icon: Headphones, description: "Tech, business, and economics content" }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/shubham-mehta-4b582418a/",
      color: "hover:text-blue-600"
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/mshubham707?tab=repositories",
      color: "hover:text-gray-900"
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:mshubham707@gmail.com",
      color: "hover:text-red-600"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <footer id="contact" className="py-20 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4 font-montserrat">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg text-body mt-4 max-w-2xl mx-auto">
            Interested in collaborating or discussing data analytics opportunities? 
            I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-elegant">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-heading mb-6 font-montserrat">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="transition-smooth"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="transition-smooth"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="transition-smooth"
                  />
                </div>
                <Button type="submit" variant="hero" size="lg" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Personal Info & Interests */}
          <div className="space-y-8">
            {/* Interests */}
            <Card className="shadow-elegant">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-heading mb-6 font-montserrat">
                  Personal Interests
                </h3>
                <div className="space-y-4">
                  {interests.map((interest, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-background rounded-lg">
                      <div className="bg-primary-light p-3 rounded-lg">
                        <interest.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-heading">{interest.name}</h4>
                        <p className="text-sm text-body">{interest.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="shadow-elegant">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-heading mb-6 font-montserrat">
                  Connect with Me
                </h3>
                <div className="flex justify-center space-x-6">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 bg-background rounded-lg shadow-subtle hover:shadow-md transition-smooth ${social.color} group`}
                    >
                      <social.icon className="h-6 w-6 text-body group-hover:scale-110 transition-transform" />
                    </a>
                  ))}
                </div>
                <p className="text-center text-sm text-body mt-4">
                  Open to opportunities in data analytics, revenue optimization, and ML projects
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-body flex items-center justify-center">
            Built with
            <Heart className="h-4 w-4 text-red-500 mx-2" />
            by Shubham Mehta • © 2024
          </p>
          <p className="text-sm text-light mt-2">
            Designed for impact, optimized for performance
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
