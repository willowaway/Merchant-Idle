<script setup lang="ts">
import { onMounted, onUnmounted, reactive, watch } from "vue";
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
import EquipmentService from "@/services/EquipmentService";
import type { EquipmentItemView } from "merchant-idle-middleware";

// Main store
const store = useTemplateStore();
const main = useMainStore();

// watch(
// 	() => ({ ...main.equipments }),
// 	async (newEquipments, oldEquipments) => {

// 	},
// 	{ deep: true }
// );

// Close side overlay on ESCAPE key down
function eventSideOverlay(event: KeyboardEvent) {
	if (event.which === 27) {
		event.preventDefault();
		store.sideOverlay({ mode: "close" });
	}
}

async function unequip(equipment: EquipmentItemView | undefined) {
	if (equipment) {
		const response = await EquipmentService.delete(equipment.id);
		if (response === "Success") {
			main.unequip(equipment);
		}
	}
}

// Init SimpleBar (custom scrolling) and attach ESCAPE key event listener
onMounted(async () => {
	const sidebar = document.getElementById("side-overlay");
	if (sidebar) {
		new SimpleBar(sidebar);
	}

	document.addEventListener("keydown", eventSideOverlay);

	if (!main.userId) {
		router.push("/");
	} else {
		const equipmentItemViews =
			await EquipmentService.getEquipmentItemViewForUser(main.userId);
		if (equipmentItemViews) {
			main.equipAll(equipmentItemViews);
		} else {
			console.error(
				`Failed to get equipment item view for userId: ${main.userId}`
			);
		}
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
						<div
							class="dropdown col-4 d-flex justify-content-evenly"
						>
							<button
								class="btn img-thumb"
								type="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								<img
									class="img-fluid"
									width="50"
									:src="main?.helmet?.src || helmetImg"
									:alt="main?.helmet?.name || 'Helmet'"
								/>
							</button>
							<ul class="dropdown-menu">
								<li>
									<button
										class="dropdown-item"
										@click="unequip(main.helmet)"
									>
										Unequipt
									</button>
								</li>
							</ul>
						</div>
						<div class="col-4"></div>
					</div>
					<div class="row pb-4">
						<div class="col-4"></div>
						<div
							class="dropdown col-4 d-flex justify-content-evenly"
						>
							<button
								class="btn img-thumb"
								type="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								<img
									class="img-fluid"
									width="50"
									:src="main?.necklace?.src || necklaceImg"
									:alt="main?.necklace?.name || 'Necklace'"
								/>
							</button>
							<ul class="dropdown-menu">
								<li>
									<button
										class="dropdown-item"
										@click="unequip(main.necklace)"
									>
										Unequipt
									</button>
								</li>
							</ul>
						</div>
						<div class="col-4"></div>
					</div>
					<div class="row pb-4 d-flex justify-content-center">
						<div
							class="dropdown col-4 col-lg-4 col-sm-2 d-flex justify-content-evenly"
						>
							<button
								class="btn img-thumb"
								type="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								<img
									class="img-fluid"
									width="50"
									:src="main?.weapon?.src || weaponImg"
									:alt="main?.weapon?.name || 'Weapon'"
								/>
							</button>
							<ul class="dropdown-menu">
								<li>
									<button
										class="dropdown-item"
										@click="unequip(main.weapon)"
									>
										Unequipt
									</button>
								</li>
							</ul>
						</div>
						<div
							class="dropdown col-4 col-lg-4 col-sm-2 d-flex justify-content-evenly"
						>
							<button
								class="btn img-thumb"
								type="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								<img
									class="img-fluid"
									width="50"
									:src="main?.chest?.src || chestImg"
									:alt="main?.chest?.name || 'Chest'"
								/>
							</button>
							<ul class="dropdown-menu">
								<li>
									<button
										class="dropdown-item"
										@click="unequip(main.chest)"
									>
										Unequipt
									</button>
								</li>
							</ul>
						</div>
						<div
							class="dropdown col-4 col-lg-4 col-sm-2 d-flex justify-content-evenly"
						>
							<button
								class="btn img-thumb"
								type="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								<img
									class="img-fluid"
									width="50"
									:src="main?.offhand?.src || shieldImg"
									:alt="main?.offhand?.name || 'Offhand'"
								/>
							</button>
							<ul class="dropdown-menu">
								<li>
									<button
										class="dropdown-item"
										@click="unequip(main.offhand)"
									>
										Unequipt
									</button>
								</li>
							</ul>
						</div>
					</div>
					<div class="row pb-4 d-flex justify-content-center">
						<div
							class="dropdown col-4 col-lg-4 col-sm-2 d-flex justify-content-evenly"
						>
							<button
								class="btn img-thumb"
								type="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								<img
									class="img-fluid"
									width="50"
									:src="main?.gloves?.src || glovesImg"
									:alt="main?.gloves?.name || 'Gloves'"
								/>
							</button>
							<ul class="dropdown-menu">
								<li>
									<button
										class="dropdown-item"
										@click="unequip(main.gloves)"
									>
										Unequipt
									</button>
								</li>
							</ul>
						</div>
						<div
							class="dropdown col-4 col-lg-4 col-sm-2 d-flex justify-content-evenly"
						>
							<button
								class="btn img-thumb"
								type="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								<img
									class="img-fluid"
									width="50"
									:src="main?.legs?.src || legsImg"
									:alt="main?.legs?.name || 'Legs'"
								/>
							</button>
							<ul class="dropdown-menu">
								<li>
									<button
										class="dropdown-item"
										@click="unequip(main.legs)"
									>
										Unequipt
									</button>
								</li>
							</ul>
						</div>
						<div
							class="col-4 col-lg-4 col-sm-2 d-flex justify-content-evenly"
						></div>
					</div>
					<div class="row pb-4 d-flex justify-content-center">
						<div
							class="dropdown col-4 col-lg-4 col-sm-2 d-flex justify-content-evenly"
						>
							<button
								class="btn img-thumb"
								type="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								<img
									class="img-fluid"
									width="50"
									:src="main?.ring?.src || ringImg"
									:alt="main?.ring?.name || 'Ring'"
								/>
							</button>
							<ul class="dropdown-menu">
								<li>
									<button
										class="dropdown-item"
										@click="unequip(main.ring)"
									>
										Unequipt
									</button>
								</li>
							</ul>
						</div>
						<div
							class="dropdown col-4 col-lg-4 col-sm-2 d-flex justify-content-evenly"
						>
							<button
								class="btn img-thumb"
								type="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								<img
									class="img-fluid"
									width="50"
									:src="main?.boots?.src || bootsImg"
									:alt="main?.boots?.name || 'Boots'"
								/>
							</button>
							<ul class="dropdown-menu">
								<li>
									<button
										class="dropdown-item"
										@click="unequip(main.boots)"
									>
										Unequipt
									</button>
								</li>
							</ul>
						</div>
						<div
							class="dropdown col-4 col-lg-4 col-sm-2 d-flex justify-content-evenly"
						>
							<button
								class="btn img-thumb"
								type="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								<img
									class="img-fluid"
									width="50"
									:src="main?.bracelet?.src || braceletImg"
									:alt="main?.bracelet?.name || 'Bracelet'"
								/>
							</button>
							<ul class="dropdown-menu">
								<li>
									<button
										class="dropdown-item"
										@click="unequip(main.bracelet)"
									>
										Unequipt
									</button>
								</li>
							</ul>
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
