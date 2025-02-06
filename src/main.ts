import { createApp } from 'vue'
import { createPinia } from "pinia";
import App from './App.vue'

import router from "./router/router";

// Template components
import BaseBlock from "@/components/BaseBlock.vue";
import BaseBackground from "@/components/BaseBackground.vue";
import BasePageHeading from "@/components/BasePageHeading.vue";

// Bootstrap framework
import * as bootstrap from "bootstrap";
window.bootstrap = bootstrap;

// Craft new application
const app = createApp(App, {created() {
	if (sessionStorage.redirect) {
		const redirect = sessionStorage.redirect
		delete sessionStorage.redirect
		router.push(redirect)
	}
}});

// Register global components
app.component("BaseBlock", BaseBlock);
app.component("BaseBackground", BaseBackground);
app.component("BasePageHeading", BasePageHeading);

// Use Pinia and Vue Router
app.use(createPinia());
app.use(router);

// ..and finally mount it!
app.mount("#app");