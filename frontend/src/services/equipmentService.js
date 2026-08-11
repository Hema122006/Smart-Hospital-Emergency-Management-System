import axios from "axios";

const API = "http://localhost:8080/api/equipment";

export const getEquipments = () =>
  axios.get(API);

export const createEquipment = (equipment) =>
  axios.post(API, equipment);

export const deleteEquipment = (id) =>
  axios.delete(`${API}/${id}`);

export const changeEquipmentStatus = (id) =>
  axios.put(`${API}/${id}/status`);