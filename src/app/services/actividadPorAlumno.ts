import axios from "axios";

const urlBase = "";

export const getActividadPorAlumnoByAlumnoId = (id: number) =>
  axios
    .get(`${urlBase}/api/alumno` + id)
    .then((response) => response)
    .catch((e) => console.log(e));

export const postActividadPorAlumno = (actPorAl: any) =>
  axios
    .post(`${urlBase}/api/customer`, actPorAl)
    .then((response) => response)
    .catch((e) => console.log(e));

export const deleteActividadPorAlumnoById = (id: number) =>
  axios
    .delete(`${urlBase}/api/customer/` + id)
    .then((response) => response)
    .catch((e) => console.log(e));
