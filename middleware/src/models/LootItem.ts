import ILootItem from "../interfaces/ILootItem";

export class LootItem implements ILootItem {
	id: number;
	lootId: number;
	itemId: number;
	weight: number;
}
