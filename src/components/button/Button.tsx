import "./styles.css";

export const Button = ({
  onClick,
  type,
}: {
  onClick: () => void;
  type: "delete" | "edit" | "open";
}) => {
  const labels = {
    delete: "Eliminar",
    edit: "Editar",
    open: "Ver",
  };
  return (
    <div className="custom-buttom-container">
      <button onClick={onClick}>{labels[type]}</button>
    </div>
  );
};
