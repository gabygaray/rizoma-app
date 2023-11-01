import { useState } from "react";
import { useAppDispatch } from "../../app/store/hooks";
import { setAuthenticated } from "../../app/store/slices/appStateSlice";
import { Input } from "../../components/input/Input";
import "./styles.css";

export const Login = () => {
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });
  const dispatch = useAppDispatch();

  const handleLogin = () => {
    dispatch(setAuthenticated(true));
  };

  const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setLoginForm({ ...loginForm, [name]: value });

    console.log({ name, value });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-logo"></div>

        <div className="login-form">
          <p>Iniciar Sesión</p>

          <Input
            label="Usuario"
            name="username"
            type="email"
            onChange={handleForm}
            value={loginForm.username}
          />
          <Input
            label="Contraseña"
            name="password"
            type="password"
            onChange={handleForm}
            value={loginForm.password}
          />

          <div className="submit-container">
            <button onClick={handleLogin}>Ingresar</button>
          </div>
        </div>
      </div>
    </div>
  );
};
