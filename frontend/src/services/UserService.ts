import { plainToInstance, type ClassConstructor } from "class-transformer";
import {
	type CreateUserRequest,
	type SignInUserRequest,
} from "merchant-idle-middleware";
import { User } from "merchant-idle-middleware";
import { Service } from "./Service";

class UserService extends Service {
	private handleResponse(response: Response) {
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
	}

	private jsonToInstance<T>(jsonString: any, type: ClassConstructor<T>): T {
		const jsonObj = JSON.parse(jsonString);
		const instance = plainToInstance(type, jsonObj);
		return instance as T;
	}

	async get(userId: string): Promise<User> {
		const response = await fetch(`${this.apiUrl}/api/user/get/${userId}`);
		this.handleResponse(response);

		// const jsonString = await response.json();
		// const jsonObj = JSON.parse(jsonString);
		// const user = plainToInstance(User, jsonObj);
		const user = plainToInstance(User, await response.json());

		return user;
	}

	async create(
		username: string,
		email: string,
		password: string
	): Promise<User> {
		const request: CreateUserRequest = {
			username: username,
			email: email,
			password: password,
		};
		const response = await fetch(`${this.apiUrl}/api/user/create`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(request),
		});
		this.handleResponse(response);

		const createdUser = plainToInstance(User, await response.json());

		return createdUser;
	}

	async signInUser(email: string, password: string): Promise<User> {
		const request: SignInUserRequest = {
			email: email,
			password: password,
		};
		const response = await fetch(`${this.apiUrl}/api/user/sign-in`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(request),
		});
		this.handleResponse(response);

		const signedInUser = plainToInstance(User, await response.json());

		return signedInUser;
	}
}

export default new UserService();
