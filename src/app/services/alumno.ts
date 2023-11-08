import axios from "axios";
import { alumnoAdapter } from "./adapters.ts/alumno.adapter";

const urlBase = "http://localhost:57516/api/";

export const getAlumnos = () =>
  axios
    .get(`${urlBase}Alumno`)
    .then((response) => alumnoAdapter(response.data))
    .catch((e) => console.log(e));

getAlumnos();

export const getAlumnoById = (id: number) =>
  axios
    .get(`${urlBase}Alumno/` + id)
    .then((response) => response)
    .catch((e) => console.log(e));

export const postAlumno = (alumno: any) =>
  axios
    .post(`${urlBase}Alumno`, alumno)
    .then((response) => response)
    .catch((e) => console.log(e));

export const putAlumnoById = (id: number, alumno: any) =>
  axios
    .put(`${urlBase}Alumno/` + id, alumno)
    .then((response) => response)
    .catch((e) => console.log(e));

export const deleteAlumnoById = (id: number) =>
  axios
    .delete(`${urlBase}Alumno/` + id)
    .then((response) => response)
    .catch((e) => console.log(e));
