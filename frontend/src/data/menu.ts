/*
 * Main and demo navigation arrays
 *
 * 'to' attribute points to the route name, not the path url
 */
import type { Node } from "@/interfaces/Node";
import chestImg from "/assets/media/icons/Chest.png";
import coinImg from "/assets/media/icons/Coin.png";

const menu: Array<Node> =  [
	{
		name: 'Stash',
		to: 'stash', 
		src: chestImg
	},
	{
		name: 'Shop',
		to: 'shop',
		src: coinImg
	}
]

export default menu;