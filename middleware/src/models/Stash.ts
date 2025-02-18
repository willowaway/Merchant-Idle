import IStash from "../interfaces/IStash";

export class Stash implements IStash {
	id: string;
	userId: string;
	itemId: string;
	numberInShop: number;
	numberInStash: number;
	priceEstimated: number;
	reaction: string;
	isPopular: boolean;
}
