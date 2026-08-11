import axios from "axios";

const API = "https://smart-hospital-backend-zsw3.onrender.com/api/doctors";

export const getDoctors = () => axios.get(API);

export const createDoctor = (doctor) =>
  axios.post(API, doctor);

export const deleteDoctor = (id) =>
  axios.delete(`${API}/${id}`);

export const updateDoctor = (id, doctor) =>
  axios.put(`${API}/${id}`, doctor);