import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

import "./styles.css";

import { Form } from "../../components/form/Form";
import { BackButton } from "../../components/backButton/BackButton";
import { Searcher } from "../../components/searcher/Searcher";

export const Alumnos = () => {
  const [step, setStep] = useState<"first" | "form" | "search">("first");
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleCreateNewAlumno = () => {
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
