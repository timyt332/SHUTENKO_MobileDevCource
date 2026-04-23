import { apiUsers } from "./init";

export async function getUserProfile(userId: number) {
  try {
    const response = await apiUsers.get(`/users/${userId}`);
    return response.data;
  } catch (error: any) {
    console.error("Помилка запиту до API:", error.message);
    throw error;
  }
}
