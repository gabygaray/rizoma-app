import axios from "axios";

const urlBase = "";

export const getProfesorPorActividadByProfesorId = (id: number) =>
  axios
    .get(`${urlBase}/api/alumno` + id)
    .then((response) => response)
    .catch((e) => console.log(e));

export const postProfesorPorActividad = (actPorAl: any) =>
  axios
    .post(`${urlBase}/api/customer`, actPorAl)
    .then((response) => response)
    .catch((e) => console.log(e));

export const deleteProfesorPorActividadById = (id: number) =>
  axios
    .delete(`${urlBase}/api/customer/` + id)
    .then((response) => response)
    .catch((e) => console.log(e));
