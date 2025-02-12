import { plainToInstance, type ClassConstructor } from "class-transformer";
import { Stash } from "merchant-idle-middleware";
import { Service } from "./Service";

class StashService extends Service {
	private handleResponse(response: Response) {
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
	}

	async getStashesForUser(userId: number): Promise<Stash[]> {
		const response = await fetch(
			`${this.apiUrl}/api/stash/get/stashes-for-user/${userId}`
		);
		this.handleResponse(response);

		const responseJson = await response.json();
		const stashes: Stash[] = responseJson.map((data: any) =>
			plainToInstance(Stash, data)
		);

		return stashes;
	}
}

export default new StashService();
