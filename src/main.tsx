import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import "@fontsource/open-sans";

import { RouterProvider } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./app/store/store.ts";

import { SnackbarProvider } from "notistack";
import { router } from "./routes/index.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <SnackbarProvider autoHideDuration={2000} maxSnack={3}>
        <RouterProvider router={router} />
      </SnackbarProvider>
    </Provider>
  </React.StrictMode>,
);
