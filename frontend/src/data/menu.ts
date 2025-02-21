/*
 * Main and demo navigation arrays
 *
 * 'to' attribute points to the route name, not the path url
 */
import type { Node } from "@/interfaces/Node";
import chestImg from "/assets/media/Icons/Stash.png";
import coinImg from "/assets/media/Icons/Coin.png";
import exploreImg from "/assets/media/Icons/Swords.png";

const menu: Array<Node> = [
	{
		name: "Stash",
		to: "stash",
		src: chestImg,
	},
	{
		name: "Shop",
		to: "shop",
		src: coinImg,
	},
	{
		name: "Explore",
		to: "explore",
		src: exploreImg,
	},
];

export default menu;
