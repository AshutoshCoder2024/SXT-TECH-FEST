import { Button } from "@/components/ui/button";
import techClubLogo from "@/assets/tech-club-logo.png";
import collegeLogo from "@/assets/college-logo.png";
import heroNebula from "@/assets/hero-nebula.jpg";

const HeroSection = () => {
  const scrollToRegistration = () => {
    document.getElementById('boarding')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${heroNebula})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Floating Logos */}
      <div className="absolute top-8 left-8 cosmic-float">
        <img 
          src={techClubLogo} 
          alt="Tech Titans Club Logo" 
          className="w-20 h-20 md:w-24 md:h-24 cosmic-glow"
        />
      </div>
      
      <div className="absolute top-8 right-8 cosmic-float" style={{ animationDelay: '2s' }}>
        <img 
          src={collegeLogo} 
          alt="College Logo" 
          className="w-20 h-20 md:w-24 md:h-24 cosmic-glow"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center space-y-8 px-4 max-w-4xl mx-auto">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          Xavier's TechByte Society
          </h1>
          
          <div className="cosmic-glass p-4 rounded-lg mx-auto max-w-2xl">
            <p className="text-xl md:text-2xl text-foreground/90 font-medium">
              code • Collaborat • create 🚀
            </p>
            <p className="text-lg md:text-xl text-muted-foreground mt-2">
              TechFest 2025
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl text-foreground/80">
            Welcome aboard the Xavier's TechByte Society' mothership!
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore, innovate, and elevate your potential at the Annual TechFest 2025 
            held at  St. Xavier's College
          </p>
        </div>

        {/* CTA Button */}
        <div className="pt-8">
          <Button 
            size="lg" 
            className="cosmic-button text-lg px-8 py-6 hover:scale-105 transition-all duration-300"
            onClick={scrollToRegistration}
          >
            🚀 Register Now
          </Button>
        </div>

        {/* Event Dates */}
        <div className="cosmic-glass p-4 rounded-lg inline-block">
          <p className="text-sm text-muted-foreground">MISSION DATES</p>
          <p className="text-xl font-semibold text-foreground">August 28-29, 2025</p>
        </div>
      </div>

      {/* Animated Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Particles */}
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
    </section>
  );
};

export default HeroSection;