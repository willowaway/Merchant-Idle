export default interface IStash {
	id: number;
	userId: number;
	itemId: number;
	numberInInShop: number;
	numberInStash: number;
	priceEstimated: number;
	reaction: string;
	isPopular: boolean;
}
