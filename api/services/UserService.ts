import { getUserProfile } from "../apiUsers";

export class UserService {
  // Базовий метод для отримання користувача
  static async getUser(userId: number) {
    return await getUserProfile(userId);
  }

  // Форматований метод для UI - ім'я + місто
  static async getFormattedUserName(userId: number) {
    const user = await this.getUser(userId);
    if (!user) return "Невідомий користувач";

    return `${user.name} (з міста ${user.address.city})`;
  }
}
