import { createRouter, createWebHistory } from "vue-router";

import * as NProgress from "nprogress";

// Main layouts
import GameLayout from "@/layouts/variations/GameLayout.vue";
import LoginLayout from "@/layouts/variations/LoginLayout.vue";

// Frontend: Landing
const LoginView = () => import("@/views/starter/LoginView.vue");
const StashView = () => import("@/views/starter/StashView.vue");
const ShopView= () => import("@/views/starter/ShopView.vue");

// Set all routes
const routes = [
  {
    path: "/",
    component: LoginLayout,
    children: [
      {
        path: "",
        name: "login",
        component: LoginView,
      },
    ],
  },
  {
    path: "/",
    component: GameLayout,
    children: [
      {
        path: "stash",
        name: "stash",
        component: StashView,
      },
    ],
  },
  {
    path: "/",
    component: GameLayout,
    children: [
      {
        path: "shop",
        name: "shop",
        component: ShopView,
      },
    ],
  }
];

// Create Router
const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active",
  linkExactActiveClass: "active",
  scrollBehavior() {
    return { left: 0, top: 0 };
  },
  routes,
});

// NProgress
/*eslint-disable no-unused-vars*/
NProgress.configure({ showSpinner: false });

router.beforeResolve((to, from, next) => {
	if (to && from){
		console.log("to");
	}
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});
/*eslint-enable no-unused-vars*/

export default router;
