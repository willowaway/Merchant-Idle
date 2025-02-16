import type { User } from "merchant-idle-middleware";
import { defineStore } from "pinia";

interface IApplicationState {
	username: string | undefined;
	userId: string | undefined;
	email: string | undefined;
	playerHP: number | undefined;
}

const initialState: IApplicationState = {
	username: undefined,
	email: undefined,
	userId: undefined,
	playerHP: undefined,
};

export const useMainStore = defineStore("main", {
	state: () => initialState,

	actions: {
		setUser(user: User) {
			this.userId = user.id;
			this.username = user.username;
			this.email = user.email;
		},
		setPlayerName(playerName: string) {
			this.username = playerName;
		},
		setPlayerHP(playerHP: number) {
			this.playerHP = playerHP;
		},
		logOut() {
			this.username = initialState.username;
			this.userId = initialState.userId;
			this.playerHP = initialState.playerHP;
		},
	},
});
