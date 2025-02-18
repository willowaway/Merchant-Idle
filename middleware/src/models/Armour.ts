import IArmour from "../interfaces/IArmour";

export class Armour implements IArmour {
	id: string;
	itemId: string;
	tier: number;
	slot: string;
	evasion: number;
	dexterity: number;
	strength: number;
	intelligence: number;
	constitution: number;
}
