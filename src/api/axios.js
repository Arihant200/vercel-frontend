// src/api/axios.js
import axios from "axios";
const backendUrl = process.env.REACT_APP_BACKEND_URL;

const instance = axios.create({
  baseURL: backendUrl, // or your server IP
});

instance.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user?.token) {
    config.headers.Authorization = `Bearer ${user.token}`;
  }
  return config;
});

export default instance;
