import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { v4 as uuid } from "uuid";

import "./styles.css";

import { Form } from "../../components/form/Form";
import { BackButton } from "../../components/backButton/BackButton";
import { Searcher } from "../../components/searcher/Searcher";

import { Alumno } from "../../app/store/slices/appStateSlice.interface";
import { useAppDispatch, useAppSelector } from "../../app/store/hooks";
import { setAlumnos } from "../../app/store/slices/appStateSlice";
import { validateEmptyProps } from "../../utils/utils";

export const Alumnos = () => {
  const [step, setStep] = useState<"first" | "form" | "search">("first");

  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useAppDispatch();
  const {
    dataBase: { alumnos },
  } = useAppSelector((state) => state.appState);

  const handleCreateNewAlumno = (alumno: Alumno) => {
    if (validateEmptyProps(alumno))
      return enqueueSnackbar("Todos los campos deben estar completos", {
        variant: "error",
      });

    const newAlumno = {
      ...alumno,
      id: uuid(),
    };
    dispatch(setAlumnos([...alumnos, newAlumno]));

    setStep("first");

    enqueueSnackbar("Alumno creado correctamente", {
      variant: "success",
    });
  };

  return (
    <>
      {step === "first" && (
        <div className="alumnos-container">
          <BackButton onClick={() => navigate("/")} />

          <h1 className="alumnos-title">ALUMNOS</h1>

          <div className="alumnos-content">
            <div className="alumnos-card add" onClick={() => setStep("form")}>
              <div className="alumnos-card-label">Añadir</div>
            </div>

            <div
              className="alumnos-card search"
              onClick={() => setStep("search")}
            >
              <div className="alumnos-card-label">Buscar</div>
            </div>
          </div>
        </div>
      )}

      {step === "form" && (
        <Form
          goBack={() => setStep("first")}
          formName="alumno"
          handleSubmit={handleCreateNewAlumno}
        />
      )}

      {step === "search" && (
        <Searcher label="alumno" goBack={() => setStep("first")} />
      )}
    </>
  );
};
