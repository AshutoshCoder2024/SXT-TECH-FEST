import { Mail, Instagram, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 px-4 border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {/* Brand Section */}
          <div className="space-y-6 flex flex-col items-center">
            <div className="space-y-4 flex flex-col items-center">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Xavier's TechByte Society
              </h3>
              <p className="text-muted-foreground">
                Code with purpose. Collaborate with passion. Create the future              </p>
            </div>

            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span> St. Xavier's College,Ranchi</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6 flex flex-col items-center">
            <h4 className="text-xl font-semibold text-foreground">Mission Control</h4>
            <div className="space-y-3 flex flex-col items-center">
              {[
                { label: "About TechFest", href: "#mission-briefing" },
                { label: " About Events", href: "#events" },
                { label: "Launch Timeline", href: "#journey-timeline" },
                { label: "Registation", href: "#boarding" }
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
          <div className="space-y-6 flex flex-col items-center">
            <h4 className="text-xl font-semibold text-foreground">Command Center</h4>
            <div className="space-y-4 flex flex-col items-center">
              <a
                href="mailto:xts@sxcran.org"
                className="flex items-center justify-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>xts@sxcran.org</span>
              </a>

              <a
                href="https://www.instagram.com/xaviers_techbyte.society/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 text-muted-foreground hover:text-secondary transition-colors group"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>@Xavier's TechByte Society</span>
              </a>

              <a
                href="tel:+9341013395"
                className="flex items-center justify-center gap-3 text-muted-foreground hover:text-accent transition-colors group"
              >
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>+91 9798535039</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border/30">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <p className="text-muted-foreground text-sm text-center">
              © {currentYear} Xavier's TechByte Society. All rights reserved.
              <span className="ml-2">Made with 💫 for TechFest 2025</span>
            </p>

            {/* <a
              href="https://www.instagram.com/ashutosh_sahu_00"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center mt-5 justify-center gap-3 text-muted-foreground hover:text-secondary transition-colors group text-centermt-12 pt-8 border-t border-border/30 "
            >
              <span>Designed & Developed by Tech team</span>
              <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a> */}
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Twinkling Stars */}
        {[...Array(20)].map((_, i) => (
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