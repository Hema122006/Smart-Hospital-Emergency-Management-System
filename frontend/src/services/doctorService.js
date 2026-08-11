import axios from "axios";

const API = "http://localhost:8080/api/doctors";

export const getDoctors = () => axios.get(API);

export const createDoctor = (doctor) =>
  axios.post(API, doctor);

export const deleteDoctor = (id) =>
  axios.delete(`${API}/${id}`);

export const updateDoctor = (id, doctor) =>
  axios.put(`${API}/${id}`, doctor);