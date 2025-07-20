// src/api/axios.js
import axios from "axios";

const instance = axios.create({
  baseURL: "https://vercel-backend-1-fmta.onrender.com/0", // or your server IP
});

instance.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user?.token) {
    config.headers.Authorization = `Bearer ${user.token}`;
  }
  return config;
});

export default instance;
