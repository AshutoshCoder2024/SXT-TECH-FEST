import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
    
    // Show success message (you can add toast here)
    alert('Message sent successfully! 🚀');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="command-center" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-accent via-secondary to-primary bg-clip-text text-transparent mb-6">
            Command Center
          </h2>
          <p className="text-xl text-muted-foreground">
            Mission Control is standing by. Send us your transmission!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="cosmic-glass p-8 rounded-2xl cosmic-glow">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">Send Transmission</h3>
                <p className="text-muted-foreground">Reach out to our mission specialists</p>
              </div>

              {/* Name Input */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Astronaut Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="cosmic-glass border-border/50 focus:border-primary bg-card/50"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Space Communicator *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="cosmic-glass border-border/50 focus:border-primary bg-card/50"
                  placeholder="astronaut@galaxy.com"
                />
              </div>

              {/* Message Textarea */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Mission Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="cosmic-glass border-border/50 focus:border-primary bg-card/50 resize-none"
                  placeholder="Tell us about your mission objectives..."
                />
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full cosmic-button text-lg py-6 group"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin w-5 h-5 border-2 border-foreground border-t-transparent rounded-full mr-3" />
                    Launching Message...
                  </>
                ) : (
                  <>
                    🚀 Send Message
                    <Send className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Mission Control Info */}
            <div className="cosmic-glass p-8 rounded-2xl cosmic-glow">
              <h3 className="text-2xl font-bold text-foreground mb-6">Mission Control HQ</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="cosmic-glass p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Email Transmission</div>
                    <a href="mailto:techtitansclub@yourcollege.edu" className="text-primary hover:text-primary/80">
                      techtitansclub@yourcollege.edu
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="cosmic-glass p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Direct Communication</div>
                    <a href="tel:+91XXXXXXXXXX" className="text-secondary hover:text-secondary/80">
                      +91 XXXX-XXXX-XX
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="cosmic-glass p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Launch Location</div>
                    <div className="text-muted-foreground">
                      [Your College Name]<br />
                      [College Address]<br />
                      [City, State - PIN]
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="cosmic-glass p-6 rounded-xl cosmic-glow">
              <h4 className="text-lg font-bold text-foreground mb-4">Quick Navigation</h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Events", href: "#events" },
                  { label: "Register", href: "#boarding" },
                  { label: "Timeline", href: "#journey-timeline" },
                  { label: "FAQ", href: "#faq" }
                ].map((link, index) => (
                  <button
                    key={index}
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-left p-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    → {link.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Background Radar Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-96 h-96 border border-primary rounded-full animate-ping" />
            <div className="absolute inset-8 border border-secondary rounded-full animate-ping" style={{ animationDelay: '1s' }} />
            <div className="absolute inset-16 border border-accent rounded-full animate-ping" style={{ animationDelay: '2s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;