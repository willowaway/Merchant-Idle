export abstract class Service {
	// public apiUrl: string =
	// "https://merchant-idle-backend-c130ae8072ab.herokuapp.com";
	public apiUrl: string = "http://localhost:3000";

	public async handleResponse(response: Response): Promise<any> {
		if (!response.ok) {
			const responseJson = await response.json();
			const message = responseJson.message;

			if (responseJson && message) {
				if (response.status === 401 || response.status === 409) {
					console.error(
						`Status: ${response.status}, Message: ${message}`
					);
					return message;
				} else {
					throw new Error(
						`Status: ${response.status}, Message: ${message}`
					);
				}
			} else {
				throw new Error(`status: ${response.status}`);
			}
		} else {
			return response.json();
		}
	}
}
