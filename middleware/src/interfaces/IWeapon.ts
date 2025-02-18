export default interface IWeapon {
	id: string;
	itemId: string;
	tier: number;
	slot: string;
	/** 1d8, 2d6, etc */
	baseDamage: string;
	attackSpeed: number;
	/** Slice, Stab, Crush, Accurate, Rapid, Long Range, Missile, Barrage, Elemental */
	attackType: string;
	/** Dex, Str, Int */
	weaponType: string;
	accuracy: number;
	evasion: number;
}
