import { apiUsers } from "./init";

// Отримання даних користувача за ID
export async function getUserProfile(userId: number) {
  try {
    const response = await apiUsers.get(`/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Помилка запиту до API:", error);
    return null;
  }
}
