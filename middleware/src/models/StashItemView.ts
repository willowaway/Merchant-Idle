import IStashItemView from "../interfaces/IStashItemView";

export class StashItemView implements IStashItemView {
	id: string;
	name: string;
	userId: string;
	itemId: string;
	numberInShop: number;
	numberInStash: number;
	priceEstimated: number;
	reaction: string;
	isPopular: boolean;
	category: string;
	slot: string;
	tier: number;
	baseValue: number;
	src: string;
	isEquipped: boolean;
	baseDamage: string | null;
	attackSpeed: number | null;
	attackType: string | null;
	weaponType: string | null;
	dexterity: number | null;
	strength: number | null;
	intelligence: number | null;
	constitution: number | null;
	accuracy: number | null;
	evasion: number | null;
}
