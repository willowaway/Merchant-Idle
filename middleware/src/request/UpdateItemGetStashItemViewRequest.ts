export interface UpdateItemGetStashItemViewRequest {
	id: string; //stashId
	itemId: string;
	name: string;
	category: string;
	slot: string;
	tier: number;
	baseValue: number;
	src: string;
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
