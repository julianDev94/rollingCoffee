import { Routes, Route } from "react-router-dom";
import Administrador from "../pages/Administrador";
import FormularioProducto from "../pages/productos/FormularioProducto";

const RutasAdmin = () => {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={<Administrador></Administrador>}
        />
        <Route
          exact
          path="/administrador/crear"
          element={<FormularioProducto></FormularioProducto>}
        ></Route>
      </Routes>
    </>
  );
};

export default RutasAdmin;
