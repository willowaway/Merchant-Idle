import { defineStore } from 'pinia';
import { ITitleDataEnemies } from "../shared/types";
import { IEquipmentSlots } from "./types";

interface IApplicationState {
	playerName: string;
	playerId: string;
	hasPlayerId: boolean;
	playerHP: number;
	catalog: PlayFabClientModels.CatalogItem[];
	inventory: PlayFabClientModels.GetUserInventoryResult;
	stores: PlayFabClientModels.GetStoreItemsResult[];
	enemies: ITitleDataEnemies;
	storeNames: string[];
	equipment: IEquipmentSlots;
}

const initialState: IApplicationState = {
	playerName: null,
	playerId: undefined,
	hasPlayerId: false,
	playerHP: 0,
	catalog: null,
	inventory: null,
	stores: null,
	enemies: null,
	storeNames: null,
	equipment: null,
};

export const useMainStore = defineStore('main', {
	state: () => (initialState),

	actions: {
		setPlayerName(playerName: string) {
			this.playerName = playerName;
		},
		setPlayerId(playerId: string) {
			this.playerId = playerId;
			this.hasPlayerId = true;
		},
		setPlayerHP(playerHP: number) {
			this.playerHP = playerHP;
		},
		setCatalog(catalog: PlayFabClientModels.CatalogItem[]) {
			this.catalog = catalog;
		},
		setInventory(inventory: PlayFabClientModels.GetUserInventoryResult) {
			this.inventory = inventory;
		},
		setStores(stores: PlayFabClientModels.GetStoreItemsResult[]) {
			this.stores = stores;
		},
		setEnemies(enemies: ITitleDataEnemies) {
			this.enemies = enemies;
		},
		setStoreNames(storeNames: string[]) {
			this.storeNames = storeNames;
		},
		setEquipment(equipment: IEquipmentSlots) {
			this.equipment = equipment;
		},
		playerLogOut() {
			this.playerName = initialState.playerName;
			this.playerId = initialState.playerId;
			this.hasPlayerId = initialState.hasPlayerId;
			this.playerHP = initialState.playerHP;
			this.inventory = initialState.inventory;
			this.equipment = initialState.equipment;
		}
	},
});