
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { UpcomingEvents } from "@/components/UpcomingEvents";
import { LearningHub } from "@/components/LearningHub";
import { About } from "@/components/About";
import { Community } from "@/components/Community";
import { Footer } from "@/components/Footer";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-slate-50 to-orange-50">
        <AppSidebar />
        <div className="flex-1">
          <Navigation />
          <Hero />
          <About />
          <UpcomingEvents />
          <LearningHub />
          <Community />
          <Footer />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
