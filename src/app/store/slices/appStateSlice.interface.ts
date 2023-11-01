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
  id: string;
}

export interface Profesor {
  name: string;
  lastname: string;
  dni: string;
  birthday: string;
  telephone: string;
  email: string;
  address: string;
  number: string;
  neighborhood: string;
  id: string;
}

export interface Actividad {
  name: string;
  id: string;
}

export interface ActividadPorAlumno {
  idActividadPorAlumno: string;
  idAlumno: string;
  idActividad: string;
}

export interface ProfesorPorActividad {
  idProfesorPorActividad: string;
  idProfesor: string;
  idActividad: string;
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
