import { createRouter, createWebHistory } from "vue-router";

import * as NProgress from "nprogress";

// Main layouts
import GameLayout from "@/layouts/variations/GameLayout.vue";
import SimpleLayout from "@/layouts/variations/SimpleLayout.vue";

// Frontend: Landing
const StashView = () => import("@/views/starter/StashView.vue");
const ShopView= () => import("@/views/starter/ShopView.vue");

// Auth
const AuthSignIn = () => import("@/views/auth/SignInView.vue");
const AuthSignUp = () => import("@/views/auth/SignUpView.vue");
const AuthReminder = () => import("@/views/auth/ReminderView.vue");

// Set all routes
const routes = [
	{
		path: "/",
		component: SimpleLayout,
		children: [
			{
				path: "",
				name: "auth-signin",
				component: AuthSignIn,
			},
			{
				path: "signup",
				name: "auth-signup",
				component: AuthSignUp,
			},
			{
				path: "reminder",
				name: "auth-reminder",
				component: AuthReminder,
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
  history: createWebHistory("/Merchant-Idle/"),
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
