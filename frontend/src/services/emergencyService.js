import axios from "axios";

const API = "https://smart-hospital-backend-zsw3.onrender.com/api/emergencies";

export const getEmergencies = () => axios.get(API);

export const createEmergency = (data) =>
  axios.post(API, data);

export const updateEmergency = (id, data) =>
  axios.put(`${API}/${id}`, data);

export const deleteEmergency = (id) =>
  axios.delete(`${API}/${id}`);
export const assignDoctor = (id) =>
  axios.put(`${API}/${id}/doctor`);

export const allocateICU = (id) =>
  axios.put(`${API}/${id}/icu`);

export const dispatchAmbulance = (id) =>
  axios.put(`${API}/${id}/ambulance`);