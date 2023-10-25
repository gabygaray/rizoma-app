import { Outlet } from "react-router-dom";
import { Layout } from "./components/layout/Layout";

export const App = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};
