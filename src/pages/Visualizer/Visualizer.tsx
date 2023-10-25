import {
  useNavigate,
  // useParams
} from "react-router-dom";
import "./styles.css";
import { BackButton } from "../../components/backButton/BackButton";
import { Switch } from "../../components/switch/Switch";
import { TextField } from "../../components/textfield/TextField";
import { useState } from "react";

const mockActividades = [
  { nombre: "CrossFit", id: 1 },
  { nombre: "CrossTrainning", id: 2 },
  { nombre: "Zumba", id: 3 },
];

const mockActividadesAdded = [
  { nombre: "Entrenamiento funcional", id: 4 },
  { nombre: "Entrenamiento personalizados", id: 5 },
  { nombre: "Adultos mayores", id: 6 },
  { nombre: "Gap", id: 7 },
];

export const Visualizer = ({
  type,
}: {
  type: "alumno" | "profesor" | "actividad";
}) => {
  //   const params = useParams();
  const navigate = useNavigate();

  const [step, setStep] = useState<1 | 2>(1);

  //   const [activitiesAdded, setActivitiesAdded] = useState([]);

  const goBack = () => {
    if (step === 2) return setStep(1);

    type === "actividad" && navigate("/actividades");
    type === "alumno" && navigate("/alumnos");
    type === "profesor" && navigate("/profesores");
  };

  const addActivities = () => {
    setStep(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={"form-container"} style={{ alignContent: "center" }}>
      <h1 className="form-title">
        {type === "alumno" ? type + "s" : type + "es"}
      </h1>

      <BackButton onClick={goBack} />

      <div className="step-selector-container">
        <div
          className={step === 1 && "active"}
          onClick={() => setStep(1)}
        ></div>
        <div
          className={step === 2 && "active"}
          onClick={() => setStep(2)}
        ></div>
      </div>

      {step === 1 && (
        <form onSubmit={handleSubmit} style={{ marginTop: "2rem" }}>
          <TextField disabled={true} label="Nombre" value="Maria Victoria" />

          {type !== "actividad" && (
            <>
              <TextField
                disabled={true}
                label="Apellido"
                value="Rodriguez Oviedo"
              />
              <TextField disabled={true} label="DNI" value="35.324.234" />
              <TextField
                disabled={true}
                label="Fecha de Nacimiento"
                value="21/04/1993"
              />
              <TextField disabled={true} label="Teléfono" value="3515541456" />
              <TextField
                disabled={true}
                label="Email"
                value="lic.rodriguezoviedo@gmail.com"
              />
              <TextField disabled={true} label="Calle" value="Santa Ana" />
              <TextField disabled={true} label="Número" value="2131" />
              <TextField disabled={true} label="Barrio" value={"B° Jardin"} />
            </>
          )}

          {type === "alumno" && (
            <div className="switch-state-container">
              <label className="label-estado">Estado</label>
              <Switch checked={true} />
            </div>
          )}

          {type !== "actividad" && (
            <div className="form-submit-container">
              <button onClick={addActivities}>{"Actividades"}</button>
            </div>
          )}
        </form>
      )}

      {step === 2 && (
        <div className="add-activities-container">
          <h3 className="form-subtitle">{`Actividades inscriptas`}</h3>

          <div className="list-activities-container">
            <div>
              <p>Por inscribir:</p>
              <div className="list-activities">
                {mockActividades.map((act) => (
                  <div className="list-activities-item">
                    <p>{act.nombre}</p>

                    <CustomButtom typeButton={"add"} />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p>En curso:</p>
              <div className="list-activities">
                {mockActividadesAdded.map((act) => (
                  <div className="list-activities-item">
                    <p>{act.nombre}</p>
                    <CustomButtom typeButton={"delete"} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export const CustomButtom = ({
  typeButton,
}: {
  typeButton: "add" | "delete";
}) => {
  return (
    <button
      className={`cssbuttons-io-button ${
        typeButton === "add" ? "add-button-type" : "delete-button-type"
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path fill="none" d="M0 0h24v24H0z"></path>
        {typeButton === "add" ? (
          <path
            fill="currentColor"
            d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"
          ></path>
        ) : (
          <path fill="currentColor" d="M5 11h14v2H5z"></path>
        )}
      </svg>
    </button>
  );
};
