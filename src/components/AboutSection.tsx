const AboutSection = () => {
  return (
    <section id="mission-briefing" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mb-6">
            About the TechFest
          </h2>
        </div>

        {/* Content Card */}
        <div className="cosmic-glass p-8 md:p-12 rounded-2xl cosmic-glow">
          <div className="space-y-8">
            <div className="cosmic-float">
              <div className="text-6xl mb-6">🚀</div>
            </div>
            
            <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
              <p>
                 Welcome to the <span className="text-primary font-semibold">biggest tech celebration</span> of 2025! 
                Xavier's TechByte Society proudly presents TechFest 2025 – a place where ideas, skills, and creativity come together.
              </p>
              
              <p>
                 Our goal is to bring <span className="text-secondary font-semibold">tech lovers, creators, and innovators</span> under one roof. 
                 Whether you're a beginner or an expert, this fest has something exciting for you.
              </p>
              
              <p>
               Get ready for <span className="text-accent font-semibold">two days of learning, competitions, and networking</span>. 
                Take part in coding challenges, interactive sessions, and meet people who share your passion for technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="cosmic-glass p-6 rounded-lg">
                <div className="text-3xl mb-3">🌟</div>
                 <h3 className="text-xl font-semibold text-foreground mb-2">Learn</h3>
                 <p className="text-muted-foreground">Workshops and tech talks from experts</p>
               </div>
              
               <div className="cosmic-glass p-6 rounded-lg">
                 <div className="text-3xl mb-3">🤝</div>
                 <h3 className="text-xl font-semibold text-foreground mb-2">Collaborate</h3>
                 <p className="text-muted-foreground">Team up and work on amazing projects</p>
               </div>
              
               <div className="cosmic-glass p-6 rounded-lg">
                 <div className="text-3xl mb-3">🏆</div>
                 <h3 className="text-xl font-semibold text-foreground mb-2">Compete</h3>
                 <p className="text-muted-foreground">show your skills and win prizes</p>
               </div>
            </div>
          </div>
        </div>
        {/* Floating Astronaut */}
        <div className="absolute top-1/2 -right-20 hidden lg:block cosmic-float" style={{ animationDelay: '1s' }}>
          <div className="text-8xl opacity-30">💻</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

