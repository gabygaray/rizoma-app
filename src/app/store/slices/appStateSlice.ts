import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { appStateSliceInitialState } from "./contants";
import {
  Actividad,
  ActividadPorAlumno,
  Alumno,
  Profesor,
  ProfesorPorActividad,
} from "./appStateSlice.interface";

export const appStateSlice = createSlice({
  name: "appState",
  initialState: appStateSliceInitialState,
  reducers: {
    setAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.authenticated = action.payload;
    },
    setAlumnos: (state, action: PayloadAction<Alumno[]>) => {
      state.dataBase.alumnos = action.payload;
    },
    setProfesores: (state, action: PayloadAction<Profesor[]>) => {
      state.dataBase.profesores = action.payload;
    },
    setActividades: (state, action: PayloadAction<Actividad[]>) => {
      state.dataBase.actividades = action.payload;
    },
    setActividadPorAlumno: (
      state,
      action: PayloadAction<ActividadPorAlumno[]>,
    ) => {
      state.dataBase.actividadPorAlumno = action.payload;
    },
    setProfesorPorActividad: (
      state,
      action: PayloadAction<ProfesorPorActividad[]>,
    ) => {
      state.dataBase.profesorPorActividad = action.payload;
    },
  },
});

export const {
  setAuthenticated,
  setAlumnos,
  setActividades,
  setProfesores,
  setActividadPorAlumno,
  setProfesorPorActividad,
} = appStateSlice.actions;

export default appStateSlice.reducer;
