import { useState } from "react";
import { BackButton } from "../backButton/BackButton";
import { Switch } from "../switch/Switch";
import { TextField } from "../textfield/TextField";
import "./styles.css";

export const Form = ({
  goBack,
  formName,
  handleSubmit,
}: {
  goBack: () => void;
  formName: "alumno" | "profesor" | "actividad";
  handleSubmit: () => void;
}) => {
  const [switchState, setSwitchState] = useState(false);

  return (
    <div className={"form-container"}>
      <h1 className="form-title">
        {formName === "alumno" ? formName + "s" : formName + "es"}
      </h1>
      <h3 className="form-subtitle">{`Registro de ${formName}`}</h3>

      <BackButton onClick={goBack} />

      <form>
        <TextField label="Nombre" />

        {formName !== "actividad" && (
          <>
            <TextField label="Apellido" />
            <TextField label="DNI" />
            <TextField label="Fecha de Nacimiento" />
            <TextField label="Teléfono" />
            <TextField label="Email" />
            <TextField label="Calle" />
            <TextField label="Número" />
            <TextField label="Barrio" />
          </>
        )}

        {formName === "alumno" && (
          <div className="switch-state-container">
            <label className="label-estado">Estado</label>
            <Switch
              checked={switchState}
              onClick={() => setSwitchState(!switchState)}
            />
          </div>
        )}

        <div className="form-submit-container">
          <button onClick={handleSubmit}>{`Crear nuevo ${formName}`}</button>
        </div>
      </form>
    </div>
  );
};
