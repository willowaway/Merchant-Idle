import { plainToInstance } from "class-transformer";
import {
	StashItemView,
	type UpdateArmourGetStashItemViewRequest,
} from "merchant-idle-middleware";
import { Service } from "./Service";

class ArmourService extends Service {
	async updateItemGetStashItemView(
		stashItem: StashItemView
	): Promise<StashItemView | undefined> {
		if (
			stashItem.armourEvasion !== null &&
			stashItem.dexterity !== null &&
			stashItem.strength !== null &&
			stashItem.intelligence !== null &&
			stashItem.constitution !== null
		) {
			const request: UpdateArmourGetStashItemViewRequest = {
				id: stashItem.id,
				name: stashItem.name,
				itemId: stashItem.itemId,
				evasion: stashItem.armourEvasion,
				dexterity: stashItem.dexterity,
				strength: stashItem.strength,
				intelligence: stashItem.intelligence,
				constitution: stashItem.constitution,
			};

			const response = await fetch(
				`${this.apiUrl}/api/armour/update/get-stash-item-view`,
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
			return;
		}
	}
}

export default new ArmourService();
