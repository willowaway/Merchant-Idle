import firebaseApp from "./firebase-app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import router from "@/router/router";
import { useMainStore } from "@/stores/main";

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(firebaseApp);

onAuthStateChanged(auth, (user) => {
	const main = useMainStore();

	if (user) {

		// User is signed in
		main.setUserId(user.uid);
		if (user.displayName) {
			main.setPlayerName(user.displayName)
		}
		
		// Go to stash
		router.push({ name: "stash" });
	} else {
		main.playerLogOut();
		// User is signed out
		router.push({ name: "signin" });
	}
});

export default auth;