import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { enqueueSnackbar } from "notistack";

import "./styles.css";

import { Form } from "../../components/form/Form";
import { Searcher } from "../../components/searcher/Searcher";

export const Actividades = () => {
  const [step, setStep] = useState<"first" | "form" | "search">("first");
  const navigate = useNavigate();

  const handleCreateNewActivity = () => {
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
