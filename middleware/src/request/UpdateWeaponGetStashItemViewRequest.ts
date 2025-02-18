export interface UpdateWeaponGetStashItemViewRequest {
	id: string; // stashId
	name: string; // itemName
	itemId: string;

	/** Weapon */
	baseDamage: string;
	attackSpeed: number;
	attackType: string;
	weaponType: string;

	/** Weapon/Armour */
	evasion: number;
}
