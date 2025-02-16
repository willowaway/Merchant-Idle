export default interface IItem {
	id: string;
	name: string;
	category: string;
	slot: string;
	tier: number;
	baseValue: number;
	src: string;
	/** 1d8, 2d6, etc */
	baseDamage: string | null;
	attackSpeed: number | null;
	/** Slice, Stab, Crush, Accurate, Rapid, Long Range, Missile, Barrage, Elemental */
	attackType: string | null;
	/** Dex, Str, Int */
	weaponType: string | null;
	dexterity: number | null;
	strength: number | null;
	intelligence: number | null;
	constitution: number | null;
	accuracy: number | null;
	evasion: number | null;
}
