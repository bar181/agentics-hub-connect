
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { UpcomingEvents } from "@/components/UpcomingEvents";
import { LearningHub } from "@/components/LearningHub";
import { About } from "@/components/About";
import { Community } from "@/components/Community";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      <Hero />
      <About />
      <UpcomingEvents />
      <LearningHub />
      <Community />
      <Footer />
    </div>
  );
};

export default Index;
