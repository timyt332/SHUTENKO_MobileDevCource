import axios from "axios";

const apiUsers = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 15000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Interceptor для логів
apiUsers.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log("Axios Error:", error.message);
    console.log("Config:", error.config?.url);
    return Promise.reject(error);
  },
);

export { apiUsers };

