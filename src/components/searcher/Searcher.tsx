import "./styles.css";

import { Input } from "../input/Input";
import { BackButton } from "../backButton/BackButton";
import { Button } from "../button/Button";
import { useNavigate } from "react-router-dom";

const mockAlumnos = [
  { nombre: "Maria Victoria Rodriguez Oviedo", estado: true },
  { nombre: "Juan Carlos Pérez", estado: true },
  { nombre: "Laura Sánchez", estado: true },
  { nombre: "Andrés Fernández", estado: false },
  { nombre: "Marta López", estado: true },
  { nombre: "Carlos González", estado: false },
  { nombre: "Sofía Martínez", estado: true },
  { nombre: "Pedro Ramírez", estado: false },
  { nombre: "Luisa Torres", estado: true },
  { nombre: "David García", estado: true },
  { nombre: "Ana Soto", estado: true },
  { nombre: "Fernando Peña", estado: false },
  { nombre: "Olga Mendoza", estado: true },
  { nombre: "Javier Ruiz", estado: false },
  { nombre: "Lucía Castro", estado: false },
  { nombre: "Miguel Jiménez", estado: false },
  { nombre: "Silvia Paredes", estado: true },
  { nombre: "Roberto Vargas", estado: false },
  { nombre: "Carolina Silva", estado: true },
  { nombre: "Eduardo Medina", estado: false },
];

const mockActividades = [
  { nombre: "CrossFit" },
  { nombre: "CrossTrainning" },
  { nombre: "Zumba" },
  { nombre: "Entrenamiento funcional" },
  { nombre: "Entrenamiento personalizados" },
  { nombre: "Adultos mayores" },
  { nombre: "Gap" },
];

export const Searcher = ({
  label,
  goBack,
}: {
  label: "alumno" | "profesor" | "actividad";
  goBack: () => void;
}) => {
  return (
    <div className={"searcher-container"}>
      <h1 className="searcher-title">
        {label === "alumno" ? label + "s" : label + "es"}
      </h1>
      <h3 className="searcher-subtitle">{`Buscar ${label}`}</h3>
      <BackButton onClick={goBack} />

      <Input label={`Buscar ${label}`} width={"70%"} />
      <div className="custom-list-container">
        <ul className="table-head">
          <li>Nombre</li>
          {label === "alumno" && <li>Estado</li>}
          <li>Acciones</li>
        </ul>

        {label !== "actividad" ? (
          <ul className="custom-list">
            {mockAlumnos.map((item, i) => (
              <ListItem key={i} item={item} itemType={label} />
            ))}
          </ul>
        ) : (
          <ul className="custom-list">
            {mockActividades.map((item, i) => (
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
  item: { nombre: string; estado?: boolean };
  itemType: "alumno" | "profesor" | "actividad";
}) => {
  const navigate = useNavigate();

  return (
    <li>
      <p>{item.nombre}</p>

      {itemType === "alumno" && (
        <div className={`list-item-state`}>
          <p style={item.estado ? { color: "#0fd850" } : { color: "#676767" }}>
            {item.estado ? "Activo" : "Inactivo"}
          </p>
        </div>
      )}

      <div className="list-item-buttons-container">
        {itemType !== "actividad" && (
          <Button onClick={() => navigate("/alumnos/5")} type="open" />
        )}
        <Button onClick={() => console.log("editar")} type="edit" />
        <Button onClick={() => console.log("eliminar")} type="delete" />
      </div>
    </li>
  );
};
