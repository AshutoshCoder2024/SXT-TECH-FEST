import { Calendar, Clock, MapPin, Trophy, ScrollText, List, GraduationCap } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
const events = [
  {
    title: "🤖 Workshop – AI ML by MeitY",
    description: "Learn the fundamentals and applications of Artificial Intelligence  and Machine Learing from MeitY experts.",
    date: "29-August",
    time: "TBD",
    location: "College Campus - Hall-C",
    icon: "🤖",
    details: {
      overview:
        "An interactive workshop conducted by MeitY professionals, covering AI and ML fundamentals, real-world applications, and future trends. Includes live demos and Q&A sessions to enhance your understanding.",
      topics: [
        "Introduction to Artificial Intelligence",
        "Machine Learning vs Deep Learning",
        "AI in Everyday Life",
        "Future Trends and Career Opportunities"
      ],
      rules: [
        "Open for all students (any stream)",
        "Bring your own notebook and pen for notes",
        "💡 NOTE : Ensure you arrive 10 minutes early to get a good seat"
      ],
      registration: {
        fee: "Free",
        deadline: "27-August"
      }
    }
  },
  {
    title: "🤖 RoboRush F1",
    description: "Build, race, and dominate the F1-inspired robot track.",
    date: "29-August",
    time: "TBD",
    location: "Basketball Court",
    icon: "🤖",
    details: {
      overview:
        "Teams build or bring their custom-built racing robots (line followers or remotecontrolled bots) and race them on an F1-inspired track with curves, loops, and checkpoints.",
      rounds: [
        "Round 1: Time Trials – One lap to qualify",
        "Round 2: Knockouts – Head-to-head races",
        "Round 3: Final Race – Top 4 race together"
      ],
      // prizes: [
      //   "🥇 1st Place: Certificate + Robotics Kit",
      //   "🥈 2nd Place: Certificate + Goodies",
      //   "🥉 3rd Place: Certificate + Goodies"
      // ],
      rules: [
        "Teams can have 1–4 members.",
        "Robots must be self-built or custom-modified (no ready-made toy cars).",
        "Touching the robot during the race is not allowed unless instructed by the referee.",
        "If a robot goes off-track, it must restart from the last checkpoint.",
        "Judges’ decisions will be final and binding."
      ],

      // requirements: [
      //   "Functional robot (line-follower or RC)",
      //   "Tools for quick repairs",
      // ],
      registration: {
        fee: "Free",
        deadline: "27-August"
      }
    }
  },
  {
    title: "🎥 FestFrame (PR & Creative Challenge)",
    description: "Capture the spirit of TechFest and create an unforgettable highlight video.",
    date: "TechFest 2 Days(29-30)",
    time: "All Day",
    location: "Campus",
    icon: "🎥",
    details: {
      overview:
        "Document the magic of TechFest! Film, edit, and present a short creative video capturing the best moments, stories, and emotions of the event.",
      phases: [
        {
          phase: "Filming (Day 1)",
          tasks: [
            "Capture event highlights & crowd energy",
            "Interview participants & guests",
            "Film B-roll of decorations & activities",
            "Experiment with creative angles and shots"
          ]
        },
        {
          phase: "Editing (After Day 1)",
          tasks: [
            "Add event title & TechFest logo animation",
            "Use background music to set mood",
            "Smooth transitions & pacing",
            "Include at least 2 creative visual effects"
          ]
        },
        {
          phase: "Presentation (Day 2)",
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
      rules: [
        "Individual or team participation",
        "All footage must be captured during TechFest",
        "At least 2 creative effects required",
        "Final submission by Day 2",

      ],
      registration: {
        fee: "Free",
        deadline: "27-August"
      }
    }
  },
  {
    title: "⚡ HustleHub (Hackathon)",
    description: "3 Hours • One Problem • Infinite Hustle — Code, create, and innovate under pressure to solve real-world campus problems.",
    date: "30-August",
    time: "(11:30 AM – 2:30 PM)",
    location: "College Campus - Hall- C",
    icon: "⚡",
    details: {
      overview:
        "A high-energy hackathon where teams tackle real-world campus challenges and deliver working solutions in just 3 hours. Expect rapid brainstorming, intense coding, and a surprise mid-event twist to test adaptability.",
      problemStatements: [
        {
          title: "1. Smart Attendance System",
          Description: "Build a web/app-based attendance tracker for students and teachers, with automated absentee notifications",

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
          title: " 2. College Event Hub",
          Description: "A platform that lists all upcoming college events, allows registrations, and sends reminders.",

          core: [
            "Event listing with date, time, and description",
            "Event registration feature"
          ],
          optional: [
            "Countdown timers for upcoming events",
            "Google Calendar API integration",
            "Event filters by department or category",
            "Capacity management for registrations"
          ]
        },
        {
          title: "3. Lost & Found Hub",
          Description: "A digital hub where students can report lost items and claim found ones.",
          core: [
            "Post lost/found items with basic details",
            "View and search for reported items"
          ],
          optional: [
            "Image upload for better identification",
            "Category/date/location-based search filters",
            "Update item status to 'Claimed' or 'Still Missing'"
          ]
        },
        {
          title: "4. Anonymous Feedback Box",
          Description: "A platform for students to share feedback or concerns with theadministration anonymously",
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
          title: "5.Student Skill Exchange",
          Description: "A barter platform where students can exchange skills (e.g., “Teach me Photoshop, I’ll help you with coding”)",
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
      // prizes: [
      //   "🥇 1st Place: Certificate + Premium Tech Goodies",
      //   "🥈 2nd Place: Certificate + Goodies",
      //   "🥉 3rd Place: Certificate + Goodies"
      // ],
      rules: [
        "Teams must have 2–4 members.",
        "You may choose any problem statement to implement",
        "A surprise bonus feature will be revealed mid-event",
        "💡 NOTE : Bring a fully charged laptop with a reliable internet connection to ensure uninterrupted participation."
      ],
      registration: {
        fee: "Free",
        deadline: "27-August"
      }
    }
  },
  {
    title: "🚀 Startup Xpress (Brainstorm. Build. Pitch)",
    description: "Turn your idea into a brand in 3 hours — create, design, and pitch to win.",
    date: "30-August",
    time: "11:30 AM to 2:30 PM",
    location: "Fr. Proost Hall",
    icon: "🚀",
    details: {
      overview: "The organizer will reveal 3–4 exciting product categories (e.g., Sustainable Lifestyle, Campus Tech, Rural Innovations, etc.). Each team will choose one category to work on and craft an innovative solution. This is your chance to think big, solve real problems, and showcase your creativity. Surprise us with ideas that could change the game!",
      coreTasks: [
        "Create a brand name & tagline",
        "Write a clear mission statement",
        "Design a professional digital logo",
        "Build a landing page or website",
        "Produce a 30-60 sec Advertisement video/ Mockup Ad (Shot on phone or animated"
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
      rules: [
        "Teams must have 2–4 members.",
        "You may choose any product category revealed at the event.",
        "A surprise bonus feature will be announced mid-event and must be incorporated.",
        "Respect the time limit — submissions after the deadline will not be accepted.",
        "Maintain team spirit and respect towards other participants and organizers.",
        "💡 NOTE : Bring a fully charged laptop with a reliable internet connection to ensure uninterrupted participation."
      ],
      registration: {
        fee: "Free",
        deadline: "27-August"
      }
    }
  },
  {
    title: "💡 Tech Exhibition Launch (Stalls & Demos)",
    description: "Explore innovative projects, gadgets, and demos by students and tech enthusiasts.",
    date: "29-August",
    time: "1:00 PM to 4:00 PM",
    location: "College Campus: Hall-C",
    icon: "💡",
    details: {
      overview:
        "An open exhibition where students and innovators showcase their projects, working models, and tech prototypes. Visitors can explore stalls, interact with creators, and experience hands-on demos.",
      highlights: [
        "Live demonstrations of projects",
        "Innovative gadgets and prototypes",
        "Interactive tech stalls",
        "One-on-one interaction with creators"
      ],
      rules: [
        "Teams must have 2–4 members.",
        "Participants must set up stalls before the event starts",
        "Ensure safety measures for live demos",
        "No hazardous materials or unsafe devices allowed",
        "Maintain cleanliness and professionalism at stalls",
        "💡 NOTE : Bring all necessary materials, chargers, and extension boards for your setup"
      ],
      registration: {
        fee: "Free",
        deadline: "27-August"
      }
    }
  },
  {
    title: "🧠 Tech Quest (Quiz Challenge)",
    description: "Test your tech knowledge with fun and challenging rounds.",
    date: "30-August",
    time: "11:00 AM – 1:00 PM",
    location: "College Campus -Hall-c",
    icon: "🧠",
    details: {
      overview:
        "A quiz competition covering technology, programming, and current trends. Compete through multiple exciting rounds to prove your knowledge.",
      rounds: [
        "Round 1: MCQ Battle – General tech knowledge",
        "Round 2: Coding Challenge – Problem-solving with code",
        "Round 3: Rapid Fire – Quick answer challenge",
        "Round 4: Final Buzzer Round – Fastest answers win"
      ],
      rules: [
        "Teams can  have 1–4 members.",
        "No use of mobile phones or gadgets",
        "Tie-breaker will be used if scores are equal",
        "💡 NOTE : Bring a fully charged laptop only for coding round"
      ],
      registration: {
        fee: "Free",
        deadline: "TBD"
      }
    }
  },

];
const EventsSection = () => {
  return (
    <section id="events" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent mb-6">
            ⚡  Events
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dive into our exciting line-up of events where ideas, skills, and creativity come together.
            Each event is built to challenge you, inspire you, and spark innovation.
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

                    {/* Event Specific Sections */}
                    {/* HustleHub - Problem Statements */}
                    {event.details.problemStatements && (
                      <div className="space-y-2 p-3 md:p-4 bg-secondary/5 rounded-lg">
                        <h4 className="font-semibold flex items-center gap-2 text-base md:text-lg">
                          <List className="w-4 h-4 md:w-5 md:h-5 text-secondary" />
                          Problem Statements
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {event.details.problemStatements.map((problem, index) => (
                            <div key={index} className="space-y-2 p-3 bg-background/50 rounded-md">
                              <h3 className="font-medium text-sm md:text-base text-orange-500 ">{problem.title}</h3>
                              <h6 className="font-medium text-sm md:text-base">{problem.Description}</h6>

                              <div className="space-y-2">
                                <div>
                                  <p className="text-xs md:text-sm font-medium text-primary">Core Features:</p>
                                  <ul className="list-disc list-inside text-xs md:text-sm text-muted-foreground">
                                    {problem.core.map((item, idx) => (
                                      <li key={idx}>{item}</li>
                                    ))}
                                  </ul>
                                </div>
                                {/* <div>
                                  <p className="text-xs md:text-sm font-medium text-secondary">Optional Features:</p>
                                  <ul className="list-disc list-inside text-xs md:text-sm text-muted-foreground">
                                    {problem.optional.map((item, idx) => (
                                      <li key={idx}>{item}</li>
                                    ))}
                                  </ul>
                                </div> */}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Startup Xpress - Core Tasks & Challenges */}
                    {event.details.coreTasks && (
                      <div className="space-y-2 p-3 md:p-4 bg-secondary/5 rounded-lg">
                        <h4 className="font-semibold flex items-center gap-2 text-base md:text-lg">
                          <List className="w-4 h-4 md:w-5 md:h-5 text-secondary" />
                          Core Tasks
                        </h4>
                        <ul className="list-disc list-inside space-y-1">
                          {event.details.coreTasks.map((task, index) => (
                            <li key={index} className="text-sm md:text-base text-muted-foreground">
                              {task}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Bonus Challenges - For Startup Xpress */}
                    {/* {event.details.bonusChallenges && (
                      <div className="space-y-2 p-3 md:p-4 bg-accent/5 rounded-lg">
                        <h4 className="font-semibold flex items-center gap-2 text-base md:text-lg">
                          <Trophy className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                          Bonus Challenges
                        </h4>
                        <ul className="list-disc list-inside space-y-1">
                          {event.details.bonusChallenges.map((challenge, index) => (
                            <li key={index} className="text-sm md:text-base text-muted-foreground">
                              {challenge}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )} */}

                    {/* Pitch Details - For Startup Xpress */}
                    {event.details.pitch && (
                      <div className="space-y-2 p-3 md:p-4 bg-primary/5 rounded-lg">
                        <h4 className="font-semibold flex items-center gap-2 text-base md:text-lg">
                          <ScrollText className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                          Pitch Details
                        </h4>
                        <div className="space-y-2">
                          <p className="text-sm md:text-base font-medium">Duration: {event.details.pitch.duration}</p>
                          <ul className="list-disc list-inside space-y-1">
                            {event.details.pitch.tasks.map((task, index) => (
                              <li key={index} className="text-sm md:text-base text-muted-foreground">
                                {task}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {/* Rounds - For RoboRush */}
                    {event.details.rounds && (
                      <div className="space-y-2 p-3 md:p-4 bg-secondary/5 rounded-lg">
                        <h4 className="font-semibold flex items-center gap-2 text-base md:text-lg">
                          <List className="w-4 h-4 md:w-5 md:h-5 text-secondary" />
                          Competition Rounds
                        </h4>
                        <ul className="list-disc list-inside space-y-1">
                          {event.details.rounds.map((round, index) => (
                            <li key={index} className="text-sm md:text-base text-muted-foreground">
                              {round}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Phases - For FestFrame */}
                    {event.details.phases && (
                      <div className="space-y-2 p-3 md:p-4 bg-accent/5 rounded-lg">
                        <h4 className="font-semibold flex items-center gap-2 text-base md:text-lg">
                          <List className="w-4 h-4 md:w-5 md:h-5 text-accent" />
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


                    {/* rules */}
                    <div className="space-y-2 p-3 md:p-4 bg-primary/5 rounded-lg">
                      <h4 className="font-semibold flex items-center gap-2 text-base md:text-lg">
                        <GraduationCap className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                        Rules
                      </h4>
                      <ul className="list-disc list-inside space-y-1">
                        {event.details.rules.map((rule, index) => (
                          <li key={index} className="text-sm md:text-base text-muted-foreground">
                            {rule}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Requirements */}
                    {/* <div className="space-y-2 p-3 md:p-4 bg-primary/5 rounded-lg">
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
                    </div> */}

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
                          href="https://docs.google.com/forms/d/e/1FAIpQLSfFP_KI1Fa1_Uf9UZMdbdfiI_9Z_JKzOo5QD06HCHZm7_5IIA/viewform"
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