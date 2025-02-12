<script setup lang="ts">
import { reactive } from "vue";
import { useMainStore } from "@/stores/main";
import { watch } from "vue";
import type { Stash } from "merchant-idle-middleware";
import StashService from "@/services/StashService";

const main = useMainStore();

const state = reactive<{ stashItems: Stash[] }>({
	stashItems: [],
});

async function loadStash() {
	if (main.user) {
		StashService.getStashesForUser(main.user.id);
	} else {
		console.error("Load Stash without user defined in pinia");
	}
}

const unwatch = watch(
	() => main.user, // The property you want to watch
	(newValue, oldValue) => {
		// Code to execute when the property changes
		console.log(`User changed from ${oldValue} to ${newValue}`);
		loadStash();

		unwatch();
	}
);
</script>

<template>
	<div class="content">
		<div class="row items-push">
			<div
				v-for="(stashItem, index) in state.stashItems"
				:key="index"
				class="col-md-6 col-lg-4 col-xl-3"
			>
				<a
					href="javascript:void(0)"
					class="img-link img-link-zoom-in img-thumb img-lightbox"
				>
					<!-- TODO: src for stashItem -->
					<img
						class="img-fluid"
						:src="`${stashItem.id}`"
						alt="Photo"
					/>
				</a>
			</div>
		</div>
	</div>
</template>
