"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
// We use string names for icons instead of direct component references
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logoName: "GalleryVerticalEnd",
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logoName: "AudioWaveform",
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logoName: "Command",
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Playground",
      url: "#",
      iconName: "SquareTerminal",
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
  ],
  projects: [],

}

// Map icon names to actual components
const iconMap = {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
}

// Helper function to convert icon names to components
function getIconComponent(iconName: keyof typeof iconMap) {
  return iconMap[iconName] || null
}

// Process data to replace icon names with actual components
const processedData = {
  ...data,
  teams: data.teams.map(team => ({
    ...team,
    logo: iconMap[team.logoName as keyof typeof iconMap],
  })),
  navMain: data.navMain.map(item => ({
    ...item,
    icon: iconMap[item.iconName as keyof typeof iconMap],
  })),
  projects: [],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={processedData.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={processedData.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={processedData.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
