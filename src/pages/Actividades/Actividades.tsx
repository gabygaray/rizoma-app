import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { enqueueSnackbar } from "notistack";
import { v4 as uuid } from "uuid";

import { useAppDispatch, useAppSelector } from "../../app/store/hooks";
import { setActividades } from "../../app/store/slices/appStateSlice";
import { Actividad } from "../../app/store/slices/appStateSlice.interface";

import "./styles.css";

import { Form } from "../../components/form/Form";
import { Searcher } from "../../components/searcher/Searcher";
import { validateEmptyProps } from "../../utils/utils";

export const Actividades = () => {
  const [step, setStep] = useState<"first" | "form" | "search">("first");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    dataBase: { actividades },
  } = useAppSelector((state) => state.appState);

  const handleCreateNewActivity = (actividad: Actividad) => {
    if (validateEmptyProps(actividad))
      return enqueueSnackbar("Todos los campos deben estar completos", {
        variant: "error",
      });

    const newActividad = {
      ...actividad,
      id: uuid(),
    };

    dispatch(setActividades([...actividades, newActividad]));

    setStep("first");

    enqueueSnackbar("Actividad creada correctamente", {
      variant: "success",
    });
  };

  return (
    <>
      {step === "first" && (
        <div className="actividades-container">
          <button
            className="actividades-back"
            onClick={() => navigate("/")}
          ></button>
          <h1 className="actividades-title">ACTIVIDADES</h1>
          <div className="actividades-content">
            <div
              className="actividades-card add"
              onClick={() => setStep("form")}
            >
              <div className="actividades-card-label">Añadir</div>
            </div>
            <div
              className="actividades-card search"
              onClick={() => setStep("search")}
            >
              <div className="actividades-card-label">Buscar</div>
            </div>
          </div>
        </div>
      )}

      {step === "form" && (
        <Form
          goBack={() => setStep("first")}
          formName="actividad"
          handleSubmit={handleCreateNewActivity}
        />
      )}

      {step === "search" && (
        <Searcher label="actividad" goBack={() => setStep("first")} />
      )}
    </>
  );
};
