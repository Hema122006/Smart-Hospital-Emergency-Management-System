import axios from "axios";

const API = "https://smart-hospital-backend-zsw3.onrender.com/api/icu-beds";

export const getICUBeds = () => axios.get(API);

export const createICUBed = (bed) =>
  axios.post(API, bed);

export const deleteICUBed = (id) =>
  axios.delete(`${API}/${id}`);