const timelineStops = [
  {
    milestone: "🎉 Grand Opening",
    event: "Inauguration Ceremony",
    date: "Day 1 – August 29, 2025",
    time: "10:00 AM – 12:30 AM",
    description: "Welcome address, lamp lighting, speeches by Principal and Chief Guest (MeitY/HP), felicitation, and a cultural performance."
  },
  {
    milestone: "🤖 AI-ML Insights",
    event: "Workshop – AI, ML by MeitY",
    date: "Day 1 – August 29, 2025",
    time: "12:20 PM – 1:30 PM",
    description: "1.5-hour interactive workshop on Artificial Intelligence, led by experts from MeitY."
  },
  // {
  //   milestone: "🧠 Brain Buzz",
  //   event: "Tech   Quiz",
  //   date: "Day 1 – August 30, 2025",
  //   time: "12:00 PM – 1:00 PM",
  //   description: "Fun and engaging tech challenges and quizzes running alongside the exhibition."
  // },
  {
    milestone: "⚡ HustleHub",
    event: "Hackathon",
    date: "Day 1 – August 29, 2025",
    time: "1:00 PM – 4:00 PM",
    description: "3-hour coding sprint to solve college  campus life problem ."
  },
  {
    milestone: "🤖 RoboRush F1",
    event: "Robot Race",
    date: "Day 1 – August 29, 2025",
    time: "2:00 PM – 3:00 PM",
    description: "Fast-paced F1-themed robot race at the Basketball Court."
  },
  // {
  //   milestone: "🚀 Future Showcase",
  //   event: "Tech Exhibition Launch",
  //   date: "Day 1 – August 30, 2025",
  //   time: "10:00 AM – 1:00 PM",
  //   description: "Opening of stalls and demos showcasing cutting-edge innovations."
  // },

  // {
  //   milestone: "🎮 Gaming Arena",
  //   event: "Esports Tournament by HP",
  //   date: "Day 1 – August 29, 2025",
  //   time: "11:00 AM – 4:00 PM",
  //   description: "Exciting gaming battles running parallel to other events."
  // },
  {
    milestone: "📸 Creative Spotlight",
    event: "PR & Creative Coverage",
    date: "Day 1 – August 29, 2025",
    time: "All Day",
    description: "On-ground coverage and highlight video creation capturing the best moments of Day 1."
  },
  
  {
    milestone: "🚀 Startup Sprint",
    event: "StartupXpress",
    date: "Day 2 – August 30, 2025",
    time: "1:00 AM – 4:00 PM",
    description: "3-hour challenge to create a brand and pitch your startup idea in Fr. Proost Hall."
  },
  {
    milestone: "🎥 Final Cut",
    event: "PR & Creative Final Video Presentation",
    date: "Day 2 – August 30, 2025",
    time: "2:00 PM – 2:30 PM",
    description: "Presentation of the final event highlight video in Fr. Proost Hall."
  },
  {
    milestone: "🏆 Closing Ceremony",
    event: "Prize Distribution & Cultural Performance",
    date: "Day 2 – August 30, 2025",
    time: "2:30 PM – 4:00 PM",
    description: "Sponsor address, cultural fusion performance, prize distribution for all competitions, and vote of thanks."
  }
];

const TimelineSection = () => {
  return (
    <section id="journey-timeline" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-6">
            📅 TechFest 2025 Schedule
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover all the exciting events, challenges, and moments that make TechFest unforgettable.

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