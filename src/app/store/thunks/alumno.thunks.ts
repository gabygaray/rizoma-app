import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAlumnos } from "../../services/alumno";

export const fetchAlumnosThunk = createAsyncThunk(
  "app/fetchAlumnos",
  async () => {
    const response = await getAlumnos();
    return response;
  },
);
