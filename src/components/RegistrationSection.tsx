import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const RegistrationSection = () => {
  const handleRegistration = () => {
    // Replace with actual Google Form link
    window.open('https://forms.gle/ZsnWuaRkNnDpetZo9', '_blank');
  };

  return (
    <section id="boarding" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent mb-6">
            Board the Spaceship
          </h2>
          <p className="text-xl text-muted-foreground">
            Ready to explore the tech universe? Register for your mission below!
          </p>
        </div>

        {/* Registration Card */}
        <div className="cosmic-glass p-8 md:p-12 rounded-2xl cosmic-glow relative overflow-hidden">
          {/* Floating Rocket */}
          <div className="cosmic-float mb-8">
            <div className="text-8xl">🚀</div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Secure Your Launch Pad
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join hundreds of tech enthusiasts on this incredible journey. Limited seats available
                for this exclusive interstellar experience.
              </p>
            </div>

            {/* Registration Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="cosmic-glass p-4 rounded-lg">
                <div className="text-2xl mb-2">🎫</div>
                <p className="text-sm text-muted-foreground">Free Entry</p>
              </div>
              <div className="cosmic-glass p-4 rounded-lg">
                <div className="text-2xl mb-2">🍕</div>
                <p className="text-sm text-muted-foreground">Meals & Snacks</p>
              </div>
              <div className="cosmic-glass p-4 rounded-lg">
                <div className="text-2xl mb-2">🎁</div>
                <p className="text-sm text-muted-foreground">Exclusive Swags</p>
              </div>
            </div>

            {/* Registration Button */}
            <div className="pt-4">
              <Button
                size="lg"
                className="cosmic-button text-base sm:text-lg md:text-xl px-6 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 hover:scale-105 transition-all duration-300 group w-full sm:w-auto"
                onClick={handleRegistration}
              >
                🚀 Launch Registration
                <ExternalLink className="ml-2 sm:ml-3 w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>


            {/* Important Info */}
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>• Registration closes on August 25, 2025</p>
              <p>• Bring your student ID and laptop</p>
              <p>• Teams of max 4 members allowed</p>
            </div>
          </div>

          {/* Background Astronaut */}
          <div className="absolute -bottom-10 -right-10 opacity-10 pointer-events-none">
            <div className="text-9xl cosmic-float" style={{ animationDelay: '2s' }}>
              👨‍🚀
            </div>
          </div>

          {/* Shooting Stars */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-accent rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `shooting-star ${3 + Math.random() * 2}s linear infinite`,
                  animationDelay: `${Math.random() * 3}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-8 cosmic-glass p-6 rounded-lg">
          <p className="text-muted-foreground mb-2">Need help with registration?</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm">
            <a href="mailto:xts@sxcran.org" className="text-primary hover:text-primary/80 transition-colors">
              📧 xts@sxcran.org
            </a>
            <a href="https://www.instagram.com/xaviers_techbyte.society/" className="text-secondary hover:text-secondary/80 transition-colors">
              📱 @XTS
            </a>
            <a href="tel:+9341013395" className="text-accent hover:text-accent/80 transition-colors">
              📞 +91 9341013395
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;