import { createRouter, createWebHistory } from "vue-router";

import scheduleRoute from "@/routers/schedule.route";
import HomeRoute from "@/routers/Home.route";

const routes = [
  {...HomeRoute},
  {...scheduleRoute}
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
});