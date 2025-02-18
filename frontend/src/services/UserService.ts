import { plainToInstance, type ClassConstructor } from "class-transformer";
import {
	type CreateUserRequest,
	type SignInUserRequest,
} from "merchant-idle-middleware";
import { User } from "merchant-idle-middleware";
import { Service } from "./Service";

class UserService extends Service {
	async get(userId: string): Promise<User> {
		const response = await fetch(`${this.apiUrl}/api/user/get/${userId}`);
		const responseJson = await this.handleResponse(response);

		const user = plainToInstance(User, responseJson);

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

		const responseJson = await this.handleResponse(response);
		const createdUser = plainToInstance(User, responseJson);

		return createdUser;
	}

	async signInUser(email: string, password: string): Promise<User | string> {
		try {
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
			const responseJson = await this.handleResponse(response);
			const signedInUser = plainToInstance(User, responseJson);

			return signedInUser;
		} catch (error) {
			return `${error}`;
		}
	}
}

export default new UserService();
