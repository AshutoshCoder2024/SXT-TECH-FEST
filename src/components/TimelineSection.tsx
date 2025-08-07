const timelineStops = [
  {
    milestone: "🌍 Earth",
    event: "Registration Opens",
    date: "September 1, 2025",
    description: "Get ready to launch! Fill out the Google Form and secure your boarding pass to the TechFest galaxy."
  },
  {
    milestone: "☁️ Cloud Station",
    event: "Workshops Begin",
    date: "September 10–12, 2025",
    description: "Join expert-led workshops and tech talks floating in the clouds of knowledge and innovation."
  },
  {
    milestone: "🌙 Moon Base",
    event: "Hackathon Commences",
    date: "September 15–16, 2025",
    description: "Collaborate with fellow astronauts to solve real-world problems in a high-energy, moonlit hackathon!"
  },
  {
    milestone: "🔴 Mars Colony",
    event: "Finale + Awards",
    date: "September 17, 2025",
    description: "The red planet marks the grand finale! Showcase your innovations and celebrate your achievements."
  }
];

const TimelineSection = () => {
  return (
    <section id="journey-timeline" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-6">
            🛰️ Mission Journey Timeline
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Track your interstellar journey through TechFest 2025 as we launch from Earth and 
            travel across the cosmos of innovation!
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-accent rounded-full opacity-30" />

          {/* Timeline Items */}
          <div className="space-y-16">
            {timelineStops.map((stop, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-primary to-secondary rounded-full border-4 border-background z-10 cosmic-glow animate-pulse" />

                {/* Content */}
                <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="cosmic-glass p-6 rounded-xl cosmic-glow group cursor-pointer">
                      <div className="space-y-4">
                        {/* Milestone */}
                        <div className="flex items-center gap-3">
                          <span className="text-3xl cosmic-float">{stop.milestone.split(' ')[0]}</span>
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {stop.milestone.split(' ').slice(1).join(' ')}
                          </h3>
                        </div>

                        {/* Event */}
                        <h4 className="text-2xl font-semibold text-secondary">
                          {stop.event}
                        </h4>

                        {/* Date */}
                        <p className="text-accent font-medium">
                          {stop.date}
                        </p>

                        {/* Description */}
                        <p className="text-muted-foreground leading-relaxed">
                          {stop.description}
                        </p>
                      </div>

                      {/* Hover Glow */}
                      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5" />
                      </div>
                    </div>
                  </div>

                  {/* Spacer for alignment */}
                  <div className="hidden md:block w-2/12" />
                </div>

                {/* Rocket Trail (only on larger screens) */}
                {index < timelineStops.length - 1 && (
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-16 w-8 h-8 text-2xl cosmic-float opacity-50">
                    🚀
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Background Satellites */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute text-4xl opacity-20"
              style={{
                left: `${20 + i * 20}%`,
                top: `${30 + (i % 2) * 40}%`,
                animation: `orbit ${20 + i * 5}s linear infinite`,
              }}
            >
              🛰️
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;