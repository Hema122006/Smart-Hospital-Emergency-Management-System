import axios from "axios";

const API = "http://localhost:8080/api/icu-beds";

export const getICUBeds = () => axios.get(API);

export const createICUBed = (bed) =>
  axios.post(API, bed);

export const deleteICUBed = (id) =>
  axios.delete(`${API}/${id}`);