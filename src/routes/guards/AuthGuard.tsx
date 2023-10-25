import { Navigate, Outlet } from "react-router-dom";
import * as URL from "../utils/_url";
import { App } from "../../App";
import { useAppSelector } from "../../app/store/hooks";

export interface AuthGuardProps {
  isPublic?: boolean;
}

export const AuthGuard = (props: AuthGuardProps): JSX.Element => {
  const { isPublic = false } = props;

  const { authenticated: token } = useAppSelector((state) => state.appState);
  //   const token = getLocalStorage("token");

  // TODO: validate token and redirect to login
  if (isPublic && !token) return <Outlet />;
  if (!isPublic && !token) return <Navigate to={URL.ROUTE_URL_LOGIN} replace />;
  if (isPublic && token) return <Navigate to={URL.ROUTE_URL_ROOT} replace />;
  return <App />;
};
