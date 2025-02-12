import IMonster from "../interfaces/IMonster";

export class Monster implements IMonster {
	id: number;
	hp: number;
	lootId: number;
}
