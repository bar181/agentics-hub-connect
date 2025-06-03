
import { BookOpen, Calendar, Users, Home, GraduationCap } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";

const memberItems = [
  {
    title: "Dashboard",
    url: "#home",
    icon: Home,
  },
  {
    title: "Learnings",
    url: "#learning",
    icon: GraduationCap,
  },
  {
    title: "Events",
    url: "#events",
    icon: Calendar,
  },
  {
    title: "Chapter",
    url: "#community",
    icon: Users,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="bg-orange-600 text-white">
      <SidebarHeader className="p-6">
        <h1 className="text-2xl font-bold text-white">
          Agentics
        </h1>
        <p className="text-orange-100 text-sm">Member Portal</p>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-orange-100 font-semibold">
            Member Options
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {memberItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="text-white hover:bg-orange-700 hover:text-white">
                    <a href={item.url}>
                      <item.icon className="text-orange-200" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
