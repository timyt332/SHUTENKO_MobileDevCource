import axios from "axios";

// Створюємо екземпляр axios для JSONPlaceholder API
const apiUsers = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 10000,
  headers: {
    Accept: "application/json",
  },
});

export { apiUsers };

