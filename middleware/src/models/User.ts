import IUser from "../interfaces/IUser";

export class User implements IUser {
	id: number;
	username: string;
	email: string;
}
