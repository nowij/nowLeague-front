import { createRouter, createWebHistory } from "vue-router";

import ScheduleRoute from "@/routers/Schedule.route";
import MainRoute from "@/routers/Main.route";
import TeamRoute from "@/routers/Team.route";
import ResultRoute from "@/routers/Result.route";

const routes = [
  {...MainRoute},
  {...ScheduleRoute},
  {...TeamRoute},
  {...ResultRoute}
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
});