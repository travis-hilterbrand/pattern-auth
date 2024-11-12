import axios, { AxiosError, AxiosResponse } from "axios";
import { getAuthToken } from "./auth";

let storedToken = "";
axios.interceptors.request.use(async (config) => {
  if (config.url?.includes("token")) {
    return config;
  }

  if (!storedToken) {
    const { token } = await getAuthToken();
    storedToken = token;
  }
  config.headers.Authorization = `Bearer ${storedToken}`;
  return config;
});

axios.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error: AxiosError) => {
    const originalRequest = error.config;

    if (error.status === 401 && originalRequest) {
      const { token } = await getAuthToken();
      storedToken = token;
      originalRequest.headers["Authorization"] = token;
      return axios(originalRequest);
    }
    return Promise.reject(error);
  }
);
