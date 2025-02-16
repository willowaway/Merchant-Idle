import ILootItem from "../interfaces/ILootItem";

export class LootItem implements ILootItem {
	id: string;
	lootId: string;
	itemId: string;
	weight: number;
}
