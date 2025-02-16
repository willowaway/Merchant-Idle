import { plainToInstance, type ClassConstructor } from "class-transformer";
import {
	StashItemView,
	type UpdateItemGetStashItemViewRequest,
} from "merchant-idle-middleware";
import { Service } from "./Service";

class ItemService extends Service {
	private handleResponse(response: Response) {
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
	}

	async updateItemGetStashItemView(
		stashItem: StashItemView
	): Promise<StashItemView> {
		const request: UpdateItemGetStashItemViewRequest = {
			id: stashItem.id,
			itemId: stashItem.itemId,
			name: stashItem.name,
			category: stashItem.category,
			slot: stashItem.slot,
			tier: stashItem.tier,
			baseValue: stashItem.baseValue,
			src: stashItem.src,
			baseDamage: stashItem.baseDamage,
			attackSpeed: stashItem.attackSpeed,
			attackType: stashItem.attackType,
			weaponType: stashItem.weaponType,
			dexterity: stashItem.dexterity,
			strength: stashItem.strength,
			intelligence: stashItem.intelligence,
			constitution: stashItem.constitution,
			accuracy: stashItem.accuracy,
			evasion: stashItem.evasion,
		};
		const response = await fetch(
			`${this.apiUrl}/api/item/update/get-stash-item-view`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(request),
			}
		);
		this.handleResponse(response);

		const updatedStashItem = plainToInstance(
			StashItemView,
			await response.json()
		);
		return updatedStashItem;
	}
}

export default new ItemService();
