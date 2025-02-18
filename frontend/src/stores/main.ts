import { EquipmentItemView, type User } from "merchant-idle-middleware";
import { defineStore } from "pinia";

interface IApplicationState {
	username: string | undefined;
	userId: string | undefined;
	email: string | undefined;
	playerHP: number | undefined;
	helmet: EquipmentItemView | undefined;
	necklace: EquipmentItemView | undefined;
	chest: EquipmentItemView | undefined;
	offhand: EquipmentItemView | undefined;
	weapon: EquipmentItemView | undefined;
	gloves: EquipmentItemView | undefined;
	legs: EquipmentItemView | undefined;
	boots: EquipmentItemView | undefined;
	ring: EquipmentItemView | undefined;
	bracelet: EquipmentItemView | undefined;
}

const initialState: IApplicationState = {
	username: undefined,
	email: undefined,
	userId: undefined,
	playerHP: undefined,
	helmet: undefined,
	necklace: undefined,
	chest: undefined,
	offhand: undefined,
	weapon: undefined,
	gloves: undefined,
	legs: undefined,
	boots: undefined,
	ring: undefined,
	bracelet: undefined,
};

export const useMainStore = defineStore("main", {
	state: () => initialState,

	actions: {
		equipAll(equipmentItemViews: EquipmentItemView[]) {
			equipmentItemViews.forEach((equipmentItemView) => {
				this.equip(equipmentItemView);
			});
		},
		unequip(equipment: EquipmentItemView) {
			if (equipment.armourSlot) {
				switch (equipment.armourSlot) {
					case "Helmet":
						this.helmet = undefined;
						break;
					case "Necklace":
						this.necklace = undefined;
						break;
					case "Chest":
						this.chest = undefined;
						break;
					case "Offhand":
						this.offhand = undefined;
					case "Legs":
						this.legs = undefined;
						break;
					case "Gloves":
						this.gloves = undefined;
						break;
					case "Boots":
						this.boots = undefined;
						break;
					case "Ring":
						this.ring = undefined;
						break;
					case "Bracelet":
						this.bracelet = undefined;
						break;
					default:
						console.error(
							`Armour slot not defined for ${equipment.name}`
						);
						break;
				}
			} else if (equipment.weaponSlot) {
				switch (equipment.weaponSlot) {
					case "Weapon":
						this.weapon = undefined;
						break;
					default:
						console.error(
							`Weapon slot not defined for ${equipment.name}`
						);
						break;
				}
			} else {
				console.error(
					`Equipment slot not defined for ${equipment.name}`
				);
			}
		},
		equip(equipment: EquipmentItemView) {
			if (equipment.armourSlot) {
				switch (equipment.armourSlot) {
					case "Helmet":
						this.helmet = equipment;
						break;
					case "Necklace":
						this.necklace = equipment;
						break;
					case "Chest":
						this.chest = equipment;
						break;
					case "Offhand":
						this.offhand = equipment;
						break;
					case "Legs":
						this.legs = equipment;
						break;
					case "Gloves":
						this.gloves = equipment;
						break;
					case "Boots":
						this.boots = equipment;
						break;
					case "Ring":
						this.ring = equipment;
						break;
					case "Bracelet":
						this.bracelet = equipment;
						break;
					default:
						console.error(
							`Armour slot not defined for ${equipment.name}`
						);
						break;
				}
			} else if (equipment.weaponSlot) {
				switch (equipment.weaponSlot) {
					case "Weapon":
						this.weapon = equipment;
						break;
					default:
						console.error(
							`Weapon slot not defined for ${equipment.name}`
						);
						break;
				}
			} else {
				console.error(
					`Equipment slot not defined for ${equipment.name}`
				);
			}
		},
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
