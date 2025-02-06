import { type FirestoreDataConverter, type QueryDocumentSnapshot } from "firebase/firestore"; 
import type Stash from "./interfaces/Stash";

const stash: FirestoreDataConverter<Stash> = {
	toFirestore: (data: Stash) => data,
	fromFirestore: (snapshot: QueryDocumentSnapshot<Stash>, options) => {
		const data = snapshot.data(options)!;
		return {
			userId: data.userId,
			itemId: data.itemId,
			itemName: data.itemName,
			quantity: data.quantity,
			src: data.src
		};
	}
};

export const converter = {
	stash
} 