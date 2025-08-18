import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react";
import FloatingSection from "./FloatingSection";

const ContactSection = () => {
  return (
    <section id="contact" className="min-h-screen py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl font-bold text-heading mb-4">
            Let's Create Something <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Amazing</span>
          </h2>
          <p className="text-xl text-light max-w-2xl mx-auto">
            Ready to transform your data into actionable insights? Let's connect and explore possibilities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Contact Information */}
          <motion.div 
            className="space-y-8"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-heading mb-6">Get in Touch</h3>
              
              <div className="space-y-4">
                <motion.div 
                  className="flex items-center gap-4 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50"
                  whileHover={{ scale: 1.02, x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-heading">Email</p>
                    <p className="text-body">shubham.mehta@example.com</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center gap-4 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50"
                  whileHover={{ scale: 1.02, x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <p className="font-medium text-heading">Phone</p>
                    <p className="text-body">+91 98765 43210</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center gap-4 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50"
                  whileHover={{ scale: 1.02, x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <p className="font-medium text-heading">Location</p>
                    <p className="text-body">Mumbai, India</p>
                  </div>
                </motion.div>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-heading">Connect Online</h4>
                <div className="flex gap-4">
                  <motion.a
                    href="#"
                    className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center hover:bg-blue-600/30 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Linkedin className="w-6 h-6 text-blue-600" />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="w-12 h-12 rounded-full bg-gray-600/20 flex items-center justify-center hover:bg-gray-600/30 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-6 h-6 text-gray-600" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form in Floating Section */}
          <motion.div 
            className="flex justify-center"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <FloatingSection
              shape="hexagon"
              size="xl"
              glowColor="hsl(var(--primary))"
            >
              <h3 className="text-2xl font-bold text-heading mb-6">Send a Message</h3>
              <form className="space-y-4 w-full max-w-md">
                <div className="grid grid-cols-2 gap-4">
                  <Input 
                    placeholder="First Name" 
                    className="bg-background/50 border-border/50"
                  />
                  <Input 
                    placeholder="Last Name" 
                    className="bg-background/50 border-border/50"
                  />
                </div>
                <Input 
                  type="email" 
                  placeholder="Your Email" 
                  className="bg-background/50 border-border/50"
                />
                <Input 
                  placeholder="Subject" 
                  className="bg-background/50 border-border/50"
                />
                <Textarea 
                  placeholder="Your Message" 
                  rows={4}
                  className="bg-background/50 border-border/50 resize-none"
                />
                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full group"
                >
                  <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </FloatingSection>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;