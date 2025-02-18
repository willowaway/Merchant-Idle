export default interface IEquipmentItemView {
	id: string;
	name: string;
	userId: string;
	itemId: string;
	stashId: string;

	/** Item */
	category: string;
	src: string;

	/** Weapon */
	baseDamage: string | null;
	attackSpeed: number | null;
	attackType: string | null;
	weaponType: string | null;
	accuracy: number | null;

	/** Weapon/Armour */
	weaponTier: number | null;
	armourTier: number | null;
	weaponEvasion: number | null;
	armourEvasion: number | null;
	weaponSlot: string | null;
	armourSlot: string | null;

	/** Armour */
	dexterity: number | null;
	strength: number | null;
	intelligence: number | null;
	constitution: number | null;
}
