import axios, { AxiosInstance } from "axios";

export interface Notification {
	id: string;
	title: string;
	body: string;
}

export class NotificationAPI {
	private api: AxiosInstance;

	constructor() {
		this.api = axios.create({
			baseURL: "https://jsonplaceholder.typicode.com",
		});
	}

	public getNotifications = async (): Promise<Notification[]> => {
		const response = await this.api.get<Notification[]>(
			"/posts",
			{
				params: {
					userId: 1,
				},
			},
		);

		return response.data;
	}
}

