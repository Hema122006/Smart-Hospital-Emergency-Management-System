import axios from "axios";

const API = "http://localhost:8080/api/nurses";

export const getNurses = () =>
  axios.get(API);

export const createNurse = (nurse) =>
  axios.post(API, nurse);

export const deleteNurse = (id) =>
  axios.delete(`${API}/${id}`);

export const toggleNurseAvailability = (id) =>
  axios.put(`${API}/${id}/availability`);