import { Calendar, Clock, MapPin } from "lucide-react";

const events = [
  {
    title: "🤖 AI Battle",
    description: "Compete to build the smartest AI bot in an intense coding arena.",
    date: "AUGUST 28, 2025",
    time: "10:00 AM - 12:00 PM",
    location: "Mission Control Lab (CSE Block)",
    icon: "🤖"
  },
  {
    title: "💻 Code Odyssey",
    description: "A 2-hour space-themed hackathon where your code controls a simulated spacecraft.",
    date: "AUGUST 28, 2025",
    time: "1:00 PM - 3:00 PM",
    location: "Launch Pad Auditorium",
    icon: "💻"
  },
  {
    title: "🚁 Drone Quest",
    description: "Fly your custom drone through a space station obstacle course.",
    date: "AUGUST 29, 2025",
    time: "10:00 AM - 12:00 PM",
    location: "Galaxy Field (College Ground)",
    icon: "🚁"
  },
  {
    title: "🧠 AstroQuiz",
    description: "Showcase your tech knowledge in this galaxy-scale quiz competition.",
    date: "AUGUST 29, 2025",
    time: "2:00 PM - 4:00 PM",
    location: "Nebula Hall (Seminar Room)",
    icon: "🧠"
  },
  {
    title: "🛰️ UI/UX Orbit",
    description: "Design a futuristic space app interface using Figma in limited time.",
    date: "AUGUST 30, 2025",
    time: "11:00 AM - 1:00 PM",
    location: "Design Dock (Lab 2)",
    icon: "🛰️"
  }
];

const EventsSection = () => {
  return (
    <section id="events" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent mb-6">
            🚀 Space Missions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our exciting intergalactic missions (tech events) where innovation meets adventure. 
            Each mission is designed to test your skills, creativity, and passion for tech!
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div 
              key={index} 
              className="event-card group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Event Icon */}
              <div className="text-4xl mb-4 cosmic-float">
                {event.icon}
              </div>

              {/* Event Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {event.description}
                </p>

                {/* Event Details */}
                <div className="space-y-3 pt-4 border-t border-border/30">
                  <div className="flex items-center gap-3 text-sm">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-foreground/80">{event.date}</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-sm">
                    <Clock className="w-4 h-4 text-secondary" />
                    <span className="text-foreground/80">{event.time}</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="w-4 h-4 text-accent" />
                    <span className="text-foreground/80">{event.location}</span>
                  </div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10" />
              </div>
            </div>
          ))}
        </div>

        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Orbiting Satellites */}
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-secondary rounded-full"
              style={{
                left: `${20 + i * 30}%`,
                top: `${30 + i * 20}%`,
                animation: `orbit ${10 + i * 5}s linear infinite`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;