import IStash from "../interfaces/IStash";

export class Stash implements IStash {
	id: number;
	userId: number;
	itemId: number;
	numberInInShop: number;
	numberInStash: number;
	priceEstimated: number;
	reaction: string;
	isPopular: boolean;
}
