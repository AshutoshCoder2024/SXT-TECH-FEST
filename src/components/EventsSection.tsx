import { Calendar, Clock, MapPin, Trophy, ScrollText, List, GraduationCap } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
const events = [
  {
    title: "⚡ HustleHub (Hackathon)",
    description: "3 Hours • One Problem • Infinite Hustle — Code, create, and innovate under pressure to solve real-world campus problems.",
    date: "TBD",
    time: "3 Hours",
    location: "College Campus - CSE Block",
    icon: "⚡",
    details: {
      overview:
        "A high-energy hackathon where teams tackle real-world campus challenges and deliver working solutions in just 3 hours. Expect rapid brainstorming, intense coding, and a surprise mid-event twist to test adaptability.",
      problemStatements: [
        {
          title: "Smart Attendance System",
          core: [
            "Mark attendance for students",
            "View attendance records by date"
          ],
          optional: [
            "Generate attendance analytics with visual charts",
            "Send automated email/SMS alerts for low attendance",
            "Export data in CSV or PDF formats"
          ]
        },
        {
          title: "College Event Hub",
          core: [
            "Event listing with date, time, and description",
            "Online event registration"
          ],
          optional: [
            "Countdown timers for upcoming events",
            "Google Calendar API integration",
            "Event filters by department or category",
            "Capacity management for registrations"
          ]
        },
        {
          title: "Lost & Found Hub",
          core: [
            "Post lost/found items with basic details",
            "Search or browse items"
          ],
          optional: [
            "Image upload for better identification",
            "Category/date/location-based search filters",
            "Update item status to 'Claimed' or 'Still Missing'"
          ]
        },
        {
          title: "Anonymous Feedback Box",
          core: [
            "Submit feedback without revealing identity",
            "Admin dashboard to view feedback"
          ],
          optional: [
            "Tag feedback by topic",
            "Visual summary charts for trends",
            "Keyword alerts for urgent issues",
            "Simple encryption for message storage"
          ]
        },
        {
          title: "Student Skill Exchange",
          core: [
            "List skills offered and skills needed",
            "Search and browse available skill listings"
          ],
          optional: [
            "User profiles with ratings & reviews",
            "Direct messaging for collaboration",
            "Filters for department or location"
          ]
        }
      ],
      judgingCriteria: [
        "Creativity & Innovation – 25 points",
        "Functionality & Execution – 25 points",
        "User Experience & Design – 20 points",
        "Feasibility & Relevance – 20 points",
        "Bonus Features – 10 points"
      ],
      prizes: [
        "🥇 1st Place: Certificate + Premium Tech Goodies",
        "🥈 2nd Place: Certificate + Goodies",
        "🥉 3rd Place: Certificate + Goodies"
      ],
      rules: [
        "Teams of 2–3 members",
        "Bring your own laptop with required software",
        "Coding experience recommended",
        "You may choose any problem statement to implement",
        "A surprise bonus feature will be revealed mid-event"
      ],
      requirements: [
        "Laptop with reliable internet access",
        "Experience in HTML, CSS, JavaScript or app frameworks",
        "Basic knowledge of APIs and database handling",
        "Ability to work under time pressure",
        "At least one member skilled in UI/UX design"
      ],
      registration: {
        fee: "Free",
        deadline: "TBD"
      }
    }
  },
  {
    title: "🚀 Startup Xpress (Brainstorm. Build. Pitch)",
    description: "Turn your idea into a brand in 3 hours — create, design, and pitch to win.",
    date: "TBD",
    time: "3 Hours",
    location: "Innovation Hub",
    icon: "🚀",
    details: {
      overview:
        "An entrepreneurial challenge where teams develop a product concept, design a brand, create a website, and produce a short advertisement — all within 3 hours. Then, pitch your startup to our panel of judges.",
      coreTasks: [
        "Create a brand name & tagline",
        "Write a clear mission statement",
        "Design a professional digital logo",
        "Build a landing page or website",
        "Produce a 30–60 second ad video"
      ],
      bonusChallenges: [
        "Include a social impact element",
        "Change your target audience mid-event",
        "Adapt your product for a sudden market change",
        "Collaborate with another participating team",
        "Add a unique tech feature"
      ],
      pitch: {
        duration: "5–7 minutes",
        tasks: [
          "Introduce your product & vision",
          "Showcase your website and logo",
          "Play your ad video",
          "Answer questions from judges"
        ]
      },
      prizes: [
        "🥇 1st Place: Certificate + Entrepreneur Starter Kit",
        "🥈 2nd Place: Certificate + Goodies",
        "🥉 3rd Place: Certificate + Goodies"
      ],
      rules: [
        "Teams of 2–4 members",
        "Laptops & internet access required",
        "All tasks must be finished within time",
        "Bonus challenges are optional but give extra points"
      ],
      requirements: [
        "Laptop with design & web tools installed (Canva, Figma, Wix, etc.)",
        "Basic web development or design skills",
        "Creative thinking & storytelling ability",
        "Presentation and public speaking skills"
      ],
      registration: {
        fee: "Free",
        deadline: "TBD"
      }
    }
  },
  {
    title: "🤖 RoboRush F1",
    description: "Build, race, and dominate the F1-inspired robot track.",
    date: "TBD",
    time: "TBD",
    location: "College Ground - Robo Track",
    icon: "🤖",
    details: {
      overview:
        "A thrilling robotics race where teams compete with their own line-following or remote-controlled robots on an F1-style track with sharp curves, loops, and speed zones.",
      rounds: [
        "Round 1: Time Trials – One lap to qualify",
        "Round 2: Knockouts – Head-to-head races",
        "Round 3: Final Race – Top 4 race together"
      ],
      prizes: [
        "🥇 1st Place: Certificate + Robotics Kit",
        "🥈 2nd Place: Certificate + Goodies",
        "🥉 3rd Place: Certificate + Goodies"
      ],
      rules: [
        "Teams of 2–3 members",
        "Robots must meet safety requirements",
        "No external assistance during race",
        "Three rounds in total"
      ],
      requirements: [
        "Functional robot (line-follower or RC)",
        "Tools for quick repairs",
        "Basic electronics & mechanical skills",
        "Knowledge of motor control & sensors"
      ],
      registration: {
        fee: "Free",
        deadline: "TBD"
      }
    }
  },
  {
    title: "🎥 FestFrame (PR & Creative Challenge)",
    description: "Capture the spirit of TechFest and create an unforgettable highlight video.",
    date: "TechFest 3 Days",
    time: "All Day",
    location: "Campus",
    icon: "🎥",
    details: {
      overview:
        "Document the magic of TechFest! Film, edit, and present a short creative video capturing the best moments, stories, and emotions of the event.",
      phases: [
        {
          phase: "Filming (Day 1 & 2)",
          tasks: [
            "Capture event highlights & crowd energy",
            "Interview participants & guests",
            "Film B-roll of decorations & activities",
            "Experiment with creative angles and shots"
          ]
        },
        {
          phase: "Editing (After Day 2)",
          tasks: [
            "Add event title & TechFest logo animation",
            "Use background music to set mood",
            "Smooth transitions & pacing",
            "Include at least 2 creative visual effects"
          ]
        },
        {
          phase: "Presentation (Day 3)",
          tasks: [
            "Submit final video",
            "Judges score creativity, storytelling, and execution"
          ]
        }
      ],
      judgingCriteria: [
        "Creativity & Originality – 20 points",
        "Storytelling Flow – 20 points",
        "Technical Execution – 20 points",
        "Use of Effects & Transitions – 20 points"
      ],
      prizes: [
        "🥇 1st Place: Certificate + Filmmaker's Kit",
        "🥈 2nd Place: Certificate + Goodies",
        "🥉 3rd Place: Certificate + Goodies"
      ],
      rules: [
        "Individual or team participation",
        "All footage must be captured during TechFest",
        "At least 2 creative effects required",
        "Final submission by Day 3"
      ],
      requirements: [
        "Camera or smartphone with good video quality",
        "Video editing software (CapCut, Premiere Pro, etc.)",
        "Basic cinematography skills",
        "Creative eye for storytelling"
      ],
      registration: {
        fee: "Free",
        deadline: "Day 1 of TechFest"
      }
    }
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
              <Dialog>
                <DialogTrigger asChild>
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

                      <Button variant="secondary" className="w-full mt-4">
                        Know More
                      </Button>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-[95vw] md:max-w-2xl max-h-[90vh] overflow-y-auto p-0">
                  <div className="sticky top-0 bg-background z-50 px-6 py-4 border-b flex items-center justify-between">
                    <DialogTitle className="text-xl md:text-2xl flex items-center gap-2">
                      {event.icon} {event.title}
                    </DialogTitle>
                    <DialogTrigger asChild>
                      <button 
                        className="rounded-full p-2.5 bg-secondary/10 hover:bg-secondary/20 transition-all duration-200 border border-border/50 hover:border-border flex items-center justify-center"
                        aria-label="Close dialog"
                      >
                        <svg width="14" height="14" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-foreground/70 hover:text-foreground transition-colors">
                          <path d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                        </svg>
                      </button>
                    </DialogTrigger>
                  </div>
                  
                  <div className="space-y-6 p-6">
                    {/* Overview */}
                    <div className="space-y-2 p-3 md:p-4 bg-primary/5 rounded-lg">
                      <h4 className="font-semibold flex items-center gap-2 text-base md:text-lg">
                        <ScrollText className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                        Overview
                      </h4>
                      <p className="text-muted-foreground text-sm md:text-base">
                        {event.details.overview}
                      </p>
                    </div>

                    {/* Event Specific Content */}
                    {event.details.problemStatements && (
                      <div className="space-y-2 p-3 md:p-4 bg-secondary/5 rounded-lg">
                        <h4 className="font-semibold flex items-center gap-2 text-base md:text-lg">
                          <List className="w-4 h-4 md:w-5 md:h-5 text-secondary" />
                          Problem Statements
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {event.details.problemStatements.map((problem, index) => (
                            <div key={index} className="space-y-2 p-3 bg-background/50 rounded-md">
                              <h5 className="font-medium text-sm md:text-base">{problem.title}</h5>
                              <div className="space-y-2">
                                <div>
                                  <p className="text-xs md:text-sm font-medium text-primary">Core Features:</p>
                                  <ul className="list-disc list-inside text-xs md:text-sm text-muted-foreground">
                                    {problem.core.map((item, idx) => (
                                      <li key={idx}>{item}</li>
                                    ))}
                                  </ul>
                                </div>
                                <div>
                                  <p className="text-xs md:text-sm font-medium text-secondary">Optional Features:</p>
                                  <ul className="list-disc list-inside text-xs md:text-sm text-muted-foreground">
                                    {problem.optional.map((item, idx) => (
                                      <li key={idx}>{item}</li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {event.details.judgingCriteria && (
                      <div className="space-y-2 p-3 md:p-4 bg-accent/5 rounded-lg">
                        <h4 className="font-semibold flex items-center gap-2 text-base md:text-lg">
                          <Trophy className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                          Judging Criteria
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {event.details.judgingCriteria.map((criteria, index) => (
                            <li key={index} className="text-sm md:text-base text-muted-foreground bg-background/50 p-2 rounded-md">
                              {criteria}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {event.details.phases && (
                      <div className="space-y-2 p-3 md:p-4 bg-primary/5 rounded-lg">
                        <h4 className="font-semibold flex items-center gap-2 text-base md:text-lg">
                          <List className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                          Event Phases
                        </h4>
                        <div className="space-y-4">
                          {event.details.phases.map((phase, index) => (
                            <div key={index} className="p-3 bg-background/50 rounded-md">
                              <h5 className="font-medium text-sm md:text-base mb-2">{phase.phase}</h5>
                              <ul className="list-disc list-inside text-sm md:text-base text-muted-foreground">
                                {phase.tasks.map((task, idx) => (
                                  <li key={idx}>{task}</li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Requirements */}
                    <div className="space-y-2 p-3 md:p-4 bg-primary/5 rounded-lg">
                      <h4 className="font-semibold flex items-center gap-2 text-base md:text-lg">
                        <GraduationCap className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                        Requirements
                      </h4>
                      <ul className="list-disc list-inside space-y-1">
                        {event.details.requirements.map((req, index) => (
                          <li key={index} className="text-sm md:text-base text-muted-foreground">
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Registration */}
                    <div className="space-y-3 bg-secondary/10 p-4 rounded-lg mt-6">
                      <h4 className="font-semibold text-base md:text-lg flex items-center justify-center">
                        Registration Details
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
                        <div className="p-3 bg-background/50 rounded-md">
                          <p className="text-sm md:text-base font-medium">Fee</p>
                          <p className="text-muted-foreground">{event.details.registration.fee}</p>
                        </div>
                        <div className="p-3 bg-background/50 rounded-md">
                          <p className="text-sm md:text-base font-medium">Deadline</p>
                          <p className="text-muted-foreground">{event.details.registration.deadline}</p>
                        </div>
                      </div>

                      <div className="pt-4 text-center">
                        <a 
                          href="https://forms.gle/j5LPUXxFRsgvDjZw8" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-block"
                        >
                          <Button className="bg-primary hover:bg-primary/90 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 min-w-[200px]">
                            Register Now 🚀
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>

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