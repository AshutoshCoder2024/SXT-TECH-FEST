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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare the data as a JSON object, which is required for the fetch API to work correctly with formsubmit.co
    const data = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      _captcha: "false",
      _template: "box",
      _subject: "🚀 New Contact Form Submission!"
    };

    try {
      const res = await fetch("https://formsubmit.co/ajax/ashutoshsahu9601@gmail.com", {
        method: "POST",
        headers: {
          // This header is crucial for sending JSON data
          "Content-Type": "application/json",
          // This header tells formsubmit.co to respond with JSON
          Accept: "application/json"
        },
        body: JSON.stringify(data), // Send the data as a JSON string
      });

      if (res.ok) {
        alert("🚀 Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        // You can get more details about the error from the response
        const errorData = await res.json();
        console.error("Submission error:", errorData);
        alert(`❌ Something went wrong. Try again! Details: ${errorData.message || res.statusText}`);
      }
    } catch (error) {
      console.error("Network or submission error:", error);
      alert("❌ Network error. Please try again.");
    }

    setIsSubmitting(false);
  };

  return (
    <section id="command-center" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-accent via-secondary to-primary bg-clip-text text-transparent mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground">
            Have a question or idea? Let’s connect and make TechFest even better.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="cosmic-glass p-8 rounded-2xl cosmic-glow">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">Send Us a Messag </h3>
                <p className="text-muted-foreground">We’d love to hear from you — drop your thoughts below</p>
              </div>

              {/* Name Input */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Your Name * 
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
                   Email Address  *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="cosmic-glass border-border/50 focus:border-primary bg-card/50"
                  placeholder="xyz@gmail.com"
                />
              </div>

              {/* Message Textarea */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Your Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="cosmic-glass border-border/50 focus:border-primary bg-card/50 resize-none"
                  placeholder="Tell us about your  message..."
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
                    Sending Message...
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

          {/* Contact Info Panel */}
          <div className="space-y-8">
            <div className="cosmic-glass p-8 rounded-2xl cosmic-glow">
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Us</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="cosmic-glass p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Email</div>
                    <a href="mailto:xts@sxcran.org" className="text-primary hover:text-primary/80">
                      xts@sxcran.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="cosmic-glass p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Direct Communication</div>
                    <a href="tel:+9341013395" className="text-secondary hover:text-secondary/80">
                      +91 941013395
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="cosmic-glass p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Address</div>
                    <div className="text-muted-foreground">
                      (St. Xavier's College, Ranchi)<br />
                      (Dr. Camil Bulcke Path, Pathalkudwa, Nayatoli)<br />
                      (Ranchi, Jharkhand 834001, India)
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* Quick Navigation */}
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
                    key={index} // Added a unique key for each item, which is a best practice in React
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

        {/* Radar Animation */}
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