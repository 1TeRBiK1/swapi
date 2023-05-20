import axios, { AxiosError, AxiosResponse } from "axios";

export const baseURL = "https://swapi.dev/api";

const http = axios.create({
  baseURL,
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
