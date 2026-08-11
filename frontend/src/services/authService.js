import axios from "axios";

const API_URL =
  "https://smart-hospital-backend-zsw3.onrender.com/api/auth";

export const adminLogin = (credentials) => {
  return axios.post(`${API_URL}/login`, credentials);
};