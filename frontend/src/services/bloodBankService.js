import axios from "axios";

const API = "https://smart-hospital-backend-zsw3.onrender.com/api/blood-bank";

export const getBloodBank = () => axios.get(API);

export const createBlood = (data) =>
  axios.post(API, data);

export const deleteBlood = (id) =>
  axios.delete(`${API}/${id}`);

export const addBloodUnit = (id) =>
  axios.put(`${API}/${id}/add`);

export const issueBloodUnit = (id) =>
  axios.put(`${API}/${id}/issue`);