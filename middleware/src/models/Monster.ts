import IMonster from "../interfaces/IMonster";

export class Monster implements IMonster {
	id: string;
	name: string;
	hp: number;
	lootId: string;
}
