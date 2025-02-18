import {
	Equipment,
	EquipmentItemView,
	type CreateEquipmentRequest,
} from "merchant-idle-middleware";
import { Service } from "./Service";
import { plainToInstance } from "class-transformer";

class EquipmentService extends Service {
	async getEquipmentItemViewForUser(
		userId: string
	): Promise<EquipmentItemView[]> {
		const response = await fetch(
			`${this.apiUrl}/api/equipment/get/equipment-item-view/${userId}`
		);

		const responseJson = await this.handleResponse(response);
		const equipmentItems: EquipmentItemView[] = responseJson.map(
			(data: any) => plainToInstance(EquipmentItemView, data)
		);

		return equipmentItems;
	}

	async create(
		userId: string,
		itemId: string,
		stashId: string
	): Promise<EquipmentItemView | string> {
		const request: CreateEquipmentRequest = {
			userId: userId,
			itemId: itemId,
			stashId: stashId,
		};
		const response = await fetch(`${this.apiUrl}/api/equipment/create`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(request),
		});
		const responseJson = await this.handleResponse(response);

		const createdEquipmentItemView = plainToInstance(
			EquipmentItemView,
			responseJson
		);

		return createdEquipmentItemView;
	}

	async delete(equipmentId: string): Promise<string> {
		const response = await fetch(
			`${this.apiUrl}/api/equipment/delete/${equipmentId}`
		);
		const responseJson = await this.handleResponse(response);

		if (responseJson.message === "Success") {
			return "Success";
		} else {
			return responseJson;
		}
	}
}

export default new EquipmentService();
