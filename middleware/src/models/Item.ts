import IItem from "../interfaces/IItem";

export class Item implements IItem {
	id: number;
	name: string;
	category: string;
	type: string;
	tier: number;
	baseValue: number;
	src: string;
}
