import {
  Actividad,
  AppStateSliceInitialState,
} from "./appStateSlice.interface";

const actividadesMock: Actividad[] = [
  {
    name: "CrossFit",
    id: "01f64f47-64b5-4f93-8dfd-f3240e430038",
  },
  {
    name: "CrossTrainning",
    id: "469362c4-fca4-431f-8b58-50a6952be995",
  },
  {
    name: "Zumba",
    id: "e9da8956-594d-49a2-8d87-ee9f921cd761",
  },
  {
    name: "Entrenamiento funcional",
    id: "3a62381b-4014-41b7-b517-b736f48e3236",
  },
  {
    name: "Entrenamiento personalizados",
    id: "ec7592de-9f42-45ea-afcc-38637d5c8e51",
  },
  {
    name: "Adultos mayores",
    id: "b527191e-f0e1-4dbd-abe6-428420371f8f",
  },
  {
    name: "Gap",
    id: "27dd5eec-d086-4194-bbc7-911a0e755183",
  },
];

// const mockAlumnos = [
//   { nombre: "Maria Victoria Rodriguez Oviedo", estado: true },
//   { nombre: "Juan Carlos Pérez", estado: true },
//   { nombre: "Laura Sánchez", estado: true },
//   { nombre: "Andrés Fernández", estado: false },
//   { nombre: "Marta López", estado: true },
//   { nombre: "Carlos González", estado: false },
//   { nombre: "Sofía Martínez", estado: true },
//   { nombre: "Pedro Ramírez", estado: false },
//   { nombre: "Luisa Torres", estado: true },
//   { nombre: "David García", estado: true },
//   { nombre: "Ana Soto", estado: true },
//   { nombre: "Fernando Peña", estado: false },
//   { nombre: "Olga Mendoza", estado: true },
//   { nombre: "Javier Ruiz", estado: false },
//   { nombre: "Lucía Castro", estado: false },
//   { nombre: "Miguel Jiménez", estado: false },
//   { nombre: "Silvia Paredes", estado: true },
//   { nombre: "Roberto Vargas", estado: false },
//   { nombre: "Carolina Silva", estado: true },
//   { nombre: "Eduardo Medina", estado: false },
// ];

export const appStateSliceInitialState: AppStateSliceInitialState = {
  authenticated: false,
  dataBase: {
    alumnos: [],
    profesores: [],
    actividades: actividadesMock,
    actividadPorAlumno: [],
    profesorPorActividad: [],
  },
};

export const initialStateForm = {
  name: "",
  lastname: "",
  dni: "",
  birthday: "",
  telephone: "",
  email: "",
  address: "",
  number: "",
  neighborhood: "",
  state: false,
};
