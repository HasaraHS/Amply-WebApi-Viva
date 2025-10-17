// src/services/authService.js
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const API_URL = `${API_BASE_URL}/api/v1/authenticate`;

export const register = async (data) => {
  return await axios.post(`${API_URL}/register`, data);
};

export const login = async (data) => {
  return await axios.post(`${API_URL}/login`, data);
};
