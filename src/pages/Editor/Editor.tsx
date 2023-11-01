import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

import { useAppDispatch, useAppSelector } from "../../app/store/hooks";
import { initialStateForm } from "../../app/store/slices/contants";

import { FormValues } from "../../app/store/slices/appStateSlice.interface";

import { Form } from "../../components/form/Form";
import {
  setActividades,
  setAlumnos,
  setProfesores,
} from "../../app/store/slices/appStateSlice";
import { validateEmptyProps } from "../../utils/utils";

export const Editor = ({
  type,
}: {
  type: "alumno" | "profesor" | "actividad";
}) => {
  const [formState, setFormState] = useState<FormValues>(initialStateForm);

  const navigate = useNavigate();
  const params = useParams();
  const { alumnoId, profesorId, actividadId } = params;
  const { enqueueSnackbar } = useSnackbar();

  const {
    dataBase: { alumnos, profesores, actividades },
  } = useAppSelector((state) => state.appState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (type === "alumno") {
      const alumnoFinded = alumnos.find((al) => al.id === alumnoId);
      setFormState({ ...formState, ...alumnoFinded });
    }

    if (type === "profesor") {
      const profesorFinded = profesores.find((pr) => pr.id === profesorId);
      setFormState({ ...formState, ...profesorFinded });
    }
    if (type === "actividad") {
      const actividadFinded = actividades.find((act) => act.id === actividadId);
      setFormState({ ...formState, ...actividadFinded });
    }
  }, [params]);

  const goBack = () => {
    type === "actividad" && navigate("/actividades");
    type === "alumno" && navigate("/alumnos");
    type === "profesor" && navigate("/profesores");
  };

  const handleSubmit = (formValues: Partial<FormValues>) => {
    if (validateEmptyProps(formValues))
      return enqueueSnackbar("Todos los campos deben estar completos", {
        variant: "error",
      });

    if (type === "alumno") {
      const newAlumnos = alumnos.map((al) =>
        al.id === alumnoId ? { ...al, ...formValues } : al,
      );

      dispatch(setAlumnos(newAlumnos));
    }

    if (type === "profesor") {
      const newProfesores = profesores.map((pf) =>
        pf.id === profesorId ? { ...pf, ...formValues } : pf,
      );

      dispatch(setProfesores(newProfesores));
    }

    if (type === "actividad") {
      const newActividad = actividades.map((act) =>
        act.id === actividadId ? { ...act, ...formValues } : act,
      );

      dispatch(setActividades(newActividad));
    }

    enqueueSnackbar(
      type === "alumno"
        ? "Alumno editado"
        : type === "profesor"
        ? "Profesor editado"
        : "Actividad editada",
      {
        variant: "success",
      },
    );

    setTimeout(() => {
      navigate(`/${type === "alumno" ? type + "s" : type + "es"}`);
    }, 2000);
  };

  return (
    <>
      <Form
        goBack={goBack}
        formName={type}
        handleSubmit={handleSubmit}
        initialState={formState}
      />
    </>
  );
};
