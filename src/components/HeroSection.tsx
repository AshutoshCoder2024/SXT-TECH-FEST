import { Button } from "@/components/ui/button";
import techClubLogo from "@/assets/tech-club-logo.png";
import collegeLogo from "@/assets/college-logo.png";

const HeroSection = () => {
  const scrollToRegistration = () => {
    document.getElementById('boarding')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Hero Background - Keep this but 
      <div
        className="absolute inset-0 opacity-30"
        style={{
          // backgroundImage: `url(${heroCosmicNebula})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />

      {/* Floating Logos with improved animation timing */}
      <div className="absolute top-20 left-2 md:top-24 md:left-4 cosmic-float">
        <img
          src={techClubLogo}
          alt="Xavier's TechByte Society Logo"
          className="w-12 h-12 md:w-24 md:h-24 cosmic-glow"
        />
      </div>

      <div className="absolute top-20 right-2 md:top-24 md:right-4 cosmic-float" style={{ animationDelay: '2s' }}>
        <img
          src={collegeLogo}
          alt="College Logo"
          className="w-12 h-12 md:w-24 md:h-24 cosmic-glow"
        />
      </div>

      {/* Main Content - Revised copy and structure */}
      <div className="relative z-10 text-center top-8 space-y-6 md:space-y-8 px-4 max-w-4xl mx-auto">
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl mt-12 mb-12 md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            INNOVERSE TECHFEST-2025
          </h1>
          <div className="cosmic-glass p-4 mb-12 rounded-lg mx-auto max-w-2xl">
            <p className="text-xl md:text-2xl text-foreground/90 font-small">
              Code • Collaborate • Create 🚀
            </p>
            <p className="text-lg md:text-xl text-muted-foreground mt-2">
              SXC-TECHFEST-2025
            </p>
          </div>
        </div>

        <div className="space-y-4 mt-12">
          {/* Enhanced subtitle */}
          <h2 className="text-2xl md:text-3xl text-foreground/80">
            Where Ideas Turn Into Impact
          </h2>
          {/* More descriptive body text */}
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Dive into coding, creativity, and tech magic — the ultimate celebration of innovation and skills.
          </p>
        </div>

        {/* CTA Button with thematic text */}
        <div className="pt-8">
          <Button
            size="lg"
            className="cosmic-button text-lg px-8 py-6 hover:scale-105 transition-all duration-300"
            asChild
          >
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfFP_KI1Fa1_Uf9UZMdbdfiI_9Z_JKzOo5QD06HCHZm7_5IIA/viewform" target="_blank" rel="noopener noreferrer">
              🚀 Blast Off & Register
            </a>
          </Button>   

        </div>


        {/* Event Dates - No changes needed, it's clear and effective */}
        <div className="cosmic-glass p-4 rounded-lg inline-block">
          <p className="text-sm text-muted-foreground">EVENTS DATES</p>
          <p className="text-xl font-semibold text-foreground">August 29-30, 2025</p>
        </div>
      </div>

      {/* Animated Elements - No changes, they are well implemented */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
    </section>
  );
};

export default HeroSection;