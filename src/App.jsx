import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import Footer from "./components/common/Footer";
import Menu from "./components/common/Menu";
import Administrador from "./components/pages/Administrador";
import Error404 from "./components/pages/Error404";
import Inicio from "./components/pages/Inicio";
import Login from "./components/pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DetalleProducto from "./components/pages/productos/DetalleProducto";
import FormularioProducto from "./components/pages/productos/FormularioProducto";
import { useState } from "react";
import RutasProtegidas from "./components/routes/RutasProtegidas";
import RutasAdmin from "./components/routes/RutasAdmin";

function App() {
  const usuario = JSON.parse(sessionStorage.getItem("usuarioKey")) || "";
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuario);

  return (
    <BrowserRouter>
      <Menu
        usuarioLogueado={usuarioLogueado}
        setUsuarioLogueado={setUsuarioLogueado}
      />
      <Routes>
        <Route exact path="/" element={<Inicio></Inicio>} />
        <Route
          exact
          path="/administrador/*"
          element={
            <RutasProtegidas>
              <RutasAdmin></RutasAdmin>
            </RutasProtegidas>
          }
        />
        <Route
          exact
          path="/login"
          element={<Login setUsuarioLogueado={setUsuarioLogueado}></Login>}
        ></Route>
        <Route
          exact
          path="/detalleProducto/:id"
          element={<DetalleProducto></DetalleProducto>}
        />
        <Route exact path="*" element={<Error404></Error404>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
