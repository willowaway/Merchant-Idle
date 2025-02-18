import IWeapon from "../interfaces/IWeapon";

export class Weapon implements IWeapon {
	id: string;
	itemId: string;
	tier: number;
	slot: string;
	baseDamage: string;
	attackSpeed: number;
	attackType: string;
	weaponType: string;
	accuracy: number;
	evasion: number;
}
