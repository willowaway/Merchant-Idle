<script setup lang="ts">
import { reactive } from "vue";
import { collection, addDoc, setDoc, getDocs, doc, query, where, type FirestoreDataConverter, type QueryDocumentSnapshot } from "firebase/firestore"; 
import db from "@/firebase/db";
import { useMainStore } from "@/stores/main";
import { watch } from 'vue';
import type Stash from "@/firebase/interfaces/Stash"
import { converter } from "@/firebase/converter";

const main = useMainStore();

const state = reactive<{stashItems: Stash[]}>({
	stashItems: []
});

async function loadStash() {
	try {
		const stash = collection(db, "stash").withConverter(converter.stash);
		const stashItemsForUserQuery = query(stash, where("userId", "==", main.userId));
		const stashItemsForUser = await getDocs(stashItemsForUserQuery);
		state.stashItems = stashItemsForUser.docs.map(doc => doc.data());
		console.log(state.stashItems);
		// stashItemsForUser.forEach((stashItem) => {
		// 	console.log(stashItem.id, " => ", stashItem.data());
		// });
	}
	catch(error) {
		console.error(error);
	}
}

const unwatch = watch(
		() => main.userId, // The property you want to watch
		(newValue, oldValue) => {
			// Code to execute when the property changes
			console.log('Property changed:', newValue, oldValue);
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
				<img class="img-fluid" :src="`${stashItem.src}`" alt="Photo" />
				</a>
			</div>
		</div>
  </div>
</template>
