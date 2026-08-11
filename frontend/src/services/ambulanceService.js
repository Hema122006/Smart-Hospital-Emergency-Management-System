import axios from "axios";

const API = "http://localhost:8080/api/ambulances";

export const getAmbulances = () => axios.get(API);

export const createAmbulance = (ambulance) =>
  axios.post(API, ambulance);

export const deleteAmbulance = (id) =>
  axios.delete(`${API}/${id}`);

export const updateAmbulance = (id, ambulance) =>
  axios.put(`${API}/${id}`, ambulance);

export const changeAmbulanceStatus = (id) =>
  axios.put(`${API}/${id}/status`);