import axios from "axios";

const API = "https://smart-hospital-backend-zsw3.onrender.com/api/nurses";

export const getNurses = () =>
  axios.get(API);

export const createNurse = (nurse) =>
  axios.post(API, nurse);

export const deleteNurse = (id) =>
  axios.delete(`${API}/${id}`);

export const toggleNurseAvailability = (id) =>
  axios.put(`${API}/${id}/availability`);