import { Notification, NotificationAPI } from "../../API/NotificationAPI";
import { makeAutoObservable } from "mobx";

export class Store {
	public isLoading = false;

	public notifications: Notification[] = [];

	private notificationAPI: NotificationAPI;

	constructor() {
		this.notificationAPI = new NotificationAPI();

		makeAutoObservable(this);
	}

	public setNotifications = (notifications: Notification[]) => {
		this.notifications = notifications;
	}

	public setLoading = (loading: boolean) => {
		this.isLoading = loading;
	}

	public fetchNotifications = async (onError: VoidFunction) => {
		try {
			this.setLoading(true);
			const notifications = await this.notificationAPI.getNotifications();
			this.setNotifications(notifications);
		} catch (e) {
			console.error(e);
			onError();
		} finally {
			this.setLoading(false);
		}
	}
}
