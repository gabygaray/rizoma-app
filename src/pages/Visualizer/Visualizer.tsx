import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuid } from "uuid";

import "./styles.css";

import { useAppDispatch, useAppSelector } from "../../app/store/hooks";
import {
  setActividadPorAlumno,
  setProfesorPorActividad,
} from "../../app/store/slices/appStateSlice";

import { BackButton } from "../../components/backButton/BackButton";
import { Switch } from "../../components/switch/Switch";
import { TextField } from "../../components/textfield/TextField";
import { initialStateForm } from "../../app/store/slices/contants";

export const Visualizer = ({
  type,
}: {
  type: "alumno" | "profesor" | "actividad";
}) => {
  const navigate = useNavigate();
  const { alumnoId, profesorId, actividadId } = useParams();

  const [step, setStep] = useState<1 | 2>(1);

  const {
    dataBase: {
      alumnos,
      profesores,
      actividades,
      actividadPorAlumno,
      profesorPorActividad,
    },
  } = useAppSelector((state) => state.appState);
  const dispatch = useAppDispatch();

  const [formState, setFormState] = useState(initialStateForm);

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
  }, []);

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

  const handleAddActivity = (idActividad: string) => {
    if (type === "alumno") {
      dispatch(
        setActividadPorAlumno([
          ...actividadPorAlumno,
          { idActividadPorAlumno: uuid(), idActividad, idAlumno: alumnoId },
        ]),
      );
    }

    if (type === "profesor") {
      dispatch(
        setProfesorPorActividad([
          ...profesorPorActividad,
          {
            idProfesorPorActividad: uuid(),
            idActividad,
            idProfesor: profesorId,
          },
        ]),
      );
    }
  };

  const handleDeleteActivity = (id: string) => {
    if (type === "alumno") {
      const newActividadPorAlumno = actividadPorAlumno.filter(
        (act) => act.idActividadPorAlumno !== id,
      );
      dispatch(setActividadPorAlumno(newActividadPorAlumno));
    }

    if (type === "profesor") {
      const newProfesorPorActividad = profesorPorActividad.filter(
        (act) => act.idProfesorPorActividad !== id,
      );

      dispatch(setProfesorPorActividad(newProfesorPorActividad));
    }
  };

  const getRegisteredActivities = () => {
    let activitiesFiltered = [];

    if (type === "alumno") {
      activitiesFiltered = actividadPorAlumno.filter(
        (act) => act.idAlumno === alumnoId,
      );
    }

    if (type === "profesor") {
      activitiesFiltered = profesorPorActividad.filter(
        (act) => act.idProfesor === profesorId,
      );
    }

    const result = activitiesFiltered.map((act) => ({
      name: actividades.find((a) => a.id === act.idActividad).name,
      idRelacion:
        type === "alumno"
          ? act.idActividadPorAlumno
          : act.idProfesorPorActividad,
      idActividad: act.idActividad,
    }));

    return result;
  };

  const getActivitiesFiltered = () => {
    const result = actividades.filter(
      (act) =>
        !getRegisteredActivities().some(
          (regAct) => regAct.idActividad === act.id,
        ),
    );
    return result;
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
          <TextField
            disabled={true}
            label="Nombre"
            value={formState.name}
            name={"name"}
          />

          {type !== "actividad" && (
            <>
              <TextField
                disabled={true}
                label="Apellido"
                value={formState.lastname}
                name={"lastname"}
              />
              <TextField
                disabled={true}
                label="DNI"
                value={formState.dni}
                name={"dni"}
              />
              <TextField
                disabled={true}
                label="Fecha de Nacimiento"
                value={formState.birthday}
                name={"birthday"}
              />
              <TextField
                disabled={true}
                label="Teléfono"
                value={formState.telephone}
                name={"telephone"}
              />
              <TextField
                disabled={true}
                label="Email"
                value={formState.email}
                name={"email"}
              />
              <TextField
                disabled={true}
                label="Calle"
                value={formState.address}
                name={"address"}
              />
              <TextField
                disabled={true}
                label="Número"
                value={formState.number}
                name={"number"}
              />
              <TextField
                disabled={true}
                label="Barrio"
                value={formState.neighborhood}
                name={"neighborhood"}
              />
            </>
          )}

          {type === "alumno" && (
            <div className="switch-state-container">
              <label className="label-estado">Estado</label>
              <Switch checked={formState.state} />
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
                {getActivitiesFiltered().map((act) => (
                  <div className="list-activities-item" key={act.id}>
                    <p>{act.name}</p>

                    <CustomButtom
                      typeButton={"add"}
                      handleClick={() => handleAddActivity(act.id)}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p>En curso:</p>
              <div className="list-activities">
                {getRegisteredActivities().map((act) => (
                  <div className="list-activities-item" key={act.idRelacion}>
                    <p>{act.name}</p>
                    <CustomButtom
                      typeButton={"delete"}
                      handleClick={() => handleDeleteActivity(act.idRelacion)}
                    />
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
  handleClick,
}: {
  typeButton: "add" | "delete";
  handleClick: () => void;
}) => {
  return (
    <button
      className={`cssbuttons-io-button ${
        typeButton === "add" ? "add-button-type" : "delete-button-type"
      }`}
      onClick={handleClick}
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
