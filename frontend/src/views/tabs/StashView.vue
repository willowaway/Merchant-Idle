<script setup lang="ts">
import { onMounted, reactive } from "vue";
import { useMainStore } from "@/stores/main";
import { watch } from "vue";
import {
	EquipmentItemView,
	Stash,
	StashItemView,
} from "merchant-idle-middleware";
import StashService from "@/services/StashService";
import { ref, nextTick } from "vue";
import EditableText from "@/layouts/partials/EditableText.vue";
import { Modal } from "bootstrap";
import { isNullishCoalesce } from "typescript";
import BaseBlock from "@/components/BaseBlock.vue";
import ItemService from "@/services/ItemService";
import EquipmentService from "@/services/EquipmentService";

const main = useMainStore();

const stashItemDetailsModal = ref<HTMLElement | null>(null);
let modalInstance: Modal | null = null;

onMounted(() => {
	if (stashItemDetailsModal.value) {
		modalInstance = new Modal(stashItemDetailsModal.value);
	}
	loadStash();
});

const state = reactive<{
	stashItems: StashItemView[];
	editMode: boolean;
}>({
	stashItems: [],
	editMode: false,
});
const equipButton = ref<HTMLButtonElement | null>(null);

async function loadStash() {
	if (main.userId) {
		const stashItems = await StashService.getStashItemViewForUser(
			main.userId
		);
		state.stashItems = stashItems;
	} else {
		console.error("Load Stash without user defined in pinia");
	}
}

function updateStashItems(updatedStashItem: StashItemView) {
	for (let index = 0; index < state.stashItems.length; index++) {
		const stashItem = state.stashItems[index];
		if (stashItem.id === updatedStashItem.id) {
			state.stashItems[index] = updatedStashItem;
			return;
		}
	}
}

async function equip(stashItem: StashItemView) {
	if (main.userId) {
		const equipmentItemViewResult = await EquipmentService.create(
			main.userId,
			stashItem.itemId,
			stashItem.id
		);
		if (equipmentItemViewResult instanceof EquipmentItemView) {
			main.equip(equipmentItemViewResult);
			if (equipButton.value) {
				equipButton.value.textContent = "Equipped";
				equipButton.value.disabled = true;
			}
		} else {
			console.error("Failed to equip stash item");
		}
	}
}

watch(
	() => ({ ...main.stashItemDetails }),
	async (newStashItemDetails, oldStashItemDetails) => {
		if (
			JSON.stringify(oldStashItemDetails) !== "{}" &&
			JSON.stringify(newStashItemDetails) !== "{}" &&
			JSON.stringify(newStashItemDetails) !==
				JSON.stringify(oldStashItemDetails)
		) {
			const updatedStashItemView =
				await ItemService.updateItemGetStashItemView(
					newStashItemDetails as StashItemView
				);
			if (updatedStashItemView) {
				updateStashItems(updatedStashItemView);
			} else {
				console.error("Failed to update stash item");
			}
		}
	},
	{ deep: true }
);

function showDetails(stashItem: StashItemView) {
	main.stashItemDetails = stashItem;
	if (main.isEquipped(stashItem) && equipButton.value) {
		equipButton.value.textContent = "Equipped";
		equipButton.value.disabled = true;
	} else {
		if (equipButton.value) {
			equipButton.value.textContent = "Equip";
			equipButton.value.disabled = false;
		}
	}
}

function showDetailsModal(stashItem: StashItemView) {
	main.stashItemDetails = stashItem;
	modalInstance?.show();
}
</script>

