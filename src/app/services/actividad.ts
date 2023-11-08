import axios from "axios";

const urlBase = "";

export const getActividades = () =>
  axios
    .get(`${urlBase}/api/actividad`)
    .then((response) => response)
    .catch((e) => console.log(e));

export const getActividadById = (id: number) =>
  axios
    .get(`${urlBase}/api/actividad` + id)
    .then((response) => response)
    .catch((e) => console.log(e));

export const postActividad = (actividad: any) =>
  axios
    .post(`${urlBase}/api/customer`, actividad)
    .then((response) => response)
    .catch((e) => console.log(e));

export const putActividadById = (id: number, actividad: any) =>
  axios
    .put(`${urlBase}/api/customer/` + id, actividad)
    .then((response) => response)
    .catch((e) => console.log(e));

export const deleteActividadById = (id: number) =>
  axios
    .delete(`${urlBase}/api/customer/` + id)
    .then((response) => response)
    .catch((e) => console.log(e));
