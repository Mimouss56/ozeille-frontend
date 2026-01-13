import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const axiosClient = axios.create({
  baseURL: `${API_URL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor pour ajouter le JWT
//axiosClient.interceptors.request.use((config) => {
//  const token = localStorage.getItem("access_token");
//  if (token) {
//    config.headers = config.headers ?? {};
//    config.headers.Authorization = `Bearer ${token}`;
//  }
//  return config;
//});

// Interceptor pour gérer globalement les erreurs
axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      //localStorage.removeItem("access_token");
      window.location.href = "/login"; // TODO remplacer avec react router
    }
    return Promise.reject(error);
  },
);
