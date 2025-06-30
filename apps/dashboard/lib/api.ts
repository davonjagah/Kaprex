import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";

interface RetryableRequestConfig extends AxiosRequestConfig {
  _retry?: boolean;
}

const api: AxiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}`,
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError<unknown, RetryableRequestConfig>) => {
    const originalReq = error.config as RetryableRequestConfig;

    if (error.response?.status === 401 && !originalReq._retry) {
      originalReq._retry = true;
      const refreshRes = await axios.post<void>("/", null, {
        withCredentials: true,
      });
      if (refreshRes.status >= 200 && refreshRes.status < 300) {
        return api(originalReq);
      }
    }
    return Promise.reject(error);
  },
);

export default api;
