import { useEffect, useState } from "react";
import "./styles.css";

import { initialStateForm } from "../../app/store/slices/contants";
import { FormValues } from "../../app/store/slices/appStateSlice.interface";

import { BackButton } from "../backButton/BackButton";
import { Switch } from "../switch/Switch";
import { TextField } from "../textfield/TextField";
import { useSnackbar } from "notistack";

export const Form = ({
  goBack,
  formName,
  handleSubmit,
  initialState,
}: {
  goBack: () => void;
  formName: "alumno" | "profesor" | "actividad";
  handleSubmit: (object: object) => void;
  initialState?: FormValues;
}) => {
  const [formState, setFormState] = useState(initialStateForm);

  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (initialState) setFormState(initialState);
  }, [initialState]);

  const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSwitch = (state: boolean) => {
    setFormState({ ...formState, state: state });

    if (state) {
      enqueueSnackbar("Alumno activo", {
        variant: "success",
      });
    } else {
      enqueueSnackbar("Alumno inactivo", {
        variant: "error",
      });
    }
  };

  const middleHandleSubmit = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { state, ...rest } = formState;

    if (formName === "alumno") {
      handleSubmit(formState);
    }

    if (formName === "profesor") {
      handleSubmit(rest);
    }

    if (formName === "actividad") {
      handleSubmit({ name: formState.name });
    }
  };

  const handlePreventDefault = (e) => {
    e.preventDefault();
  };

  return (
    <div className={"form-container"}>
      <h1 className="form-title">
        {formName === "alumno" ? formName + "s" : formName + "es"}
      </h1>
      <h3 className="form-subtitle">{`${
        initialState ? "Edición" : "Registro"
      } de ${formName}`}</h3>

      <BackButton onClick={goBack} />

      <form onSubmit={handlePreventDefault}>
        <TextField
          label="Nombre"
          onChange={handleForm}
          value={formState.name}
          name={"name"}
        />

        {formName !== "actividad" && (
          <>
            <TextField
              label="Apellido"
              onChange={handleForm}
              value={formState.lastname}
              name={"lastname"}
            />
            <TextField
              label="DNI"
              onChange={handleForm}
              value={formState.dni}
              name={"dni"}
            />
            <TextField
              label="Fecha de Nacimiento"
              onChange={handleForm}
              value={formState.birthday}
              name={"birthday"}
            />
            <TextField
              label="Teléfono"
              onChange={handleForm}
              value={formState.telephone}
              name={"telephone"}
            />
            <TextField
              label="Email"
              onChange={handleForm}
              value={formState.email}
              name={"email"}
            />
            <TextField
              label="Calle"
              onChange={handleForm}
              value={formState.address}
              name={"address"}
            />
            <TextField
              label="Número"
              onChange={handleForm}
              value={formState.number}
              name={"number"}
            />
            <TextField
              label="Barrio"
              onChange={handleForm}
              value={formState.neighborhood}
              name={"neighborhood"}
            />
          </>
        )}

        {formName === "alumno" && (
          <div className="switch-state-container">
            <label className="label-estado">Estado</label>
            <Switch
              checked={formState.state}
              onClick={() => handleSwitch(!formState.state)}
            />
          </div>
        )}

        <div className="form-submit-container">
          <button onClick={middleHandleSubmit}>{`${
            initialState ? "Editar" : "Crear nuevo"
          } ${formName}`}</button>
        </div>
      </form>
    </div>
  );
};
