import {
  Alumno,
  GetAlumnoResponse,
} from "../../store/slices/appStateSlice.interface";

export const alumnoAdapter = (data: GetAlumnoResponse[]): Alumno[] => {
  return data.map(({ alumno_id, state, ...rest }) => ({
    ...rest,
    id: alumno_id,
    state: state === "1",
  }));
};
