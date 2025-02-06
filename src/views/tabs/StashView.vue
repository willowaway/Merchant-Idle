<script setup lang="ts">
import { collection, addDoc, setDoc, getDocs, doc, query, where } from "firebase/firestore"; 
import db from "@/firebase/db";
import { useMainStore } from "@/stores/main";
import { watch } from 'vue';

const main = useMainStore();
async function loadStash() {
	try {
		const stash = collection(db, "stash");
		console.log(`main.userId: ${main.userId}`);
		const stashItemsForUserQuery = query(stash, where("userId", "==", main.userId));
		const stashItemsForUser = await getDocs(stashItemsForUserQuery);
		stashItemsForUser.forEach((stashItem) => {
			console.log(stashItem.id, " => ", stashItem.data());
		});
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
  <BasePageHeading title="Dashboard" subtitle="Welcome Admin!">
    <template #extra>
      <button type="button" class="btn btn-alt-primary">
        <i class="fa fa-plus opacity-50 me-1"></i>
        New Stash
      </button>
    </template>
  </BasePageHeading>

  <div class="content">
    <div class="row items-push">
      <div class="col-sm-6 col-xl-4">
        <BaseBlock title="Block" class="h-100 mb-0">
          <p>
            This is a stash layout
          </p>
        </BaseBlock>
      </div>
      <div class="col-sm-6 col-xl-4">
        <BaseBlock title="Block" class="h-100 mb-0">
          <p>...</p>
        </BaseBlock>
      </div>
      <div class="col-xl-4">
        <BaseBlock title="Block" class="h-100 mb-0">
          <p>...</p>
        </BaseBlock>
      </div>
    </div>
  </div>
</template>
