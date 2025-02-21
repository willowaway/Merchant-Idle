import { createRouter, createWebHistory } from "vue-router";

import * as NProgress from "nprogress";

// Main layouts
import GameLayout from "@/layouts/variations/GameLayout.vue";
import SimpleLayout from "@/layouts/variations/SimpleLayout.vue";

// Frontend: Landing
const StashView = () => import("@/views/tabs/StashView.vue");
const ShopView = () => import("@/views/tabs/ShopView.vue");
const ExploreView = () => import("@/views/tabs/ExploreView.vue");

// Auth
const AuthSignIn = () => import("@/views/auth/SignInView.vue");
const AuthSignUp = () => import("@/views/auth/SignUpView.vue");
const AuthReminder = () => import("@/views/auth/ReminderView.vue");

// Errors
const ErrorView = () => import("@/views/errors/ErrorView.vue");
const Error400 = () => import("@/views/errors/400View.vue");
const Error401 = () => import("@/views/errors/401View.vue");
const Error403 = () => import("@/views/errors/403View.vue");
const Error404 = () => import("@/views/errors/404View.vue");
const Error500 = () => import("@/views/errors/500View.vue");
const Error503 = () => import("@/views/errors/503View.vue");

// Set all routes
const routes = [
	{
		path: "/",
		component: SimpleLayout,
		children: [
			{
				path: "",
				name: "signin",
				component: AuthSignIn,
			},
			{
				path: "signup",
				name: "signup",
				component: AuthSignUp,
			},
			{
				path: "reminder",
				name: "reminder",
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
	},
	{
		path: "/",
		component: GameLayout,
		children: [
			{
				path: "explore",
				name: "explore",
				component: ExploreView,
			},
		],
	},
	{
		path: "/error",
		component: SimpleLayout,
		children: [
			{
				path: "generic",
				name: "error",
				component: ErrorView,
			},
			{
				path: "400",
				name: "error-400",
				component: Error400,
			},
			{
				path: "401",
				name: "error-401",
				component: Error401,
			},
			{
				path: "403",
				name: "error-403",
				component: Error403,
			},
			{
				path: "404",
				name: "error-404",
				component: Error404,
			},
			{
				path: "500",
				name: "error-500",
				component: Error500,
			},
			{
				path: "503",
				name: "error-503",
				component: Error503,
			},
		],
	},
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

NProgress.configure({ showSpinner: false });

router.beforeResolve((to, from, next) => {
	NProgress.start();
	next();
});

router.afterEach(() => {
	NProgress.done();
});

export default router;
