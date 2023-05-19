import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

const http = axios.create({
  baseURL: "https://swapi.dev/api",
});

http.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response?.status === 401) {
    } else {
    }
    return Promise.reject(error);
  }
);

export default http;
