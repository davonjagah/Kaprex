import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";

const backendUrl = process.env.NEXT_PUBLIC_NEXT_API;

interface RetryableRequestConfig extends AxiosRequestConfig {
  _retry?: boolean;
}

const api: AxiosInstance = axios.create({
  baseURL: `${backendUrl}/api`,
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError<unknown, RetryableRequestConfig>) => {
    const originalReq = error.config as RetryableRequestConfig;

    if (error.response?.status === 401 && !originalReq._retry) {
      originalReq._retry = true;
      const refreshRes = await axios.post<void>(`/api/auth/refresh`, null);
      if (refreshRes.status >= 200 && refreshRes.status < 300) {
        return api(originalReq);
      }
    }
    return Promise.reject(error);
  },
);

export default api;
