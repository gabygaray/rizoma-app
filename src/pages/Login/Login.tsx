import { useAppDispatch } from "../../app/store/hooks";
import { setAuthenticated } from "../../app/store/slices/appStateSlice";
import { Input } from "../../components/input/Input";
import "./styles.css";

export const Login = () => {
  const dispatch = useAppDispatch();

  const handleLogin = () => {
    dispatch(setAuthenticated(true));
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-logo">
          {/* <img src="../../../public/Rizoma.png" /> */}
        </div>

        <div className="login-form">
          <p>Iniciar Sesión</p>

          <Input label="Usuario" />
          <Input label="Contraseña" />

          <div className="submit-container">
            <button onClick={handleLogin}>Ingresar</button>
          </div>
        </div>
      </div>
    </div>
  );
};