<template>
	<div class="content">
		<div class="row g-2">
			<div id="stash-items" class="col-12 col-lg-7 col-xl-8">
				<div class="row p-3">
					<div
						class="stash-item p-0 m-2"
						v-for="(stashItem, index) in state.stashItems"
						:key="index"
					>
						<button
							type="button"
							class="btn img-thumb d-lg-none"
							@click="showDetailsModal(stashItem)"
						>
							<img
								class="img-fluid"
								:src="`${stashItem.src}`"
								:alt="`${stashItem.name}`"
							/>
						</button>
						<button
							type="button"
							class="p-0 m-0 btn img-thumb d-none d-lg-block"
							@click="showDetails(stashItem)"
						>
							<img
								class="img-fluid p-0 m-0"
								:src="`${stashItem.src}`"
								:alt="`${stashItem.name}`"
							/>
						</button>
					</div>
				</div>
			</div>
			<div class="col-12 col-lg-5 col-xl-4 d-none d-lg-block">
				<div class="stash-item-info p-3">
					<p v-if="!main.stashItemDetails">No Item Selected</p>
					<div v-if="main.stashItemDetails">
						<div class="row g-3 d-flex">
							<div
								class="col-4 col-xl-4 col-xxl-3 ps-0 text-left"
							>
								<img
									class="img-fluid tile"
									:src="`${main.stashItemDetails.src}`"
									:alt="`${main.stashItemDetails.name}`"
								/>
							</div>
							<div class="col-8 tile p-2 flex-grow-1">
								<h4 class="mb-0">
									{{ main.stashItemDetails.name }}
								</h4>
								<div
									class="row"
									v-if="
										main.stashItemDetails.category ===
										'Armour'
									"
								>
									<label
										class="col-sm-6 col-form-label"
										for="dexterity"
										>Dex</label
									>
									<div class="col-sm-6">
										<EditableText
											v-model="
												main.stashItemDetails.dexterity
											"
											@save="() => {}"
										/>
									</div>
								</div>

								<div
									class="row"
									v-if="
										main.stashItemDetails.category ===
										'Armour'
									"
								>
									<label
										class="col-sm-6 col-form-label"
										for="strength"
										>Str</label
									>
									<div class="col-sm-6">
										<EditableText
											v-model="
												main.stashItemDetails.strength
											"
											@save="() => {}"
										/>
									</div>
								</div>

								<div
									class="row"
									v-if="
										main.stashItemDetails.category ===
										'Armour'
									"
								>
									<label
										class="col-sm-6 col-form-label"
										for="intelligence"
										>Int</label
									>
									<div class="col-sm-6">
										<EditableText
											v-model="
												main.stashItemDetails
													.intelligence
											"
											@save="() => {}"
										/>
									</div>
								</div>

								<div
									class="row"
									v-if="
										main.stashItemDetails.category ===
										'Armour'
									"
								>
									<label
										class="col-sm-6 col-form-label"
										for="constitution"
										>Const</label
									>
									<div class="col-sm-6">
										<EditableText
											v-model="
												main.stashItemDetails
													.constitution
											"
											@save="() => {}"
										/>
									</div>
								</div>

								<div
									class="row"
									v-if="
										main.stashItemDetails.category ===
										'Armour'
									"
								>
									<label
										class="col-sm-6 col-form-label"
										for="dexterity"
										>Evasion</label
									>
									<div class="col-sm-6">
										<EditableText
											v-model="
												main.stashItemDetails
													.armourEvasion
											"
											@save="() => {}"
										/>
									</div>
								</div>
								<div
									class="row"
									v-if="
										main.stashItemDetails.category ===
										'Weapons'
									"
								>
									<label
										class="col-sm-6 col-form-label"
										for="base-damage"
										>Damage</label
									>
									<div class="col-sm-6">
										<EditableText
											v-model="
												main.stashItemDetails.baseDamage
											"
											@save="() => {}"
										/>
									</div>
								</div>

								<div
									class="row"
									v-if="
										main.stashItemDetails.category ===
										'Weapons'
									"
								>
									<label
										class="col-sm-6 col-form-label"
										for="attack-speed"
										>Speed</label
									>
									<div class="col-sm-6">
										<EditableText
											v-model="
												main.stashItemDetails
													.attackSpeed
											"
											@save="() => {}"
										/>
									</div>
								</div>
								<div
									class="row"
									v-if="
										main.stashItemDetails.category ===
										'Weapons'
									"
								>
									<label
										class="col-sm-6 col-form-label"
										for="attack-type"
										>Attack</label
									>
									<div class="col-sm-6">
										<EditableText
											v-model="
												main.stashItemDetails.attackType
											"
											@save="() => {}"
										/>
									</div>
								</div>
								<div
									class="row"
									v-if="
										main.stashItemDetails.category ===
										'Weapons'
									"
								>
									<label
										class="col-sm-6 col-form-label"
										for="weapon-type"
										>Attribute</label
									>
									<div class="col-sm-6">
										<EditableText
											v-model="
												main.stashItemDetails.weaponType
											"
											@save="() => {}"
										/>
									</div>
								</div>
								<div
									class="row"
									v-if="
										main.stashItemDetails.category ===
										'Weapons'
									"
								>
									<label
										class="col-sm-6 col-form-label"
										for="accuracy"
										>Accuracy</label
									>
									<div class="col-sm-6">
										<EditableText
											v-model="
												main.stashItemDetails.accuracy
											"
											@save="() => {}"
										/>
									</div>
								</div>
								<div
									class="row"
									v-if="
										main.stashItemDetails.category ===
										'Weapons'
									"
								>
									<label
										class="col-sm-6 col-form-label"
										for="evasion"
										>Evasion</label
									>
									<div class="col-sm-6">
										<EditableText
											v-model="
												main.stashItemDetails
													.weaponEvasion
											"
											@save="() => {}"
										/>
									</div>
								</div>
							</div>
						</div>
						<div class="row g-3 pt-3">
							<button
								class="btn btn-lg btn-primary mb-1"
								@click="equip(main.stashItemDetails)"
								ref="equipButton"
							>
								Equip
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- Vertically Centered Block Modal -->
		<div
			class="modal d-lg-none"
			ref="stashItemDetailsModal"
			id="modal-block-vcenter"
			tabindex="-1"
			role="dialog"
			aria-labelledby="modal-block-vcenter"
			aria-hidden="true"
		>
			<div class="modal-dialog modal-dialog-centered" role="document">
				<div class="modal-content">
					<BaseBlock
						v-if="main.stashItemDetails"
						:title="main.stashItemDetails?.name"
						transparent
						class="mb-0"
					>
						<template #header>
							{{ main.stashItemDetails.name }}
						</template>
						<template #options>
							<button
								type="button"
								class="btn-block-option"
								data-bs-dismiss="modal"
								aria-label="Close"
							>
								<i class="fa fa-fw fa-times"></i>
							</button>
						</template>

						<template #content>
							<div class="block-content fs-sm p-3">
								<div class="row g-3 d-flex">
									<div class="col-3 ps-0 text-left">
										<img
											class="img-fluid tile"
											:src="`${main.stashItemDetails.src}`"
											:alt="`${main.stashItemDetails.name}`"
										/>
									</div>
									<div class="col-8 tile p-2 flex-grow-1">
										<div class="row">
											<label
												class="col-sm-3 col-form-label"
												for="base-damage"
												>Damage</label
											>
											<div class="col-sm-9">
												<EditableText
													v-model="
														main.stashItemDetails
															.baseDamage
													"
													@save="() => {}"
												/>
											</div>
										</div>

										<div class="row">
											<label
												class="col-sm-3 col-form-label"
												for="attack-speed"
												>Speed</label
											>
											<div class="col-sm-9">
												<EditableText
													v-model="
														main.stashItemDetails
															.attackSpeed
													"
													@save="() => {}"
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div
								class="block-content block-content-full text-end bg-body"
							>
								<button
									type="button"
									class="btn btn-sm btn-alt-secondary me-1"
									data-bs-dismiss="modal"
								>
									Close
								</button>
								<button
									type="button"
									class="btn btn-sm btn-primary"
									data-bs-dismiss="modal"
								>
									Perfect
								</button>
							</div>
						</template>
					</BaseBlock>
				</div>
			</div>
		</div>
		<!-- END Vertically Centered Block Modal -->
	</div>
</template>
