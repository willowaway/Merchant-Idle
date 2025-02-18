import IItem from "../interfaces/IItem";

export class Item implements IItem {
	id: string;
	name: string;
	category: string;
	baseValue: number;
	src: string;
}
