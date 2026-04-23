import axios from "axios";

const apiUsers = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 10000,
});

export { apiUsers };

