import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", redirect: '/home' },
    { path: "/home", component: "Home" },
    { path: "/achievements&papers", component: "AchievementsAndPapers" },
    { path: "/activity", component: "Activity" },
    { path: "/contact_us", component: "ContactUs" },
    { path: "/members", component: "Members" },
    { path: "/news", component: "News" },
    { path: "/research_direction", component: "ResearchDirection" },
    { path: "/research_resources", component: "ResearchResources" },
  ],
  npmClient: 'pnpm',
});
