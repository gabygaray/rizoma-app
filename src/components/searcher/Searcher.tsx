import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./styles.css";

import { Input } from "../input/Input";
import { BackButton } from "../backButton/BackButton";
import { Button } from "../button/Button";
import { useAppDispatch, useAppSelector } from "../../app/store/hooks";
import {
  setActividadPorAlumno,
  setActividades,
  setAlumnos,
  setProfesorPorActividad,
  setProfesores,
} from "../../app/store/slices/appStateSlice";

export const Searcher = ({
  label,
  goBack,
}: {
  label: "alumno" | "profesor" | "actividad";
  goBack: () => void;
}) => {
  const [searcherValue, setSearcherValue] = useState("");
  const {
    dataBase: { alumnos, profesores, actividades },
  } = useAppSelector((state) => state.appState);

  const handleSearcher = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearcherValue(value);
  };

  const arrFiltered = (
    arr: any[],
    type: "alumno" | "profesor" | "actividad",
  ): any[] => {
    if (!searcherValue) return arr;

    const result = arr.filter((el) =>
      type !== "actividad"
        ? `${el.name} ${el.lastname}`.toLowerCase().includes(searcherValue)
        : el.name.toLowerCase().includes(searcherValue),
    );
    return result;
  };

  return (
    <div className={"searcher-container"}>
      <h1 className="searcher-title">
        {label === "alumno" ? label + "s" : label + "es"}
      </h1>
      <h3 className="searcher-subtitle">{`Buscar ${label}`}</h3>
      <BackButton onClick={goBack} />

      <Input
        label={`Buscar ${label}`}
        width={"70%"}
        onChange={handleSearcher}
        type={"text"}
        name={"searcher"}
        value={searcherValue}
      />

      <div className="custom-list-container">
        <ul className="table-head">
          <li>Nombre</li>
          {label === "alumno" && <li>Estado</li>}
          <li>Acciones</li>
        </ul>

        {label === "alumno" && (
          <ul className="custom-list">
            {arrFiltered(alumnos, "alumno").map((item, i) => (
              <ListItem
                key={i}
                item={{
                  name: `${item.name} ${item.lastname}`,
                  state: item.state || false,
                  id: item.id,
                }}
                itemType={label}
              />
            ))}
          </ul>
        )}

        {label === "profesor" && (
          <ul className="custom-list">
            {arrFiltered(profesores, "profesor").map((item, i) => (
              <ListItem
                key={i}
                item={{
                  name: `${item.name} ${item.lastname}`,
                  state: false,
                  id: item.id,
                }}
                itemType={label}
              />
            ))}
          </ul>
        )}

        {label === "actividad" && (
          <ul className="custom-list">
            {arrFiltered(actividades, "actividad").map((item, i) => (
              <ListItem key={i} item={item} itemType={label} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export const ListItem = ({
  item,
  itemType,
}: {
  item: { name: string; state?: boolean; id: string };
  itemType: "alumno" | "profesor" | "actividad";
}) => {
  const navigate = useNavigate();
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

  const handleDelete = (id: string) => {
    if (itemType === "alumno") {
      dispatch(setAlumnos(alumnos.filter((al) => al.id !== id)));
    }

    if (itemType === "profesor") {
      dispatch(setProfesores(profesores.filter((pf) => pf.id !== id)));
    }

    if (itemType === "actividad") {
      dispatch(setActividades(actividades.filter((act) => act.id !== id)));
      dispatch(
        setActividadPorAlumno(
          actividadPorAlumno.filter((act) => act.idActividad !== id),
        ),
      );
      dispatch(
        setProfesorPorActividad(
          profesorPorActividad.filter((act) => act.idActividad !== id),
        ),
      );
    }
  };

  return (
    <li>
      <p>{item.name}</p>

      {itemType === "alumno" && (
        <div className={`list-item-state`}>
          <p style={item.state ? { color: "#0fd850" } : { color: "#676767" }}>
            {item.state ? "Activo" : "Inactivo"}
          </p>
        </div>
      )}

      <div className="list-item-buttons-container">
        {itemType !== "actividad" && (
          <Button
            onClick={() =>
              navigate(
                `/${itemType === "alumno" ? itemType + "s" : itemType + "es"}/${
                  item.id
                }`,
              )
            }
            type="open"
          />
        )}
        <Button
          onClick={() =>
            navigate(
              `/${itemType === "alumno" ? itemType + "s" : itemType + "es"}/${
                item.id
              }/edit`,
            )
          }
          type="edit"
        />
        <Button onClick={() => handleDelete(item.id)} type="delete" />
      </div>
    </li>
  );
};
