/*
 * Main and demo navigation arrays
 *
 * 'to' attribute points to the route name, not the path url
 */
import type { Node } from "@/interfaces/node";

const menu: Array<Node> =  [
	{
		name: 'Stash',
		to: 'stash', 
		src: '/assets/media/PixelItems/General/Singles/562_Chest.png'
	},
	{
		name: 'Shop',
		to: 'shop',
		src: '/assets/media/PixelItems/General/Singles/561_Coin.png'
	},
	{
		name: 'More',
		heading: true,
	},
	{
		name: 'Login',
		to: 'login',
		icon: 'si si-rocket',
	},
]

export default menu;