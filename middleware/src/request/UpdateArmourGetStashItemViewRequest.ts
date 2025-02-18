export interface UpdateArmourGetStashItemViewRequest {
	id: string; // stashId
	name: string; // itemName
	itemId: string;

	/** Weapon/Armour */
	evasion: number;

	/** Armour */
	dexterity: number;
	strength: number;
	intelligence: number;
	constitution: number;
}
