
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { UpcomingEvents } from "@/components/UpcomingEvents";
import { LearningHub } from "@/components/LearningHub";
import { About } from "@/components/About";
import { Community } from "@/components/Community";
import { Footer } from "@/components/Footer";
import { Dashboard } from "@/components/Dashboard";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { useState, useEffect } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        setActiveSection(hash);
      }
    };

    // Set initial section based on hash
    handleHashChange();
    
    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);
    
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const renderContent = () => {
    switch (activeSection) {
      case "home":
        return (
          <>
            <Dashboard />
            <About />
            <UpcomingEvents />
            <LearningHub />
            <Community />
          </>
        );
      case "about":
        return <About />;
      case "events":
        return <UpcomingEvents />;
      case "learning":
        return <LearningHub />;
      case "community":
        return <Community />;
      default:
        return (
          <>
            <Dashboard />
            <About />
            <UpcomingEvents />
            <LearningHub />
            <Community />
          </>
        );
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-slate-50 to-orange-50">
        <AppSidebar />
        <div className="flex-1">
          <Navigation />
          {renderContent()}
          <Footer />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
