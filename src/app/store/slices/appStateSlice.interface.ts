export interface AppStateSliceInitialState {
  authenticated: boolean;
  dataBase: {
    alumnos: Alumno[];
    profesores: Profesor[];
    actividades: Actividad[];
    actividadPorAlumno: ActividadPorAlumno[];
    profesorPorActividad: ProfesorPorActividad[];
  };
}

export interface Alumno {
  id: number;
  name: string;
  lastname: string;
  dni: string;
  birthday: string;
  telephone: string;
  email: string;
  address: string;
  number: string;
  neighborhood: string;
  state: boolean;
}

export interface Profesor {
  id: number;
  name: string;
  lastname: string;
  dni: string;
  birthday: string;
  telephone: string;
  email: string;
  address: string;
  number: string;
  neighborhood: string;
}

export interface Actividad {
  id: number;
  name: string;
}

export interface ActividadPorAlumno {
  idActividadPorAlumno: number;
  idAlumno: number;
  idActividad: number;
}

export interface ProfesorPorActividad {
  idProfesorPorActividad: number;
  idProfesor: number;
  idActividad: number;
}

export interface FormValues {
  name: string;
  lastname: string;
  dni: string;
  birthday: string;
  telephone: string;
  email: string;
  address: string;
  number: string;
  neighborhood: string;
  state: boolean;
}

export interface GetAlumnoResponse {
  alumno_id: number;
  name: string;
  lastname: string;
  dni: string;
  birthday: string;
  telephone: string;
  email: string;
  address: string;
  number: string;
  neighborhood: string;
  state: string;
}
