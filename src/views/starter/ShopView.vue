<script setup lang="ts">
import { collection, addDoc, setDoc, getDocs, doc, query, where } from "firebase/firestore"; 
import db from "@/firebase/db";
import { useMainStore } from "@/stores/main";

const main = useMainStore();
// On form submission
async function onSubmit() {
	try {
		if (main.userId) {

			const stash = collection(db, "stash");
			const stashItemsForUserQuery = query(stash, where("userId", "==", main.userId));
			const stashItemsForUser = await getDocs(stashItemsForUserQuery);
			stashItemsForUser.forEach((stashItem) => {
				console.log(stashItem.id, " => ", stashItem.data());
			});

			// const itemsForUser = 


			// const itemsCollection = collection(db, "items");
			// const items = doc(db, "items", main.playerId);
			// const userItems = collection(items, "");
			// setDoc(userItems, {
			// 	name: "Bronze Dagger"
			// });
			// const items = doc(db, "items", main.playerId);
			// const userCollection = collection(items, "user")

			// const users = doc(db, "users", main.playerId);
			// const itemsColletion = collection(users, "items");
			// const items = doc(itemsColletion);
			// setDoc(items, {
			// 	name: "Bronze Dagger"
			// })
			// .then(() => {
			// 	console.log("Bronze Dagger completed successfully");
			// })
			// .catch((error) => {
			// 	console.error("Error creating bronze dagger", error);
			// });
		}

		// const docRef = await addDoc(collection(db, "items"), {
		// 	first: "Ada",
		// 	last: "Lovelace",
		// 	born: 1815
		// });
		// console.log("Document written with ID: ", docRef.id);
	} catch (e) {
		console.error("Error: ", e);
	}
}
</script>

<template>
  <BasePageHeading title="Dashboard" subtitle="Welcome Admin!">
    <template #extra>
		<form @submit.prevent="onSubmit">

			<button type="submit" class="btn btn-alt-primary" >
        <i class="fa fa-plus opacity-50 me-1"></i>
        Shop
      </button>
		</form>
    </template>
  </BasePageHeading>

  <div class="content">
    <div class="row items-push">
      <div class="col-sm-6 col-xl-4">
        <BaseBlock title="Block" class="h-100 mb-0">
          <p>
            This is a store view
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
