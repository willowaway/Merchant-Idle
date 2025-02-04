<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useTemplateStore } from "@/stores/template";
import type { Node } from "@/interfaces/node";


// Component properties
const props = defineProps<{
	/** The nodes of the navigation */
	nodes?: Array<Node>;
	/** If true, a submenu will be rendered */
	subMenu?: boolean;
	/** Dark mode for menu */
	dark?: false;
	/** Horizontal menu in large screen width */
	horizontal?: false;
	/** Hover mode for horizontal menu */
	horizontalHover?: false;
	/** Center mode for horizontal menu */
	horizontalCenter?: false;
	/** Justify mode for horizontal menu */
	horizontalJustify?: false;
	/** Disables submenu click on 2+ level when we are in horizontal and hover mode */
	disableClick?: false;
}>();

// Main store and Route
const store = useTemplateStore();
const route = useRoute();

// Set CSS classes accordingly
const classContainer = computed(() => {
  return {
	"nav-main": !props.subMenu,
	"nav-main-submenu": props.subMenu,
	"nav-main-dark": props.dark,
	"nav-main-horizontal": props.horizontal,
	"nav-main-hover": props.horizontalHover,
	"nav-main-horizontal-center": props.horizontalCenter,
	"nav-main-horizontal-justify": props.horizontalJustify,
  };
});

// Checks if a submenu path is part of the URL path
function subIsActive(paths: string) {
  const activePaths = Array.isArray(paths) ? paths : [paths];

  return activePaths.some((path) => {
	return route.path.indexOf(path) === 0; // current path starts with this path string
  });
}

// Main menu toggling and mobile functionality
function linkClicked(e: Event, submenu: boolean | null = null) {
	
const element = e.target as HTMLInputElement
  if (submenu && e.target != null) {
	// Get closest li element
	let el = element.closest("li");

	// Check if we are in a large screen, have horizontal navigation and hover is enabled
	if (
	  !(
		window.innerWidth > 991 &&
		((props.horizontal && props.horizontalHover) || props.disableClick)
	  )
	) {
		if (el) {

			if (el.classList.contains("open")) {
				// If submenu is open, close it..
				el.classList.remove("open");
			} else {
				const closest = el.closest("ul");
				if (closest) {
					// .. else if submenu is closed, close all other (same level) submenus first before open it
					Array.from(closest.children).forEach((element) => {
						element.classList.remove("open");
					});
				}
				el.classList.add("open");
			}
		}
	}
  } else {
	// If we are in mobile, close the sidebar
	if (window.innerWidth < 992) {
	  store.sidebar({ mode: "close" });
	}
  }
}
</script>

<template>
  <ul :class="classContainer">
	<li
		v-for="(node, index) in nodes"
		:key="`node-${index}`"
		:class="{
			'nav-main-heading': node.heading,
			'nav-main-item': !node.heading,
			open:
			node.sub && node.subActivePaths
				? subIsActive(node.subActivePaths)
				: false,
		}"
	>
	  <!-- Heading -->
	  {{ node.heading ? node.name : "" }}
	  <!-- Normal Link -->
	  <div v-if="!node.heading && !node.sub" @click="linkClicked($event)">
		<RouterLink
			v-if="
				node.to && !node.to.startsWith('http://') && !node.to.startsWith('https://')
			"
			:to="node.to && node.to !== '#' ? { name: node.to } : '#'"
			class="nav-main-link"
			:active-class="node.to && node.to !== '#' ? 'active' : ''"
		>
			<i v-if="node.icon" :class="`nav-main-link-icon ${node.icon}`"></i>
			<span v-if="node.src" class="nav-img me-2">
				<img :src="node.src">
			</span>
			<span v-if="node.name" class="nav-main-link-name">
				{{ node.name }}
			</span>
			<span
				v-if="node.badge"
				class="nav-main-link-badge badge rounded-pill"
				:class="
				node['badgeVariant']
					? `bg-${node['badgeVariant']}`
					: 'bg-primary'
				"
				>{{ node.badge }}</span
			>
		</RouterLink>
		<a
		  v-else
		  :href="node.to"
		  class="nav-main-link"
		  :target="node.target || undefined"
		>
			<i v-if="node.icon" :class="`nav-main-link-icon ${node.icon}`"></i>
			<span v-if="node.name" class="nav-main-link-name">
				{{ node.name }}
			</span>
			<span
				v-if="node.badge"
				class="nav-main-link-badge badge rounded-pill"
				:class="
				node['badgeVariant']
					? `bg-${node['badgeVariant']}`
					: 'bg-primary'
				"
				>{{ node.badge }}</span
			>
		</a>
	  </div>
	  <!-- END Normal Link -->

		<!-- Submenu Link -->
		<a
			v-else-if="!node.heading && node.sub"
			href="#"
			class="nav-main-link nav-main-link-submenu"
			@click.prevent="linkClicked($event, true)"
		>
		<i v-if="node.icon" :class="`nav-main-link-icon ${node.icon}`"></i>
		<span v-if="node.name" class="nav-main-link-name">{{ node.name }}</span>
		<span
			v-if="node.badge"
			class="nav-main-link-badge badge rounded-pill"
			:class="
			node['badgeVariant'] ? `bg-${node['badgeVariant']}` : 'bg-primary'
			"
			>{{ node.badge }}</span
		>
		</a>
		<!-- END Submenu Link -->

		<BaseNavigation
		v-if="node.sub"
		:nodes="node.sub"
		sub-menu
		:disable-click="props.horizontal && props.horizontalHover"
		/>
	</li>
  </ul>
</template>
