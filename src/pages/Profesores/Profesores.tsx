import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { enqueueSnackbar } from "notistack";
import { v4 as uuid } from "uuid";

import { useAppDispatch, useAppSelector } from "../../app/store/hooks";
import { setProfesores } from "../../app/store/slices/appStateSlice";

import "./styles.css";

import { Form } from "../../components/form/Form";
import { Searcher } from "../../components/searcher/Searcher";
import { Profesor } from "../../app/store/slices/appStateSlice.interface";
import { validateEmptyProps } from "../../utils/utils";

export const Profesores = () => {
  const [step, setStep] = useState<"first" | "form" | "search">("first");
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const {
    dataBase: { profesores },
  } = useAppSelector((state) => state.appState);

  const handleCreateNewProfesor = (profesor: Profesor) => {
    if (validateEmptyProps(profesor))
      return enqueueSnackbar("Todos los campos deben estar completos", {
        variant: "error",
      });

    const newProfesor = {
      ...profesor,
      id: uuid(),
    };
    dispatch(setProfesores([...profesores, newProfesor]));
    setStep("first");

    enqueueSnackbar("Profesor creado correctamente", {
      variant: "success",
    });
  };

  return (
    <>
      {step === "first" && (
        <div className="profesores-container">
          <button
            className="profesores-back"
            onClick={() => navigate("/")}
          ></button>
          <h1 className="profesores-title">Profesores</h1>
          <div className="profesores-content">
            <div
              className="profesores-card add"
              onClick={() => setStep("form")}
            >
              <div className="profesores-card-label">Añadir</div>
            </div>
            <div
              className="profesores-card search"
              onClick={() => setStep("search")}
            >
              <div className="profesores-card-label">Buscar</div>
            </div>
          </div>
        </div>
      )}

      {step === "form" && (
        <Form
          goBack={() => setStep("first")}
          formName="profesor"
          handleSubmit={handleCreateNewProfesor}
        />
      )}

      {step === "search" && (
        <Searcher label="profesor" goBack={() => setStep("first")} />
      )}
    </>
  );
};
