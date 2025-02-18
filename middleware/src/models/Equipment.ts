import IEquipment from "../interfaces/IEquipment";

export class Equipment implements IEquipment {
	id: string;
	userId: string;
	itemId: string;
	stashId: string;
}
