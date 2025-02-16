<script setup lang="ts">
import { onMounted, reactive } from "vue";
import { useMainStore } from "@/stores/main";
import { watch } from "vue";
import { Stash, StashItemView } from "merchant-idle-middleware";
import StashService from "@/services/StashService";
import { ref, nextTick } from "vue";
import EditableText from "@/layouts/partials/EditableText.vue";
import { Modal } from "bootstrap";
import { isNullishCoalesce } from "typescript";
import BaseBlock from "@/components/BaseBlock.vue";
import ItemService from "@/services/ItemService";

const main = useMainStore();

const stashItemDetailsModal = ref<HTMLElement | null>(null);
let modalInstance: Modal | null = null;

onMounted(() => {
	if (stashItemDetailsModal.value) {
		modalInstance = new Modal(stashItemDetailsModal.value);
	}
});

const state = reactive<{
	stashItems: StashItemView[];
	stashItemDetails: StashItemView | undefined;
	editMode: boolean;
}>({
	stashItems: [],
	stashItemDetails: undefined,
	editMode: false,
});

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

loadStash();

watch(
	() => ({ ...state.stashItemDetails }),
	async (newStashItemDetails, oldStashItemDetails) => {
		if (
			JSON.stringify(newStashItemDetails) !==
			JSON.stringify(oldStashItemDetails)
		) {
			console.log("Update");
			const updatedStashItemView =
				await ItemService.updateItemGetStashItemView(
					newStashItemDetails as StashItemView
				);
			updateStashItems(updatedStashItemView);
		}
	},
	{ deep: true }
);

function showDetails(stashItem: StashItemView) {
	state.stashItemDetails = stashItem;
}
function showDetailsModal(stashItem: StashItemView) {
	state.stashItemDetails = stashItem;
	modalInstance?.show();
}
</script>

<template>
	<div class="content">
		<div class="row g-2">
			<div
				v-for="(stashItem, index) in state.stashItems"
				:key="index"
				class="col-12 col-lg-7 col-xl-8"
			>
				<div id="stash-items" class="p-3">
					<button
						type="button"
						class="btn img-thumb d-lg-none"
						@click="showDetailsModal(stashItem)"
					>
						<img
							class="img-fluid"
							width="50"
							:src="`${stashItem.src}`"
							:alt="`${stashItem.name}`"
						/>
					</button>
					<button
						type="button"
						class="btn img-thumb d-none d-lg-block"
						@click="showDetails(stashItem)"
					>
						<img
							class="img-fluid"
							width="50"
							:src="`${stashItem.src}`"
							:alt="`${stashItem.name}`"
						/>
					</button>
				</div>
			</div>
			<div class="col-12 col-lg-5 col-xl-4 d-none d-lg-block">
				<div class="stash-item-info p-3">
					<p v-if="!state.stashItemDetails">No Item Selected</p>
					<div v-if="state.stashItemDetails">
						<div class="row g-3 d-flex">
							<div
								class="col-4 col-xl-4 col-xxl-3 ps-0 text-left"
							>
								<img
									class="img-fluid tile"
									:src="`${state.stashItemDetails.src}`"
									:alt="`${state.stashItemDetails.name}`"
								/>
							</div>
							<div class="col-8 tile p-2 flex-grow-1">
								<h4 class="mb-0">
									{{ state.stashItemDetails.name }}
								</h4>
								<div class="row">
									<label
										class="col-sm-4 col-form-label"
										for="base-damage"
										>Damage</label
									>
									<div class="col-sm-8">
										<EditableText
											v-model="
												state.stashItemDetails
													.baseDamage
											"
											@save="() => {}"
										/>
									</div>
								</div>

								<div class="row">
									<label
										class="col-sm-4 col-form-label"
										for="attack-speed"
										>Speed</label
									>
									<div class="col-sm-8">
										<EditableText
											v-model="
												state.stashItemDetails
													.attackSpeed
											"
											@save="() => {}"
										/>
									</div>
								</div>
							</div>
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
						v-if="state.stashItemDetails"
						:title="state.stashItemDetails?.name"
						transparent
						class="mb-0"
					>
						<template #header>
							{{ state.stashItemDetails.name }}
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
											:src="`${state.stashItemDetails.src}`"
											:alt="`${state.stashItemDetails.name}`"
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
														state.stashItemDetails
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
														state.stashItemDetails
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
