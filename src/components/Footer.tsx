import { Mail, Instagram, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 px-4 border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Xavier's TechByte Society
              </h3>
              <p className="text-muted-foreground">
                Exploring the cosmos of innovation, one line of code at a time.
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span> St. Xavier's College,Ranchi</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-foreground">Mission Control</h4>
            <div className="space-y-3">
              {[
                { label: "Mission Briefing", href: "#mission-briefing" },
                { label: "Space Missions", href: "#events" },
                { label: "Launch Timeline", href: "#journey-timeline" },
                { label: "Board Spaceship", href: "#boarding" }
              ].map((link, index) => (
                <button
                  key={index}
                  onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-foreground">Command Center</h4>
            <div className="space-y-4">
              <a
                href="mailto:techtitansclub@yourcollege.edu"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>techtitansclub@yourcollege.edu</span>
              </a>

              <a
                href="https://instagram.com/techtitansclub"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-secondary transition-colors group"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>@techtitansclub</span>
              </a>

              <a
                href="tel:+91XXXXXXXXXX"
                className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group"
              >
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>+91 XXXX-XXXX-XX</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Xavier's TechByte Society. All rights reserved.
              <span className="ml-2">Made with 💫 for TechFest 2025</span>
            </p>

            <div className="flex items-center gap-2 text-sm">
              <span className="text-muted-foreground">Crafted by</span>
              <span className="text-primary font-semibold">Ashutosh Sahu</span>
              <span className="text-2xl">🚀</span>
            </div>

          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Twinkling Stars */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full cosmic-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;