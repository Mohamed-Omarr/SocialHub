import axios from "axios";
import type { AxiosResponse, AxiosError } from "axios";
const base_url = import.meta.env.VITE_EXPRESS_API_URL;

const axiosClient = axios.create({
  baseURL: `${base_url}/api/`,
  withCredentials: true, // Important Sends cookies automatically
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Optional: global response handling
axiosClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      // User is not authenticated
    }
    return Promise.reject(error);
  },
);

export default axiosClient;
