import axios from "axios";
import type{ AxiosRequestConfig } from "axios";
interface RetryConfig extends AxiosRequestConfig {
    _retry?: boolean;
}

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,

    withCredentials: true,

    headers: {
         "Content-Type": "application/json",
    },
});
api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config as RetryConfig;

        if (
            error.response?.status === 401 &&
            !originalRequest._retry &&
            originalRequest.url !== "/auth/refresh" &&
            originalRequest.url !== "/auth/me" &&
            originalRequest.url !== "/auth/login"
        ) {
            originalRequest._retry = true;

            try {
                await api.post("/auth/refresh");

                return api(originalRequest);
            } catch {
                window.location.href = "/login";
                return Promise.reject(error);
            }
        }

        return Promise.reject(error);
    }
);