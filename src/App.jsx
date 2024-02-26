import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/common/Footer";
import Menu from "./components/common/Menu";
import Administrador from "./components/pages/Administrador";
import Error404 from "./components/pages/Error404";
import Inicio from "./components/pages/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetalleProducto from "./components/pages/productos/DetalleProducto";

function App() {
  return (
    <BrowserRouter>
    <Menu />
      <Routes>
         <Route exact path="/" element={<Inicio></Inicio>}/>
         <Route exact path="/administrador" element={<Administrador></Administrador>}/>
         <Route exact path="/login" element={<DetalleProducto></DetalleProducto>} />
         <Route exact path="*" element={<Error404></Error404>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
