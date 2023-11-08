import axios from "axios";

const urlBase = "";

export const getProfesores = () =>
  axios
    .get(`${urlBase}/api/profesor`)
    .then((response) => response)
    .catch((e) => console.log(e));

export const getProfesorById = (id: number) =>
  axios
    .get(`${urlBase}/api/profesor` + id)
    .then((response) => response)
    .catch((e) => console.log(e));

export const postProfesor = (profesor: any) =>
  axios
    .post(`${urlBase}/api/customer`, profesor)
    .then((response) => response)
    .catch((e) => console.log(e));

export const putProfesorById = (id: number, profesor: any) =>
  axios
    .put(`${urlBase}/api/customer/` + id, profesor)
    .then((response) => response)
    .catch((e) => console.log(e));

export const deleteProfesorById = (id: number) =>
  axios
    .delete(`${urlBase}/api/customer/` + id)
    .then((response) => response)
    .catch((e) => console.log(e));
