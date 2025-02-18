import { StashItemView } from "merchant-idle-middleware";
import { Service } from "./Service";
import WeaponService from "./WeaponService";
import ArmourService from "./ArmourService";

class ItemService extends Service {
	async updateItemGetStashItemView(
		stashItem: StashItemView
	): Promise<StashItemView | undefined> {
		if (stashItem.category === "Weapons") {
			return WeaponService.updateWeaponGetStashItemView(stashItem);
		} else if (
			stashItem.category === "Jewelry" ||
			stashItem.category === "Armour"
		) {
			return ArmourService.updateItemGetStashItemView(stashItem);
		} else {
			console.error(
				`updateItemGetStashItemView: category not supported: ${stashItem.category}`
			);
			return undefined;
		}
	}
}

export default new ItemService();
