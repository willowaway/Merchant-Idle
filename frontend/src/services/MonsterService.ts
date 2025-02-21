import { Monster } from "merchant-idle-middleware";
import { Service } from "./Service";
import { plainToInstance } from "class-transformer";

class MonsterService extends Service {
	async getMonstersByZone(zone: string): Promise<Monster[]> {
		const response = await fetch(
			`${this.apiUrl}/api/monster/get/monsters-for-zone/${zone}`
		);

		const responseJson = await this.handleResponse(response);
		const monsters: Monster[] = responseJson.map((data: any) =>
			plainToInstance(Monster, data)
		);

		return monsters;
	}
}

export default new MonsterService();
