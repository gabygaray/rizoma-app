import { useNavigate } from "react-router-dom";
import "./styles.css";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-logo"></div>

      <div className="home-card alumnos" onClick={() => navigate("/alumnos")}>
        <div className="home-card-label">Alumnos</div>
      </div>
      <div
        className="home-card profesores"
        onClick={() => navigate("/profesores")}
      >
        <div className="home-card-label">Profesores</div>
      </div>
      <div
        className="home-card actividades"
        onClick={() => navigate("/actividades")}
      >
        <div className="home-card-label">Actividades</div>
      </div>
    </div>
  );
};
