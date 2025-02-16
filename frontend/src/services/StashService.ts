import { plainToInstance, type ClassConstructor } from "class-transformer";
import { StashItemView } from "merchant-idle-middleware";
import { Service } from "./Service";

class StashService extends Service {
	private handleResponse(response: Response) {
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
	}

	async getStashItemViewForUser(userId: string): Promise<StashItemView[]> {
		const response = await fetch(
			`${this.apiUrl}/api/stash/get/stash-item-view/${userId}`
		);
		this.handleResponse(response);

		const responseJson = await response.json();
		const stashItems: StashItemView[] = responseJson.map((data: any) =>
			plainToInstance(StashItemView, data)
		);

		return stashItems;
	}
}

export default new StashService();
