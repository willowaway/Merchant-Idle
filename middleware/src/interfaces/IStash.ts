export default interface IStash {
	id: string;
	userId: string;
	itemId: string;
	numberInShop: number;
	numberInStash: number;
	priceEstimated: number;
	reaction: string;
	isPopular: boolean;
}
