import axios from "axios";

const API = "https://smart-hospital-backend-zsw3.onrender.com/api/equipment";

export const getEquipments = () =>
  axios.get(API);

export const createEquipment = (equipment) =>
  axios.post(API, equipment);

export const deleteEquipment = (id) =>
  axios.delete(`${API}/${id}`);

export const changeEquipmentStatus = (id) =>
  axios.put(`${API}/${id}/status`);