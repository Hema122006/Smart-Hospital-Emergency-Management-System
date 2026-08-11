import axios from "axios";

const API_URL = "http://localhost:8080/api/auth";

export const adminLogin = (credentials) => {
  return axios.post(`${API_URL}/login`, credentials);
};