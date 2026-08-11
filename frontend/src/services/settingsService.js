import axios from "axios";

const API_URL = "https://smart-hospital-backend-zsw3.onrender.com/api/settings";

export const getSettings = () => {
  return axios.get(API_URL);
};

export const saveSettings = (settings) => {
  return axios.post(API_URL, settings);
};