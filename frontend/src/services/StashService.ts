import { plainToInstance, type ClassConstructor } from "class-transformer";
import { StashItemView } from "merchant-idle-middleware";
import { Service } from "./Service";

class StashService extends Service {
	async getStashItemViewForUser(userId: string): Promise<StashItemView[]> {
		const response = await fetch(
			`${this.apiUrl}/api/stash/get/stash-item-view/${userId}`
		);
		const responseJson = await this.handleResponse(response);
		const stashItems: StashItemView[] = responseJson.map((data: any) =>
			plainToInstance(StashItemView, data)
		);

		return stashItems;
	}
}

export default new StashService();
