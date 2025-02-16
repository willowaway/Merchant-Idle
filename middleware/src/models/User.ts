import IUser from "../interfaces/IUser";

export class User implements IUser {
	id: string;
	username: string;
	email: string;
}
