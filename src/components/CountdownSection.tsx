import { useState, useEffect } from 'react';

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-08-28T00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="countdown" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent mb-6">
            T-minus…
          </h2>
          <p className="text-xl text-muted-foreground">
            Launch countdown to TechFest 2025
          </p>
        </div>

        {/* Countdown Dashboard */}
        <div className="cosmic-glass p-8 md:p-12 rounded-2xl cosmic-glow">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Days */}
            <div className="space-y-2">
              <div className="cosmic-glass p-6 rounded-lg relative overflow-hidden">
                <div className="text-4xl md:text-6xl font-bold text-primary mb-2">
                  {timeLeft.days.toString().padStart(2, '0')}
                </div>
                <div className="text-muted-foreground uppercase tracking-wide">Days</div>
                
                {/* Pulsing effect */}
                <div className="absolute inset-0 bg-primary/10 rounded-lg animate-pulse" />
              </div>
            </div>

            {/* Hours */}
            <div className="space-y-2">
              <div className="cosmic-glass p-6 rounded-lg relative overflow-hidden">
                <div className="text-4xl md:text-6xl font-bold text-secondary mb-2">
                  {timeLeft.hours.toString().padStart(2, '0')}
                </div>
                <div className="text-muted-foreground uppercase tracking-wide">Hours</div>
                
                <div className="absolute inset-0 bg-secondary/10 rounded-lg animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>
            </div>

            {/* Minutes */}
            <div className="space-y-2">
              <div className="cosmic-glass p-6 rounded-lg relative overflow-hidden">
                <div className="text-4xl md:text-6xl font-bold text-accent mb-2">
                  {timeLeft.minutes.toString().padStart(2, '0')}
                </div>
                <div className="text-muted-foreground uppercase tracking-wide">Minutes</div>
                
                <div className="absolute inset-0 bg-accent/10 rounded-lg animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
            </div>

            {/* Seconds */}
            <div className="space-y-2">
              <div className="cosmic-glass p-6 rounded-lg relative overflow-hidden">
                <div className="text-4xl md:text-6xl font-bold text-primary mb-2">
                  {timeLeft.seconds.toString().padStart(2, '0')}
                </div>
                <div className="text-muted-foreground uppercase tracking-wide">Seconds</div>
                
                <div className="absolute inset-0 bg-primary/10 rounded-lg animate-pulse" style={{ animationDelay: '1.5s' }} />
              </div>
            </div>
          </div>

          {/* Mission Status */}
          <div className="mt-8 space-y-4">
            <div className="flex items-center justify-center gap-4">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
              <span className="text-foreground font-semibold">MISSION STATUS: READY FOR LAUNCH</span>
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
            </div>
            
            <p className="text-muted-foreground">
              All systems operational. Prepare for the ultimate tech adventure.
            </p>
          </div>
        </div>

        {/* Spacecraft Dashboard Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Orbiting Elements */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-accent rounded-full"
              style={{
                left: `${30 + i * 10}%`,
                top: `${40 + (i % 2) * 20}%`,
                animation: `orbit ${15 + i * 3}s linear infinite`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;