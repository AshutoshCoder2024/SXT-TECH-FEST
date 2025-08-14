import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "About Techfest", href: "#mission-briefing" },
  { label: "Events", href: "#events" },
  { label: "Countdown", href: "#countdown" },
  { label: "Timeline", href: "#journey-timeline" },
  { label: "FAQ", href: "#faq" },
  { label: "Register", href: "#boarding" }
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Backdrop overlay when mobile menu is open */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-all duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isOpen ? 'cosmic-glass border-b border-border/30 backdrop-blur-md' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <button 
            onClick={() => scrollToSection('#hero')}
            className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hover:scale-105 transition-transform"
          >
            Xavier's TechByte Society
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground/80 hover:text-primary transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:block">
            <Button 
              className="cosmic-button"
              onClick={() => scrollToSection('#boarding')}
            >
              🚀 Join TechFest
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className={`py-4 space-y-4 border-t border-border/30 transition-all duration-500 ease-in-out transform ${
            isOpen ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
          }`}>
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-2 text-foreground/80 hover:text-primary hover:bg-primary/5 transition-all duration-200 rounded transform hover:translate-x-2"
                style={{
                  transitionDelay: `${index * 50}ms`
                }}
              >
                {item.label}
              </button>
            ))}
            
            {/* Mobile CTA */}
            <div className="px-4 pt-2">
              <Button 
                className="cosmic-button w-full transform transition-all duration-300 hover:scale-[1.02]"
                onClick={() => scrollToSection('#boarding')}
                style={{
                  transitionDelay: `${navItems.length * 50}ms`
                }}
              >
                🚀 Join Techfest
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Aurora Background Effect */}
      <div className="absolute inset-0 -z-10 aurora-bg opacity-20" />
    </nav>
    </>
  );
};

export default Navigation;