import { createBrowserRouter } from "react-router-dom";

import { Login } from "../pages/Login/Login";
import { Actividades } from "../pages/Actividades/Actividades";
import { Alumnos } from "../pages/Alumnos/Alumnos";
import { Profesores } from "../pages/Profesores/Profesores";
import { Visualizer } from "../pages/Visualizer/Visualizer";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";
import { AuthGuard } from "./guards/AuthGuard";

import * as URL from "./utils/_url";
import { Home } from "../pages/Home/Home";
import { Editor } from "../pages/Editor/Editor";

export const ROUTES_DEF = [
  {
    path: URL.ROUTE_URL_ROOT,
    element: <AuthGuard />,
    errorElement: <ErrorPage />,
    children: [
      { path: URL.ROUTE_URL_ROOT, element: <Home /> },

      //ALUMNOS
      { path: URL.ROUTE_URL_ALUMNOS, element: <Alumnos /> },
      {
        path: URL.ROUTE_URL_ALUMNOS_BY_ID,
        element: <Visualizer type="alumno" />,
      },
      {
        path: URL.ROUTE_URL_ALUMNOS_EDIT_BY_ID,
        element: <Editor type="alumno" />,
      },

      //PROFESORES
      { path: URL.ROUTE_URL_PROFESORES, element: <Profesores /> },
      {
        path: URL.ROUTE_URL_PROFESORES_BY_ID,
        element: <Visualizer type="profesor" />,
      },
      {
        path: URL.ROUTE_URL_PROFESORES_EDIT_BY_ID,
        element: <Editor type="profesor" />,
      },

      //ACTIVIDADES
      { path: URL.ROUTE_URL_ACTIVIDADES, element: <Actividades /> },
      {
        path: URL.ROUTE_URL_ACTIVIDADES_BY_ID,
        element: <Visualizer type="actividad" />,
      },
      {
        path: URL.ROUTE_URL_ACTIVIDADES_EDIT_BY_ID,
        element: <Editor type="actividad" />,
      },
    ],
  },
  {
    path: URL.ROUTE_URL_ROOT,
    element: <AuthGuard isPublic />,
    children: [{ element: <Login />, path: URL.ROUTE_URL_LOGIN }],
  },
];

export const router = createBrowserRouter(ROUTES_DEF);
