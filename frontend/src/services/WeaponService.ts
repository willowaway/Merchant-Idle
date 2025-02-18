import { plainToInstance } from "class-transformer";
import {
	StashItemView,
	type UpdateWeaponGetStashItemViewRequest,
} from "merchant-idle-middleware";
import { Service } from "./Service";

class WeaponService extends Service {
	async updateWeaponGetStashItemView(
		stashItem: StashItemView
	): Promise<StashItemView | undefined> {
		if (
			stashItem.baseDamage !== null &&
			stashItem.attackSpeed !== null &&
			stashItem.attackType !== null &&
			stashItem.weaponType !== null &&
			stashItem.weaponEvasion !== null
		) {
			const request: UpdateWeaponGetStashItemViewRequest = {
				id: stashItem.id,
				name: stashItem.name,
				itemId: stashItem.itemId,
				baseDamage: stashItem.baseDamage,
				attackSpeed: stashItem.attackSpeed,
				attackType: stashItem.attackType,
				weaponType: stashItem.weaponType,
				evasion: stashItem.weaponEvasion,
			};

			const response = await fetch(
				`${this.apiUrl}/api/weapon/update/get-stash-item-view`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(request),
				}
			);
			const responseJson = await this.handleResponse(response);

			const updatedStashItem = plainToInstance(
				StashItemView,
				responseJson
			);
			return updatedStashItem;
		} else {
			console.error(
				`updateWeaponGetStashItemView: request has incomplete parameters: ${stashItem}`
			);
			return;
		}
	}
}

export default new WeaponService();
