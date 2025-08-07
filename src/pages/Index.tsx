import StarfieldBackground from "@/components/StarfieldBackground";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EventsSection from "@/components/EventsSection";
import CountdownSection from "@/components/CountdownSection";
import RegistrationSection from "@/components/RegistrationSection";
import TimelineSection from "@/components/TimelineSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Starfield Background */}
      <StarfieldBackground />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <EventsSection />
        <CountdownSection />
        <RegistrationSection />
        <TimelineSection />
        <FAQSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
