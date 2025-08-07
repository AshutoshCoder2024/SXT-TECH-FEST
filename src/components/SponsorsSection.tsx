const sponsors = [
  {
    name: "TechNova",
    description: "Leading AI Innovation Partner",
    tier: "Galaxy Sponsor"
  },
  {
    name: "CodeGalaxy",
    description: "Developer Tools & Platform",
    tier: "Nebula Sponsor"
  },
  {
    name: "AstroLabs", 
    description: "Cloud Computing Solutions",
    tier: "Star Sponsor"
  },
  {
    name: "QuantumSoft",
    description: "Quantum Computing Research",
    tier: "Planet Sponsor"
  },
  {
    name: "CyberSpace Inc",
    description: "Cybersecurity & Privacy",
    tier: "Satellite Sponsor"
  },
  {
    name: "DataVerse",
    description: "Big Data Analytics",
    tier: "Satellite Sponsor"
  }
];

const SponsorsSection = () => {
  return (
    <section id="sponsors" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent mb-6">
            Mission Supporters
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A big thank you to our incredible sponsors and partners who help power this interstellar mission. 
            Your support makes our hackathon journey possible!
          </p>
        </div>

        {/* Sponsor Categories */}
        <div className="space-y-12">
          {/* Galaxy Tier */}
          <div className="text-center space-y-8">
            <h3 className="text-2xl font-bold text-primary">🌌 Galaxy Sponsors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sponsors.filter(s => s.tier === "Galaxy Sponsor").map((sponsor, index) => (
                <div key={index} className="cosmic-glass p-8 rounded-xl cosmic-glow group cursor-pointer">
                  <div className="space-y-4">
                    <div className="text-4xl cosmic-float">🚀</div>
                    <h4 className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {sponsor.name}
                    </h4>
                    <p className="text-muted-foreground">{sponsor.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Nebula Tier */}
          <div className="text-center space-y-8">
            <h3 className="text-xl font-bold text-secondary">☁️ Nebula Sponsors</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {sponsors.filter(s => s.tier === "Nebula Sponsor").map((sponsor, index) => (
                <div key={index} className="cosmic-glass p-6 rounded-lg cosmic-glow group cursor-pointer">
                  <div className="space-y-3">
                    <div className="text-3xl cosmic-float">⭐</div>
                    <h4 className="text-xl font-bold text-foreground group-hover:text-secondary transition-colors">
                      {sponsor.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">{sponsor.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Tiers */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {sponsors.filter(s => !["Galaxy Sponsor", "Nebula Sponsor"].includes(s.tier)).map((sponsor, index) => (
              <div key={index} className="cosmic-glass p-4 rounded-lg cosmic-glow group cursor-pointer text-center">
                <div className="space-y-2">
                  <div className="text-2xl cosmic-float">🛰️</div>
                  <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                    {sponsor.name}
                  </h4>
                  <p className="text-xs text-muted-foreground">{sponsor.tier}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership CTA */}
        <div className="text-center mt-16">
          <div className="cosmic-glass p-8 rounded-xl inline-block">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Want to join our mission?</h3>
              <p className="text-muted-foreground">Partner with us to support the next generation of tech innovators!</p>
              <a 
                href="mailto:partnerships@techtitansclub.edu" 
                className="inline-block cosmic-button px-6 py-3 rounded-lg text-foreground hover:scale-105 transition-transform"
              >
                🤝 Become a Sponsor
              </a>
            </div>
          </div>
        </div>

        {/* Orbiting Logos Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-primary/30 rounded-full"
              style={{
                left: `${50}%`,
                top: `${50}%`,
                animation: `orbit ${20 + i * 3}s linear infinite`,
                transformOrigin: `${150 + i * 20}px`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
