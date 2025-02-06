import { defineStore } from 'pinia';

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

export const useMainStore = defineStore('main', {
	state: () => (initialState),

	actions: {
		setPlayerName(playerName: string) {
			this.username = playerName;
		},
		setEmail(email: string) {
			this.email = email;
		},
		setUserId(playerId: string) {
			this.userId = playerId;
		},
		setPlayerHP(playerHP: number) {
			this.playerHP = playerHP;
		},
		playerLogOut() {
			this.username = initialState.username;
			this.userId = initialState.userId;
			this.playerHP = initialState.playerHP;
		}
	},
});