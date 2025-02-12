import type { User } from "merchant-idle-middleware";
import { defineStore } from "pinia";

interface IApplicationState {
	user: User | undefined;
}

const initialState: IApplicationState = {
	user: undefined,
};

export const useMainStore = defineStore("main", {
	state: () => initialState,

	actions: {
		signIn(user: User) {
			this.user = user;
		},
		logOut() {
			this.user = undefined;
		},
	},
});
