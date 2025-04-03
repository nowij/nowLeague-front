import { createRouter, createWebHistory } from "vue-router";

import ScheduleRoute from "@/routers/Schedule.route";
import HomeRoute from "@/routers/Home.route";
import TeamRoute from "@/routers/Team.route";

const routes = [
  {...HomeRoute},
  {...ScheduleRoute},
  {...TeamRoute}
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
});