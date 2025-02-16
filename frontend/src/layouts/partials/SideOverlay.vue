<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import { useTemplateStore } from "@/stores/template";
import { useMainStore } from "@/stores/main";
import router from "@/router/router";

import helmetImg from "/assets/media/Icons/Helmet.png";
import chestImg from "/assets/media/Icons/Chest.png";
import bootsImg from "/assets/media/Icons/Boots.png";
import braceletImg from "/assets/media/Icons/Bracelet.png";
import glovesImg from "/assets/media/Icons/Gloves.png";
import legsImg from "/assets/media/Icons/Legs.png";
import necklaceImg from "/assets/media/Icons/Necklace.png";
import ringImg from "/assets/media/Icons/Ring.png";
import shieldImg from "/assets/media/Icons/Shield.png";
import weaponImg from "/assets/media/Icons/Weapon.png";

// SimpleBar, for more info and examples you can check out https://github.com/Grsmto/simplebar/tree/master/packages/simplebar-vue
import SimpleBar from "simplebar";

// Main store
const store = useTemplateStore();
const main = useMainStore();

// Close side overlay on ESCAPE key down
function eventSideOverlay(event: KeyboardEvent) {
	if (event.which === 27) {
		event.preventDefault();
		store.sideOverlay({ mode: "close" });
	}
}

// Init SimpleBar (custom scrolling) and attach ESCAPE key event listener
onMounted(() => {
	const sidebar = document.getElementById("side-overlay");
	if (sidebar) {
		new SimpleBar(sidebar);
	}

	document.addEventListener("keydown", eventSideOverlay);

	if (!main.userId) {
		router.push("/");
	}
});

// Remove keydown event listener
onUnmounted(() => {
	document.removeEventListener("keydown", eventSideOverlay);
});

async function logOut() {
	main.logOut();
	router.push("/");
}
</script>

<template>
	<!-- Side Overlay-->
	<aside id="side-overlay">
		<slot>
			<!-- Side Header -->
			<div class="content-header border-bottom">
				<slot name="header">
					<!-- User Avatar -->
					<i class="fa-solid fa-user"></i>
					<!-- END User Avatar -->

					<!-- User Info -->
					<div class="ms-2">
						<a
							class="text-dark fw-semibold fs-sm"
							href="javascript:void(0)"
							>{{ main.username }}</a
						>
					</div>
					<!-- END User Info -->
				</slot>

				<!-- Close Side Overlay -->
				<button
					type="button"
					class="ms-auto btn btn-sm btn-alt-secondary"
					@click="store.sideOverlay({ mode: 'close' })"
				>
					<i class="fa fa-fw fa-times"></i>
				</button>
				<!-- END Close Side Overlay -->
			</div>
			<!-- END Side Header -->

			<slot name="content" class="h-100">
				<!-- Side Content -->
				<div class="content-side d-flex flex-column h-100 pb-3">
					<div class="row pb-4">
						<div class="col-4"></div>
						<div class="col-4 d-flex justify-content-evenly">
							<a
								href="javascript:void(0)"
								class="img-link img-link-zoom-in img-thumb img-lightbox"
							>
								<img
									class="img-fluid"
									width="50"
									:src="helmetImg"
									alt="Helmet"
								/>
							</a>
						</div>
						<div class="col-4"></div>
					</div>
					<div class="row pb-4">
						<div class="col-4"></div>
						<div class="col-4 d-flex justify-content-evenly">
							<a
								href="javascript:void(0)"
								class="img-link img-link-zoom-in img-thumb img-lightbox"
							>
								<img
									class="img-fluid"
									width="50"
									:src="necklaceImg"
									alt="Necklace"
								/>
							</a>
						</div>
						<div class="col-4"></div>
					</div>
					<div class="row pb-4 d-flex justify-content-center">
						<div
							class="col-4 col-lg-4 col-sm-2 d-flex justify-content-evenly"
						>
							<a
								href="javascript:void(0)"
								class="img-link img-link-zoom-in img-thumb img-lightbox"
							>
								<img
									class="img-fluid"
									width="50"
									:src="weaponImg"
									alt="Weapon"
								/>
							</a>
						</div>
						<div
							class="col-4 col-lg-4 col-sm-2 d-flex justify-content-evenly"
						>
							<a
								href="javascript:void(0)"
								class="img-link img-link-zoom-in img-thumb img-lightbox"
							>
								<img
									class="img-fluid"
									width="50"
									:src="chestImg"
									alt="Chest"
								/>
							</a>
						</div>
						<div
							class="col-4 col-lg-4 col-sm-2 d-flex justify-content-evenly"
						>
							<a
								href="javascript:void(0)"
								class="img-link img-link-zoom-in img-thumb img-lightbox"
							>
								<img
									class="img-fluid"
									width="50"
									:src="shieldImg"
									alt="Shield"
								/>
							</a>
						</div>
					</div>
					<div class="row pb-4 d-flex justify-content-center">
						<div
							class="col-4 col-lg-4 col-sm-2 d-flex justify-content-evenly"
						>
							<a
								href="javascript:void(0)"
								class="img-link img-link-zoom-in img-thumb img-lightbox"
							>
								<img
									class="img-fluid"
									width="50"
									:src="glovesImg"
									alt="Gloves"
								/>
							</a>
						</div>
						<div
							class="col-4 col-lg-4 col-sm-2 d-flex justify-content-evenly"
						>
							<a
								href="javascript:void(0)"
								class="img-link img-link-zoom-in img-thumb img-lightbox"
							>
								<img
									class="img-fluid"
									width="50"
									:src="legsImg"
									alt="Legs"
								/>
							</a>
						</div>
						<div
							class="col-4 col-lg-4 col-sm-2 d-flex justify-content-evenly"
						></div>
					</div>
					<div class="row pb-4 d-flex justify-content-center">
						<div
							class="col-4 col-lg-4 col-sm-2 d-flex justify-content-evenly"
						>
							<a
								href="javascript:void(0)"
								class="img-link img-link-zoom-in img-thumb img-lightbox"
							>
								<img
									class="img-fluid"
									width="50"
									:src="ringImg"
									alt="Ring"
								/>
							</a>
						</div>
						<div
							class="col-4 col-lg-4 col-sm-2 d-flex justify-content-evenly"
						>
							<a
								href="javascript:void(0)"
								class="img-link img-link-zoom-in img-thumb img-lightbox"
							>
								<img
									class="img-fluid"
									width="50"
									:src="bootsImg"
									alt="Boots"
								/>
							</a>
						</div>
						<div
							class="col-4 col-lg-4 col-sm-2 d-flex justify-content-evenly"
						>
							<a
								href="javascript:void(0)"
								class="img-link img-link-zoom-in img-thumb img-lightbox"
							>
								<img
									class="img-fluid"
									width="50"
									:src="braceletImg"
									alt="Bracelet"
								/>
							</a>
						</div>
					</div>
					<div class="row pb-2">
						<div class="col-4"></div>
						<div class="col-4"></div>
						<div class="col-4"></div>
					</div>
					<button
						class="btn btn-lg btn-alt-danger w-100 mb-1"
						@click="logOut"
					>
						Logout
					</button>
				</div>
				<!-- END Side Content -->
			</slot>
		</slot>
	</aside>
	<!-- END Side Overlay -->
</template>
