import { Routes, Route } from "react-router-dom";
import Administrador from "../pages/Administrador";
import FormularioProducto from "../pages/productos/FormularioProducto";

const RutasAdmin = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Administrador></Administrador>} />
        <Route
          exact
          path="/crear"
          element={
            <FormularioProducto
              editar={false}
              titulo="Nuevo producto"
            ></FormularioProducto>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default RutasAdmin;
