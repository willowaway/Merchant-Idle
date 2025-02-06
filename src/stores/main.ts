import { defineStore } from 'pinia';

interface IApplicationState {
	playerName: string | undefined;
	userId: string | undefined;
	playerHP: number | undefined;
}

const initialState: IApplicationState = {
	playerName: undefined,
	userId: undefined,
	playerHP: undefined,
};

export const useMainStore = defineStore('main', {
	state: () => (initialState),

	actions: {
		setPlayerName(playerName: string) {
			this.playerName = playerName;
		},
		setUserId(playerId: string) {
			this.userId = playerId;
		},
		setPlayerHP(playerHP: number) {
			this.playerHP = playerHP;
		},
		playerLogOut() {
			this.playerName = initialState.playerName;
			this.userId = initialState.userId;
			this.playerHP = initialState.playerHP;
		}
	},
});